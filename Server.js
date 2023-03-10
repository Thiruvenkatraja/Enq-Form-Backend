const express = require('express');
const mongoose = require('mongoose');
const bodyPraser = require('body-parser');
const cors = require('cors');
const dotenv=require('dotenv')
const app = express();
const PORT =process.env.PORT|| 5000;
routes = require('./Routes/Emproute');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

const corsOrigin ={
  origin:['http://localhost:3000','https://full-stack-form-frontent.vercel.app'], 
  credentials:true,
  crossorigin:true,            
  optionSuccessStatus:200
}

const enquirySchema=require('./Routes/Emproute')
dotenv.config();

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://venkat999:venkat%40999@cluster0.4zuppce.mongodb.net/EnqDetails')
.then((x)=>{
    console.log(`Connected to Mongo Database:"${x.connections[0].name}"`)
  })
  .catch((err)=>{
    console.log("Connection Error",err)
  })

  app.use('/', routes);
  app.use(bodyPraser.json())
  app.use(bodyPraser.urlencoded({
      extended:false
  }))

  app.use(cors(corsOrigin))
  
  app.use('/enq',enquirySchema)

app.listen(process.env.PORT||5000, () => {
  console.log(`Example app listening on port ${PORT}`)
})