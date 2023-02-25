import dotenv from 'dotenv';
import path from 'path';
import express, { ErrorRequestHandler } from 'express';
import cors from 'cors';
import getDbConnection from './db/db-config';
import { HttpError } from './libs/http-error';

// injecting environment variables to runtime
dotenv.config({
  path: path.join(__dirname, '../env/server.env'),
});

const server = express();

/** defining custom middleware*/
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof HttpError) {
    res.status(err.status_code).json({ message: err.message });
  }
};

/** Registering middlewares */
server.use(cors());
server.use(express.json());

// allow query strings to be parse in URL with the qs lib
server.use(express.urlencoded({ extended: true }));

// error handler
server.use(errorHandler);

// start server
if (!process.env.AUTH_SERVER_PORT) {
  console.log('missing environment, halting server');
  process.exit(1);
}

// check DB connection
const dbConn = getDbConnection();
let seq = dbConn.sync();

if (!seq) {
  console.log(`db connection failed`);
  process.exit(1);
}

server.listen(process.env.AUTH_SERVER_PORT, () => {
  console.log(
    `Express Server is listening at port:${process.env.AUTH_SERVER_PORT}`
  );
});
