
const {Model,DataTypes}=require("sequelize")
const sequelize=require("../dbConnect")//getting the connection object so that it could be used in model


class Technology extends Model{}

Technology.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    type:{
        type:DataTypes.ENUM(['framework','library']),
        allowNull:false,
    },
    purpose:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:{
                args:[3],
                msg:"at least 3 characters to describe the purpose"
            }
        }
    },
    nature:{
        type:DataTypes.ENUM(['opensource','proprietary']),
        allowNull:false
    },
    gitlink:{
        type:DataTypes.STRING,
        validate:{
            isOpenSource(value){
                if(this.nature.includes("opensource") && value=="")
                    throw new Error("vcs link is mandatory for open source projects")
            }
        }
    },
    released:{
        type:DataTypes.DATE,
        allowNull:false
    },
    currentRelease:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
},{sequelize,modelName:"technology"})

module.exports=Technology