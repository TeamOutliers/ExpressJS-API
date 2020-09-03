const { userModel, userSchema } = require('./models/user');
const { staffModel, staffSchema } = require('./models/staff');
const { accountModel, accountSchema } = require('./models/account');
const { roomModel, roomSchema } = require('./models/room');

const createUser = (data) => {
    return new Promise((resolve, reject) => {
        new userModel(data).save((err, msg) => {
            if(err){
                reject(err);
            } else {
                resolve(msg);
            }
        })
    })
}

const createStaff = (data) => {
    return new Promise((resolve, reject) => {
        new userModel(data).save((err, msg) => {
            if(err){
                reject(err);
            } else {
                resolve(msg);
            }
        })
    })
}

const createRoom = (data) => {
    return new Promise((resolve, reject) => {
        new userModel(data).save((err, msg) => {
            if(err){
                reject(err);
            } else {
                resolve(msg);
            }
        })
    })
}

const createBill = (data) => {
    return new Promise((resolve, reject) => {
        new userModel(data).save((err, msg) => {
            if(err){
                reject(err);
            } else {
                resolve(msg);
            }
        })
    })
}

module.exports = {
    createUser: createUser,
    createStaff: createStaff,
    createRoom: createRoom,
    createBill: createBill

}