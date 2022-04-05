let BaseController = require('./Base');
let RequestHandler = require('../Services/helper/ReqHandler');

class UserController extends BaseController {
    static async getUsers(req,res){
        try{
            let getUsers = await super.getUsers();
            if(!getUsers){
                throw({
                    message: req.app.get('strings').MESSAGE_LIST_FAILED
                })
            }
            else{
                RequestHandler.sendSuccess(res, req.app.get('strings').MESSAGE_LIST_SUCCESS, getUsers, 200);
            }
        }catch(err){
            RequestHandler.sendError(res, req.app.get('strings').MESSAGE_INVALID_REQUEST, err, 400);
        }
    }
}

module.exports = UserController;