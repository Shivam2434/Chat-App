const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URI)

let conn = mongoose.connection;

conn.on('connected', () => {
    console.log("Mongodb is connected ...");
})

conn.on('disconnected', () => {
    console.log("Mongodb disconnected !!!");
})

conn.on('error', (err) => {
    console.log("Error while connecting with mongodb ",err)
})

// mongoose.connect("mongodb://localhost:27017/chatapp").then(() => {
//     console.log("Mongo database connected ....")
// }).catch(err => {
//     console.log("Error occured while connecting to mongodb ",err)
// })