const {Sequelize}=require("sequelize")
const dotenv=require("dotenv")

dotenv.config({path:'./config.env'})
const sequelize=new Sequelize("tech_api",process.env.DB_USER,process.env.DB_PASSWORD,
                            {dialect:"mysql",host:process.env.DB_HOST})

module.exports=sequelize
