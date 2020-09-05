const { userModel, userSchema } = require('./models/user');
const { staffModel, staffSchema } = require('./models/staff');
const { accountModel, accountSchema } = require('./models/account');
const { roomModel, roomSchema } = require('./models/room');

const updateUser = (data) => {
    return new Promise((resolve, reject) => {
        userModel.updateOne({email: data.email}, data, (err, _) => {
            if(err){
                reject(err);
            } else {
                resolve(`updated USER: ${data.email}`);
            }
        });
    });
}

const updateRoom = (data) => {
    return new Promise((resolve, reject) => {
        roomModel.updateOne({room_number: data.room_number}, data, (err, _) => {
            if(err){
                reject(err);
            } else {
                resolve(`updated ROOM: ${data.room_number}`);
            }
        });
    });
}

const updateStaff = (data) => {
    return new Promise((resolve, reject) => {
        staffModel.updateOne({contact: data.contact}, data, (err, _) => {
            if(err){
                reject(err);
            } else {
                resolve(`updated STAFF: ${data.contact}`);
            }
        });
    });
}

const updateBill = (data) => {
    return new Promise((resolve, reject) => {
        accountModel.updateOne({bill_number: data.bill_number}, data, (err, _) => {
            if(err){
                reject(err);
            } else {
                resolve(`updated BILL: ${data.bill_number}`);
            }
        });
    });
}

module.exports = {
    updateUser,
    updateRoom,
    updateStaff,
    updateBill
}