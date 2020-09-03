const { userModel, userSchema } = require('./models/user');
const { staffModel, staffSchema } = require('./models/staff');
const { accountModel, accountSchema } = require('./models/account');
const { roomModel, roomSchema } = require('./models/room');

const removeUser = (email) => {
    return new Promise((resolve, reject) => {
        userModel.deleteOne({email}, err => {
            if(err){
                reject(err);
            } else {
                resolve(`USER removed: ${email}`);
            }
        });
    });
}

const removeStaff = (contact) => {
    return new Promise((resolve, reject) => {
        staffModel.deleteOne({contact}, err => {
            if(err){
                reject(err);
            } else {
                resolve(`MEMBER removed: ${contact}`);
            }
        });
    });
}

const removeRoom = (room_number) => {
    return new Promise((resolve, reject) => {
        roomModel.deleteOne({room_number}, err => {
            if(err){
                reject(err);
            } else {
                resolve(`ROOM removed: ${room_number}`);
            }
        });
    });
}

const removeBill = (bill_number) => {
    return new Promise((resolve, reject) => {
        accountModel.deleteOne({bill_number}, err => {
            if(err){
                reject(err);
            } else {
                resolve(`BILL removed: ${room_number}`);
            }
        });
    });
}

module.exports = {
    removeUser,
    removeRoom,
    removeStaff,
    removeBill
}