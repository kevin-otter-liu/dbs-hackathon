import { Router } from 'express';
import EmployeeModel from "../../db/models/User";
import {HttpError} from "../../libs/http-error";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ClaimRouter = Router();

ClaimRouter.get('/', async (req, res, next) => {
    // Returns the list of claim records the employee has
    const { accessToken } = req.body;

    // Check accessToken validity
    // If accessToken is not valid, return 400 INVALID USER
    // else, return 200 OK
    // TODO: Replace dummy 200 OK
    res.status(200).json({
        policies: []
    })
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
    const { accessToken, claimId } = req.body

    // Check accessToken validity
    // If accessToken is not valid, return 400 INVALID USER
    // else, return 200 OK
    // TODO: Replace dummy 200 OK
    res.status(200).json({
        policies: []
    })
});

export default ClaimRouter;