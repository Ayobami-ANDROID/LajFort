const express = require('express')
const router = express.Router()
const mongoose=  require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../Model.js/user')

router.get("/",async(req,res) =>{
    try {
        const user = User.find()
        res.status(200).json(user)
    } catch (error) {
        
    }
})