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
class Employee extends Model<
  InferAttributes<Employee>,
  InferCreationAttributes<Employee>
> {
  declare employeeid: number;
  declare password: string;
  declare firstname: string;
  declare lastname: string;
  declare age: number;
}

Employee.init(
  {
    employeeid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
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
  },
  {
    sequelize: getDbConnection(),
    modelName: 'employee',
    timestamps: false,
    freezeTableName: true,
  }
);

export default Employee;
