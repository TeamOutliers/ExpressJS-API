const { userModel, userSchema } = require('./models/user');
const { staffModel, staffSchema } = require('./models/staff');
const { accountModel, accountSchema } = require('./models/account');
const { roomModel, roomSchema } = require('./models/room');

const removeUser = (email) => {
    return new Promise((resolve, reject) => {
        userModel.deleteOne({email}, err => {
            if(err){
                console.err(`error while removing USER: ${err}`);
                reject(err);
            } else {
                console.log(`USER removed: ${email}`);
                resolve(`USER removed: ${email}`);
            }
        });
    });
}

const removeStaff = (contact) => {
    return new Promise((resolve, reject) => {
        userModel.deleteOne({contact}, err => {
            if(err){
                console.err(`error while removing USER: ${err}`);
                reject(err);
            } else {
                console.log(`USER removed: ${contact}`);
                resolve(`USER removed: ${contact}`);
            }
        });
    });
}

const removeRoom = (room_number) => {
    return new Promise((resolve, reject) => {
        userModel.deleteOne({room_number}, err => {
            if(err){
                console.err(`error while removing USER: ${err}`);
                reject(err);
            } else {
                console.log(`USER removed: ${room_number}`);
                resolve(`USER removed: ${room_number}`);
            }
        });
    });
}

module.exports = {
    removeUser: removeUser,
    removeRoom: removeRoom,
    removeStaff: removeStaff
}