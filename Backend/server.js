require('dotenv').config({path:'../.env'});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Port = process.env.SERVER_PORT;
const router = require('./Router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/uploads', express.static(__dirname, './Public'));
app.use(cors());
app.options('*', cors());
app.set(Port)
app.use(router);
app.set('strings', require('./Services/utils/strings'));
app.set('db', require('./Database/Database'));

app.use('/',(req,res,next) => {
    const err = new Error('Not Found');
    err.status = 404;
    res.status(err.status).json({
        type: 'error',
        message: 'URL not found on server !'
    })
});

app.listen(Port, () => {
    console.log("server active at Port :: "+Port);
});