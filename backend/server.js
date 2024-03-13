const express = require('express')
const app = express();
const {connectDB, checkConnected}=require('./db.js')
const port = 8001;
const mongoose = require('mongoose')
const routes = require('./routes.js')

app.use(express.json());
connectDB()

app.get('/ping', (req , res)=>{
    res.send("pong")
})

app.get("/",(req,res)=>{
    if(checkConnected()){
        res.send("MongoDB database connection successful!")
    }
    else{
        res.send("Connection Failed !")
    }
});

app.use('/api', routes);

app.listen(port,()=>{
    console.log(`we are at port ${port}`)
})

module.exports= {app}