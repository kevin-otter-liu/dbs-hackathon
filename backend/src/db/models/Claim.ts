import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    ForeignKey
  } from 'sequelize';

import getDbConnection from '../db-config';

class Claim extends Model<
  InferAttributes<Claim>,
  InferCreationAttributes<Claim>
> {
    declare claimid: number;
    declare insuranceid: number; // add foreign key ForeignKey<InsurancePolicy["insuranceid"]>
    declare firstname: string;
    declare lastname: string;
    declare expensedate: string;
    declare amount: number;
    declare purpose: string;
    declare followup: boolean; // remember to convert bit to boolean when pulling from db
    declare previousclaimid: number;
    declare status: string;
    declare lasteditedclaimdate: string;
}

Claim.init(
    {
        claimid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
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
            type: DataTypes.BOOLEAN,
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
)