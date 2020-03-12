const {Model,DataTypes}=require("sequelize")
const sequelize=require("../dbConnect")//getting the connection object so that it could be used in model
const validator=require("validator")

class Organization extends Model{}

Organization.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING
    }
},{sequelize,modelName:"organization"})

module.exports=Organization