import { Router } from 'express';
import EmployeeModel from '../../db/models/User';
import { HttpError } from '../../libs/http-error';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
// import { checkAuth } from '../middleware/check-auth';

const EmployeeRouter = Router();

// userRouter.post('/sign-up', async (req, res, next) => {
//   const { employeeid, password } = req.body;

//   // check user not in database
//   const foundUser = await UserModel.findOne({
//     where: { employeeid: employeeid },
//   });

//   if (foundUser) {
//     return next(new HttpError(423, 'username already exists'));
//   }

//   // encrypt password salt + hashing
//   const serverSecret = process.env.SERVER_SECRET!;
//   const hashedPassword = await bcrypt.hash(password, 12);

//   // const user = await UserModel.create({
//   //   employeeid: employeeid,
//   //   password: hashedPassword,
//   // });

//   // creat JWT token for user

//   let currentDate = new Date();
//   let expireDate = new Date(currentDate.getTime() + 60 * 60 * 1000);
//   const access_token = jwt.sign(
//     {
//       user_id: user.dataValues.id,
//     },
//     serverSecret,
//     {
//       expiresIn: '1hr',
//     }
//   );

//   res.status(200).json({
//     access_token: access_token,
//     expires_at: expireDate,
//     privilege: user.privilege,
//   });
//   return next();
// });

EmployeeRouter.post('/sign-in', async (req, res, next) => {
  const { employeeid, password } = req.body;

  // check user not in database
  const user = await EmployeeModel.findOne({
    where: { employeeid: employeeid, password: password },
  });
  console.log(user);

  if (!user) {
    return next(new HttpError(423, 'username does not exist'));
  }

  // compare password
  let authenticated = bcrypt.compare(password, user.password);

  if (!authenticated) {
    return next(new HttpError(423, 'wrong password'));
  }

  // creat JWT token for user
  let currentDate = new Date();
  let expireDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
  const serverSecret = process.env.SERVER_SECRET!;
  const access_token = jwt.sign(
    {
      user_id: user.dataValues.employeeid,
    },
    serverSecret,
    {
      expiresIn: '24hr',
    }
  );

  res.status(200).json({
    access_token: access_token,
    expires_at: expireDate,
  });

  return next();
});

// userRouter.get('/check-auth', checkAuth, (req, res, next) => {
//   res.status(200).send();
//   next();
// });

export default EmployeeRouter;
