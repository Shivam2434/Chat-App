let userModel = require('../Model/users');

let queries = {
    signup: function(data){

        let response = new Promise((resolve, reject) => {
            userModel.create({
                name: data.name,
                email: data.email,
                password: data.password,
                phone: data.phone
            }, (err, result) => {
                if(err) throw err;
                if(result){
                    console.log("Querry success! ",result);
                    resolve(result);
                }
                else{
                    console.log("Error occured! ",err);
                    reject(err);
                }
            })
        })
        return response;
    },

    login: function(data){
        let response = new Promise((resolve, reject) => {
            userModel.find({email: data.email}, (err,result) => {
                if(err) throw err;
                if(result){
                    resolve(result);
                }
                else{
                    reject(err);
                }
            })
        })
        return response;
    },

    addSocketId: function(data){
        let response = new Promise((resolve, reject) => {
            userModel.updateOne({email: data.email}, {$set: {socketId: data.socket}}, (err,result) => {
                if(err) throw err;
                if(result){
                    resolve(result);
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