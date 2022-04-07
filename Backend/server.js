// require('dotenv').config({path:'../.env'});
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const Port = process.env.SERVER_PORT;
// const router = require('./Router');
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/uploads', express.static(__dirname, './Public'));
// app.use(cors());
// app.options('*', cors());
// app.set(Port)
// app.use(router);
// app.set('strings', require('./Services/utils/strings'));
// app.set('db', require('./Database/Database'));
// app.set('io', require('./Socket/connection'))
// app.get('/', (req,res) => {
//     res.sendFile(__dirname + '/Socket/index.html')
// })
// app.use('/',(req,res,next) => {
//     const err = new Error('Not Found');
//     err.status = 404;
//     res.status(err.status).json({
//         type: 'error',
//         message: 'URL not found on server !'
//     })
// });

// app.listen(Port, () => {
//     console.log("server active at Port :: "+Port);
// });

// io.on('connection', (socket) => {
//     console.log("A user connected !")
//     socket.on('connect', () => {
//         io.emit("Connected :: ",socket.id)
//     })
//     socket.emit('connect', () => {
//         console.log("user connected ")
//     })
//     socket.on('disconnect', () => {
//         console.log("A user disconnected !")
//     })
// })

require('dotenv').config({path:'../.env'});
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const cors = require('cors');
const Port = process.env.SERVER_PORT;
const router = require('./Router');
const socket = require('./Socket/connection')

global.io  = io;
socket.init( app, io );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());
app.set(Port)
app.use(router);
app.set('strings', require('./Services/utils/strings'));
app.set('db', require('./Database/Database'));
// app.set('io', require('./Socket/connection'))


server.listen(3500, () => {
    console.log("server on 3500");
})

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/Socket/index.html');
// });

// io.on('connection', (socket) => {
//     console.log("User connected")
//     socket.emit('welcome', "who are you ?")
//         io.emit('test2', 'test message')
//     io.on('typing', (data) => {
//         console.log("data from typing emitter :: ",data)
//     })
// })