const express=require("express")
const technologyController=require("../controllers/technologyController")
const Router=express.Router()

Router.route("/").get(technologyController.getAllTechs);



module.exports=Router;