
const fs=require("fs")
require("../dbConnect")
const configDB=require("../dbConfig")
const Technology=require("../models/technology")
const Organization=require("../models/organization")
const PL=require("../models/pl")


let technologies=JSON.parse(fs.readFileSync("../data/technologies.json"))

configDB()
.then(async ()=>{
    for(let tech of technologies){
        const {name,organization,language,purpose,type,nature,
        gitlink,released,currentRelease}=tech;
        
        const techInDb=await Technology.create({name,language,type,nature,purpose,gitlink,released,currentRelease}) 
        const langInDb=await PL.findOne({where:{name:language}});
        if(langInDb)
            await techInDb.setPl(langInDb)
        else
            await techInDb.createPl({name:language})
            
        if(organization)//there is an organization owing tech
        {
            let org=await Organization.findOne({where:{name:organization}})
            if(!org)
               await techInDb.createOrganization({name:organization})
            else
               await techInDb.setOrganization(org); 
        }

    }
})
.catch(console.error)