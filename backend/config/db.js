const mongoose=require("mongoose")
//connecting to mongoose
const config=mongoose.connect("",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then((result)=>{
console.log("connected to database successfully")
})
.catch((err)=>{
    console.log("error connecting to database")
})
module.exports={config}