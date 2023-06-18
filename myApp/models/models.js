const Sequelize=require('sequelize');
const sequelize=require('../database/database');

const User=sequelize.define('expence-trackers', {
    Id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull:false
    },
   name:{
    type: Sequelize.STRING,
    allowNull:false
   },
   email:{
    type :Sequelize.STRING,
    unique:true,
    allowNull:false
   },
   password:{
    type: Sequelize.STRING,
    allowNull :false
   }
});
module.exports=User;