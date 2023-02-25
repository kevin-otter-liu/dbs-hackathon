import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    ForeignKey,
  } from 'sequelize';
  
import getDbConnection from '../db-config';
import Employee from './User';
  
  // import Token from './Token';
  
  // defining Models: attributes at creation and attributes output from DB
  class InsurancePolicy extends Model<
    InferAttributes<InsurancePolicy>,
    InferCreationAttributes<InsurancePolicy>
  > {
    declare insuranceid: number;
    declare employeeid: ForeignKey<Employee['employeeid']>;
    declare insurancetype: string;
    declare policystartdate: string;
    declare policyterm: string;
    declare policyenddate: string;
    declare claimlimit: number;
    declare remainingclaimlimit: number;

  }
  
  InsurancePolicy.init(
    {
      insuranceid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      insurancetype: {
        type: DataTypes.STRING,
      },
      policystartdate: {
        type: DataTypes.STRING,
      },
      policyterm: {
        type: DataTypes.STRING,
      },
      policyenddate: {
        type: DataTypes.STRING,
      },
      claimlimit: {
        type: DataTypes.FLOAT,
      },
      remainingclaimlimit: {
        type: DataTypes.FLOAT,
      },
    },
    { 
      sequelize: getDbConnection(), 
      modelName: 'insurancepolicies',
      timestamps: false,
    }
  );
  
  export default InsurancePolicy;
  