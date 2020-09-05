const { userModel, userSchema } = require('./models/user');
const { staffModel, staffSchema } = require('./models/staff');
const { accountModel, accountSchema } = require('./models/account');
const { roomModel, roomSchema } = require('./models/room');


const updateUser = (data) => {
    return new Promise((resolve, reject) => {
        userModel.updateOne({email: data.email}, data, (err, _) => {
            if(err){
                console.err(`error while updating USER: ${err}`);
                reject(err);
            } else {
                console.log(`updated USER: ${data.email}`);
                resolve(`updated USER: ${data.email}`);
            }
        });
    });
}
const updateRoom = (data) => {
    return new Promise((resolve, reject) => {
        userModel.updateOne({room_number: data.room_number}, data, (err, _) => {
            if(err){
                console.err(`error while updating ROOM: ${err}`);
                reject(err);
            } else {
                console.log(`updated ROOM: ${data.room_number}`);
                resolve(`updated ROOM: ${data.room_number}`);
            }
        });
    });
}
const updateStaff = (data) => {
    return new Promise((resolve, reject) => {
        userModel.updateOne({contact: data.contact}, data, (err, _) => {
            if(err){
                console.err(`error while updating STAFF: ${err}`);
                reject(err);
            } else {
                console.log(`updated STAFF: ${data.contact}`);
                resolve(`updated STAFF: ${data.contact}`);
            }
        });
    });
}
const updateBill = (data) => {
    return new Promise((resolve, reject) => {
        userModel.updateOne({Bill_number: data.bill_number}, data, (err, _) => {
            if(err){
                console.err(`error while updating BILL: ${err}`);
                reject(err);
            } else {
                console.log(`updated BILL: ${data.bill_number}`);
                resolve(`updated BILL: ${data.bill_number}`);
            }
        });
    });
}
module.exports = {
    updateUser: updateUser,
    updateRoom: updateRoom,
    updateStaff: updateStaff,
    updateBill: updateBill
}
