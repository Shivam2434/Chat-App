let app = require('express')();
let http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req,res) => {
    res.sendFile(__dirname + 'D:/Projects/Chat-App/Backend/Socket/index.html');
})

module.exports.init = function (app, io) {
   io.on('connection', (socket) => {
        console.log("A user connected with id :: ",socket.id);
        socket.on('disconnect', () =>{
            console.log("A user disconnected")
            }) 
        })
}

// io.on('connection', (socket) => {
// console.log("A user connected");
// socket.on('disconnect', () =>{
//     console.log("A user disconnected")
//     }) 
// })