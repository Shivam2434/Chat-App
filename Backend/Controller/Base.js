let AuthQueries = require('../Database/Queries/authQueries');
let UserQueries = require('../Database/Queries/userQueries');

class Base {
    static signup(data){
        let result = AuthQueries.signup(data).then(response => {
            return response
        }).catch(err => {
            return err
        })
        return result
    }

    static login(data){
        let result = AuthQueries.login(data).then(response => {
            return response
        }).catch(err => {
            return err
        })

        return result
    }

    static getUsers(){
        let result = UserQueries.getAllUsers().then(response => {
            return response
        }).catch(err => {
            return err
        })
        return result
    }

    static addSocketId(data){
        let result = AuthQueries.addSocketId(data).then(response => {
            return response
        }).catch(err => {
            return err
        })
        return result;
    }
}

module.exports = Base;