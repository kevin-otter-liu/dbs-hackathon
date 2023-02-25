const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Employee extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
      }
    }
    Employee.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
       password: DataTypes.STRING,
       firstname: DataTypes.STRING,
       LastName: DataTypes.STRING,
       age: DataTypes.DATE,
      },
      {
        // options
        sequelize,
        modelName: 'Employee',
        tableName: 'Employee',
        createdAt: 'date_created',
        updatedAt: 'date_updated',
      },
    );
    return Employee;
  };