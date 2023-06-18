const Sequelize=require('sequelize');

const sequelize=new Sequelize('expnece','root','Av1122',{
    dialect: 'mysql', host: 'localhost'
})

module.exports=sequelize;