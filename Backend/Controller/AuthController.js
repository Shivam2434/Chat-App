let BaseController = require('./Base');
let RequestHandler = require('../Services/helper/ReqHandler');
let bcrypt = require('bcrypt');
let saltRounds = 10;

class AuthController extends BaseController{
    static async signup(req,res){
        try{

            let hashPass = await bcrypt.hash(req.body.password, saltRounds);
            let data = {
                name: req.body.name,
                email: req.body.email,
                password: hashPass,
                phone: req.body.phone
            }

            let userSignup = await super.signup(data);
            if(!userSignup){
                throw({
                    message: req.app.get('strings').MESSAGE_SIGNUP_FAILED
                })
            }
            else{
                RequestHandler.sendSuccess(res,req.app.get('strings').MESSAGE_SIGNUP_SUCCESS, userSignup, 200);
            }
        }catch(err){
            RequestHandler.sendError(res, req.app.get('strings').MESSAGE_INVALID_REQUEST, err, 400);
        }
    }

    static async login(req,res){
        try{
            let data = {
                email: req.body.email
            }

            let getUser = await super.login(data);
            if(!getUser){
                throw({
                    message: req.app.get('strings').MESSAGE_LOGIN_FAILED
                })
            }
            else{
                let comparePass = await bcrypt.compare(req.body.password, getUser[0].password);
                if(!comparePass){
                    RequestHandler.sendError(res, req.app.get('strings').MESSAGE_INCORRECT_PASS, 400);
                }
                else{
                    RequestHandler.sendSuccess(res, req.app.get('strings').MESSAGE_LOGIN_SUCCESS, {
                        name: getUser[0].name,
                        email: getUser[0].email,
                        phone: getUser[0].phone,
                    }, 200);
                }
            }
        }catch(err){
            RequestHandler.sendError(res, req.app.get('strings').MESSAGE_INVALID_REQUEST, err, 400);
        }
    }

    static async addSocketId(req,res){
        try{
            let updateData = {
                email: req.body.email,
                socket: req.body.socket
            }

            let update = await super.addSocketId(updateData);
            if(!update){
                throw({
                    message: req.app.get('strings').MESSAGE_UPDATE_FAILED
                })
            }
            else{
                RequestHandler.sendSuccess(res, req.app.get('strings').MESSAGE_DETAILS_SUCCESS, update, 200);
            }
        }catch(err){
            RequestHandler.sendError(res, req.app.get('strings').MESSAGE_INVALID_REQUEST, err, 400);
        }
    }
}

module.exports = AuthController;