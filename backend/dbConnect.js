const mongoose = require('mongoose')

// PJNMRRCwD2w1lUuX

mongoose.connect('mongodb+srv://par3bola:PJNMRRCwD2w1lUuX@cluster0.mdl36ks.mongodb.net/' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))