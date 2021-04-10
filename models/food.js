'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.food.belongsToMany(models.user, {through:'user_food'})
    }
  };
  food.init({
    name: {
      type:DataTypes.TEXT, allowNull:false, //this is constraints
      validate:{ //this is validation
        notNull: true,
        notEmpty:true
      }
    },
  }, {
    sequelize,
    modelName: 'food',
  });
  return food;
};