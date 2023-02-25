import { Router } from 'express';
import EmployeeModel from '../../db/models/User';
import InsuranceClaim from '../../db/models/InsuranceClaim';
import { HttpError } from '../../libs/http-error';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { CustomRequest } from '../middleware/check-auth';
import sequelize from 'sequelize/types/sequelize';

const ClaimRouter = Router();

ClaimRouter.get('/', async (req, res, next) => {
  // Returns the list of claim records the employee has
  const { accessToken } = req.body;

  // Check accessToken validity
  // If accessToken is not valid, return 400 INVALID USER
  // else, return 200 OK
  // TODO: Replace dummy 200 OK
  res.status(200).json({
    policies: [],
  });
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
});

//   InsuranceClaim// Check accessToken validity
// If accessToken is not valid, return 400 INVALID USER
// else, return 200 OK
// TODO: Replace dummy 200 OK
//   .res
//     .status(200)
//     .json({
//       policies: [],
//     });
// });

ClaimRouter.put('/', async (req, res, next) => {
  // Returns the list of claim records the employee has
  const {
    accessToken,
    claimId,
    insuranceId,
    firstName,
    lastName,
    expenseDate,
    amount,
    purpose,
    followUp,
    previousClaimId,
    status,
  } = req.body;

  // Check accessToken validity
  // If accessToken is not valid, return 400 INVALID USER
  // else, return 200 OK
  // TODO: Replace dummy 200 OK
  res.status(200).json({
    policy: {},
  });
});

ClaimRouter.delete('/', async (req, res, next) => {
  // Returns the list of claim records the employee has
  const { accessToken, claimId } = req.body;

  // Check accessToken validity
  // If accessToken is not valid, return 400 INVALID USER
  // else, return 200 OK
  // TODO: Replace dummy 200 OK
  res.status(200).json({
    policies: [],
  });
});

export default ClaimRouter;
