import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import getDbConnection from '../db-config';
import InsurancePolicy from './InsurancePolicy';

class InsuranceClaim extends Model<
  InferAttributes<InsuranceClaim>,
  InferCreationAttributes<InsuranceClaim>
> {
  declare claimid: CreationOptional<number>;
  declare insuranceid: ForeignKey<InsurancePolicy['insuranceid']>;
  declare firstname: string;
  declare lastname: string;
  declare expensedate: string;
  declare amount: number;
  declare purpose: string;
  declare followup: CreationOptional<number>; // remember to convert bit to boolean when pulling from db
  declare previousclaimid: CreationOptional<number>;
  declare status: string;
  declare lasteditedclaimdate: string;
}

InsuranceClaim.init(
  {
    claimid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    insuranceid: {
      type: DataTypes.INTEGER,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    expensedate: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.NUMBER,
    },
    purpose: {
      type: DataTypes.STRING,
    },
    followup: {
      type: DataTypes.NUMBER,
    },
    previousclaimid: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING,
    },
    lasteditedclaimdate: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: getDbConnection(),
    modelName: 'insuranceclaims',
    timestamps: false,
  }
);

export default InsuranceClaim;
