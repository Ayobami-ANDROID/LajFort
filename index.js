const express = require('express')
const connectDB = require('./ConnectDB/connectDB')
require('dotenv').config()
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3001


const start = async () =>{
    await connectDB(process.env.Mongo_Url)
    app.listen(port,() =>{console.log(`app is listening on ${port}`)})
}

start()