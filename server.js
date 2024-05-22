const express=require('express')
const cors=require('cors')
const auth = require('./routes/authRoutes')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectToMongoDb = require('./db/db');

const app=express()

dotenv.config();
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

app.use("/api/auth",auth)


app.listen(4000,()=>{
    connectToMongoDb()
    console?.log(" Server is Running.......")
})


