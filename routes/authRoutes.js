const express=require('express')
const Register = require('../controllers/Register')
const Verification = require('../controllers/Verification')
const Login = require('../controllers/Login')


const auth=express.Router()




auth.post('/register',Register)

auth.post("/verify/:token",Verification)

auth.post("/login",Login)



module.exports=auth







