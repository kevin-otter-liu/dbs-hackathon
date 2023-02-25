import { Router } from 'express';
import EmployeeModel from '../../db/models/User';
import sequelize from 'sequelize/types/sequelize';
import { HttpError } from '../../libs/http-error';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import getDbConnection from '../../db/db-config';
import { CustomRequest } from '../middleware/check-auth';
import InsurancePolicy from '../../db/models/InsurancePolicy';
import InsuranceClaim from '../../db/models/InsuranceClaim';
import { Op } from 'sequelize';

const ClaimRouter = Router();

async function getAllClaims(employeeid: number) {
  const policies = await InsurancePolicy.findAll({
    where: { employeeid },
  });

  if (policies.length == 0) {
    return [];
  } else {
    const insuranceids = policies.map((p) => p.insuranceid);
    return await InsuranceClaim.findAll({
      where: {
        [Op.or]: insuranceids.map((insuranceid) => ({ insuranceid })),
      },
    });
  }
}

ClaimRouter.get('/', async (req, res, next) => {
  const { employeeid } = (req as CustomRequest).employee;
  const policies = await InsurancePolicy.findAll({
    where: { employeeid },
  });

  if (policies.length === 0) {
    res.status(200).json({
      claims: [],
    });
  }

  const insuranceids = policies.map((p) => p.insuranceid);

  const claims = await InsuranceClaim.findAll({
    where: {
      [Op.or]: insuranceids.map((insuranceid) => ({ insuranceid })),
    },
  });

  res.status(200).json({ claims });
  return next();
});

ClaimRouter.post('/', async (req, res, next) => {
  // Returns the list of claim records the employee has
  let employee = (req as CustomRequest).employee;

  const {
    expensedate,
    amount,
    purpose,
    followup,
    insuranceid,
    previousclaimid,
  } = req.body;

  console.log(expensedate);
  console.log(amount);
  console.log(purpose);
  console.log(followup);
  console.log(insuranceid);
  console.log(previousclaimid);

  let lastEditedClaimDate = new Date().toString();

  //   const getMinPrice = async () =>
  //     await InsuranceClaim.findAll({
  //       attributes: [
  //         [sequelize.fn('max', sequelize.col('insuranceid')), 'minPrice'],
  //       ],
  //     });
  //   let id = await getMinPrice();
  //   console.log(id);
  let max_id: number = await InsuranceClaim.max('claimid');
  let insuranceClaim = await InsuranceClaim.create({
    claimid: max_id + 1,
    insuranceid: insuranceid,
    firstname: employee.firstname,
    lastname: employee.lastname,
    expensedate,
    amount: amount,
    purpose,
    followup,
    previousclaimid,
    status: 'pending',
    lasteditedclaimdate: lastEditedClaimDate,
  });

  if (!insuranceClaim) {
    return next(new HttpError(400, 'insurance_claim_not_found'));
  }

  let res_list = await InsuranceClaim.findAll();

  res.status(200).json(res_list);
  return next();
});

ClaimRouter.put('/', async (req, res, next) => {
    const {employeeid} = (req as CustomRequest).employee;
    const {
        claimid, insuranceid,
        expensedate, amount, purpose, followup,
        previousclaimid
    } = req.body

    let isFound = false;

    await getAllClaims(employeeid).then(async (claims) => {
        for (let i = 0; i < claims.length; i++) {
            if (claims[i].claimid === claimid) {
                // Found the claim
                isFound = true;
                if (insuranceid === claims[i].insuranceid
                    && expensedate === claims[i].expensedate
                    && amount === claims[i].amount
                    && purpose === claims[i].purpose
                    && previousclaimid === claims[i].previousclaimid
                    && followup === claims[i].followup) {
                    // Parameters have no change from database entry, do not update last edited
                    console.log("No change needed");
                } else {
                    console.log("Change needed");
                    insuranceid && (claims[i].insuranceid = insuranceid);
                    expensedate && (claims[i].expensedate = expensedate);
                    amount && (claims[i].amount = amount);
                    purpose && (claims[i].purpose = purpose);
                    previousclaimid && (claims[i].previousclaimid = previousclaimid);
                    followup && (claims[i].followup = followup);
                    claims[i].lasteditedclaimdate = new Date().toISOString();
                    await claims[i].save();
                    await getAllClaims(employeeid).then((r) => {
                        res.status(200).json({
                            claims: r
                        })
                    });
                }
                await getAllClaims(employeeid).then((r) => {
                    res.status(200).json({
                        claims: r
                    })
                });
                break;
            }
        }

        if (!isFound) {
            res.status(400).json({
                "message": "Invalid claim id given"
            });
          });
        }
        break;
      }
    }

    if (!isFound) {
      res.status(400).json({
        message: 'Invalid claim id given',
      });
    }
  });

  return next();
});

ClaimRouter.delete('/', async (req, res, next) => {
    // Returns the list of claim records the employee has
    const claimId = req.query.claimId as string;
    const {employeeid} = (req as CustomRequest).employee;

    // Check accessToken validity
    // If accessToken is not valid, return 400 INVALID USER
    // else, return 200 OK
    // TODO: Replace dummy 200 OK
    console.log("req.query");
    console.log();
    const db = getDbConnection().sync();
    db.then(() => {
        InsuranceClaim.destroy({
            where: {
                claimid: parseInt(claimId),
            }
        }).then(async r => {
            await getAllClaims(employeeid).then((r) => {
                res.status(200).json({
                    claims: r
                })
            });
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
    })
      .then((r) => {
        res.status(200).json({});
      })
      .catch((error) => {
        console.error('Failed to retrieve data : ', error);
      });
  });
});

export default ClaimRouter;
