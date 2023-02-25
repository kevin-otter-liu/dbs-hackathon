"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var dbUser = process.env.DB_USER;
var dbPassword = process.env.DB_PASSWORD;
var dbHost = process.env.DB_HOST;
var dbPort = parseInt(process.env.DB_PORT);
var dbName = process.env.DB_NAME;
var dbDriver = process.env.DB_DRIVER;
var sequelizeConnection = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
    port: dbPort,
    quoteIdentifiers: false
});
exports["default"] = sequelizeConnection;
