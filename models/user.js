'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.belongsToMany(models.food, {through:'user_food'})
    }
  };
  user.init({
    firstName: {
      type: DataTypes.STRING, allowNull:false,
      validate:{
        notNull: true,
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING, allowNull:false,
      validate:{
        notNull: true,
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING, allowNull:false,
      validate:{
        notNull: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING, allowNull:false,
      validate:{
        notNull: true,
        notEmpty: true
      }
    },
    height: {
      type: DataTypes.STRING, allowNull:false,
      validate:{
        notNull: true,
        notEmpty: true
      }
    },
    weight: {
      type: DataTypes.INTEGER, allowNull:false,
      validate:{
        notNull: true,
        notEmpty: true
      }
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};