const mongoose=require("mongoose")
//connecting to mongoose
const config=mongoose.connect("mongodb+srv://kennie:869480Ak@cluster0.zkjbfkp.mongodb.net/ECOMMERCE?retryWrites=true&w=majority",{
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