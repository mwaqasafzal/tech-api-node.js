const PL=require("./models/pl")
const Technology=require("./models/technology")
const Organization=require("./models/organization")
const sequelize=require("./dbConnect")//import connection object to synchronize the models to relations


const configDB=async(req,res)=>{
    
    //developing relationships among models
    PL.hasMany(Technology,{onDelete:'CASCADE'})
    Technology.belongsTo(PL)
    Organization.hasMany(Technology,{onDelete:'CASCADE'})
    Technology.belongsTo(Organization)
    await sequelize.sync();
}

module.exports=configDB
