let userModel = require('../Model/users');

let queries = {
    getAllUsers: function(){
        let response = new Promise((resolve,reject) => {
            userModel.find({}, 'name email phone', (err, user) =>{
                if(err) throw err;
                if(user){
                    resolve(user);
                }
                else{
                    reject(err);
                }
            })
        })
        return response;
    }
}

module.exports = queries;