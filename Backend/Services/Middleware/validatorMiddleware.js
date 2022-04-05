let schema = require('../helper/validator');
let RequestHandler = require('../helper/ReqHandler');

module.exports = {
    async validate(req, res, next){
        try{
            console.log(req.body);
            const result = schema[req.url].validate(req.body);
            if(result.error){
                RequestHandler.sendError(res, result.error.details[0].message.replace(/\"/g,''),[],400);
            }
            else{
                next();
            }
        }catch(err){
            RequestHandler.sendError(res, (error.message) ? error.message : req.app.get('strings').MESSAGE_INVALID_REQUEST, err, 400 )
        }
    }
}