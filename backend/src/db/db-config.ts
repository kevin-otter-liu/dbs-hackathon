import { Sequelize } from 'sequelize';

const dbConn: Sequelize | null = null;

const getDbConnection = () => {
  if (dbConn) {
    console.log('using exisitng db Conn');
    return dbConn;
  }
  console.log('creating new dbConn');

  console.log(`her here ${process.env.DB_PORT}`);
  console.log(process.env.DB_PASSWORD);
  return new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
      host: process.env.DB_HOST!,
      dialect: 'postgres',
      port: parseInt(process.env.DB_PORT!),
      quoteIdentifiers: false,
    }
  );
};

export default getDbConnection;
