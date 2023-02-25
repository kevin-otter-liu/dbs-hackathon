import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import getDbConnection from '../db-config';

// import Token from './Token';

// defining Models: attributes at creation and attributes output from DB
class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare employeeid: string;
  declare password: string;
  declare firstname: string;
  declare lastname: string;
  declare age: number;
}

User.init(
  {
    password: {
      type: DataTypes.STRING,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    employeeid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
  },
  { sequelize: getDbConnection(), modelName: 'user' }
);

export default User;
