//model of programming language
const {Model,DataTypes}=require("sequelize")
const sequelize=require("../dbConnect")//getting the connection object so that it could be used in model


class PL extends Model{}

PL.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{sequelize,modelName:"pl"})

module.exports=PL