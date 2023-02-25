import jwt from 'jsonwebtoken';
import { HttpError } from '../../libs/http-error';
import EmployeeModel from '../../db/models/User';
import { RequestHandler, Request } from 'express';

export interface CustomRequest extends Request {
  employee: EmployeeModel;
}

export const checkAuth: RequestHandler = async (req, res, next) => {
  const serverSecret = process.env.SERVER_SECRET!;
  if (!req.headers.authorization) {
    return next(new HttpError(423, 'missing authorization'));
  }

  const authorisationHeaders = req.headers.authorization.split(' ');
  if (authorisationHeaders.length < 2) {
    return next(new HttpError(423, 'missing authorisation'));
  }

  if (authorisationHeaders[0] !== 'Bearer') {
    return next(new HttpError(423, 'wrong authorisation type'));
  }

  if (authorisationHeaders[1] === 'null') {
    return next(new HttpError(423, 'no access_token attached'));
  }

  let access_token = authorisationHeaders[1];

  if (!access_token) {
    return next(new HttpError(423, 'missing authorization'));
  }

  type PayloadType = {
    employeeid: string;
    exp: number;
  };

  let payload;

  try {
    payload = jwt.verify(access_token, serverSecret);
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return next(new HttpError(404, error.message));
    }
  }

  const { employeeid, exp } = payload as unknown as PayloadType;

  // check if token expired
  let user = await EmployeeModel.findByPk(employeeid);

  if (!user) {
    return next(new HttpError(404, 'user_not_found'));
  }

  // check expiry time of jwt
  let currentTime = new Date();
  let jwt_expire_at = new Date(exp * 1000);

  if (jwt_expire_at.getTime() < currentTime.getTime()) {
    return next(new HttpError(404, 'token_expired'));
  }

  // get user and append to req body to pass thru middleware
  (req as CustomRequest).employee = user;
  next();
};
