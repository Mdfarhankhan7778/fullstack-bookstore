import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import cors from "cors";
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import adminRoute from './route/admin.route.js';
const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
// app.get("/",(req,res)=>{
//     res.send("hello");
// });


// connection 
const URL = process.env.MongoDBURL_ATLAS;
try{
    mongoose.connect(URL,{
        // useNewUrlParser:true,
        // useNewUnifiedTopology:true
    });
    console.log("connected to mongodb");

}catch(error)
{
    console.log("Error:",error);

}
// defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);
app.use("/admin",adminRoute);



app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});


