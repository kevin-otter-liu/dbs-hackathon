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

    // Check accessToken validity
    // If accessToken is not valid, return 400 INVALID USER
    // else, return 200 OK
    // TODO: Replace dummy 200 OK
    res.status(200).json({
        policies: []
    })
});

ClaimRouter.put('/', async (req, res, next) => {
    // Returns the list of claim records the employee has
    const { accessToken, claimId, insuranceId,
        firstName, lastName, expenseDate,
        amount, purpose, followUp,
        previousClaimId, status } = req.body

    // Check accessToken validity
    // If accessToken is not valid, return 400 INVALID USER
    // else, return 200 OK
    // TODO: Replace dummy 200 OK
    res.status(200).json({
        policy: {}
    })
});

ClaimRouter.delete('/', async (req, res, next) => {
    // Returns the list of claim records the employee has
    const claimId = req.query.claimId as string;


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
        }).then(r => {
            res.status(200).json({
            })
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
    })
});

export default ClaimRouter;