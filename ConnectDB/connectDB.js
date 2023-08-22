const mongoose = require('mongoose')


const ConnectDB = (url) =>{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=> console.log('connected to the db')).catch(err => console.log(err))
}

module.exports = ConnectDB