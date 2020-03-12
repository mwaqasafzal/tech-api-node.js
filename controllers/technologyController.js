const Technology=require("../models/technology")
const PL=require("../models/pl")
const Organization=require("../models/organization")
exports.getAllTechs=async(req,res,next)=>{
    
    let plQuery={};
    let organizationQuery={};
    if(req.query.pl)
        plQuery.name=req.query.pl

    if(req.query.organization)
        organizationQuery.name=req.query.organization
    try {
        const technologies=await Technology.findAll({attributes:["name","type","purpose","nature","gitlink","released","currentRelease"],include:[{model:PL,where:plQuery,attributes:["name"]},{model:Organization,where:organizationQuery,attributes:["name"]}]});
        if(technologies.length==0)
            throw new Error("no technology found")
        res.send({
            status:"success",
            technologies
        })    
    } catch (error) {
        res.send({
            status:"failed",
            message:error.message
        })    
    }
    
}

