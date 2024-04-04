const express = require("express");
const app = express();
const port = 3000;
const db=require("./config/db")
const cors=require("cors")
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://kennie:869480Ak@cluster0.zkjbfkp.mongodb.net/ECOMMERCE?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then((result)=>{
console.log("connected to database successfully")
})
.catch((err)=>{
    console.log("error connecting to database")
})
const signup = require("./controllers/signup");
const login = require("./controllers/login");
app.use(express.json());
app.use(cors({
    origin: function (origin, callback) {
      // Allow requests from the specified origin when credentials are included
      if (origin && origin === 'http://localhost:3001') {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true // Enable credentials
  }));
app.use("/signup", signup);
app.use("/login", login);
app.get("/",(req,res)=>{
res.send("how are you")
})
app.listen(3000, (req, res) => {
  console.log(`you are running on port ${port}`);
});
