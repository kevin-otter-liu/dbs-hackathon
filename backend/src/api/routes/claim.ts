import { Router } from 'express';
import EmployeeModel from "../../db/models/User";
import { HttpError } from "../../libs/http-error";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getDbConnection from '../../db/db-config';
import { CustomRequest } from '../middleware/check-auth';
import InsurancePolicy from '../../db/models/InsurancePolicy';
import InsuranceClaim from '../../db/models/InsuranceClaim';
import { Op } from 'sequelize';

const ClaimRouter = Router();

async function getAllClaims(employeeid: number) {
    const policies = await InsurancePolicy.findAll({
        where: {employeeid}
    });

    if (policies.length == 0) {
        return [];
    } else {
        const insuranceids = policies.map(p => p.insuranceid);
        return await InsuranceClaim.findAll({
            where: {
                [Op.or]: insuranceids.map(insuranceid => ({ insuranceid }))
            }
        })
    }
}

ClaimRouter.get('/', async (req, res, next) => {
    const { employeeid } = (req as CustomRequest).employee;
    const policies = await InsurancePolicy.findAll({
        where: { employeeid },
    });

    if (policies.length === 0) {
        res.status(200).json({
            claims: []
        });
    }

    const insuranceids = policies.map(p => p.insuranceid);

    const claims = await InsuranceClaim.findAll({
        where: {
            [Op.or]: insuranceids.map(insuranceid => ({ insuranceid }))
        }
    });

    res.status(200).json({ claims });
    return next();
});

ClaimRouter.post('/', async (req, res, next) => {
    // Returns the list of claim records the employee has
    const { accessToken, firstName, lastName,
        expenseDate, amount, purpose,
        followUp, previousClaimId, status } = req.body

    // TODO: Replace dummy 200 OK
    res.status(200).json({
        policies: []
    })
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
                    res.status(200).json({
                        policies: []
                    });
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
                break;
            }
        }

        if (!isFound) {
            res.status(400).json({
                "message": "Invalid claim id given"
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
});

export default ClaimRouter;