import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.route.js";

//mongodb connection
const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
//server connection
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {  
  res.send("Hello World.....");
});

//test api
app.use("/api/user/", userRoutes);

// //signup api
app.use(express.json()); // this is going to allow json as the input of the backend.
app.use('/api/auth', authRoutes)

//middleware
app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success : false,
    statusCode,
    message
  });
});

//cookie parser 
app.use(cookieParser());

//post route
app.use('/api/post', postRoutes);