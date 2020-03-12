const express=require("express")
require("./dbConnect")
const configDB=require("./dbConfig")
const techRoutes=require("./routers/technologyRoutes")

const app=express();

//configuring the application
const PORT=process.env.PORT||3000

//routing the application
app.use("/technologies",techRoutes);
configDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server Started..")
    })
})
.catch(console.log)
