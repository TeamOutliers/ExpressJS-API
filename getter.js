const { userModel, userSchema } = require('./models/user');
const { staffModel, staffSchema } = require('./models/staff');
const { accountModel, accountSchema } = require('./models/account');
const { roomModel, roomSchema } = require('./models/room');

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        userModel.find({}, '-_id', (err, users) => {
            if(err){
                reject(err);
            } else {
                resolve(users);
            }
        });
    });
}

const getUser = (userEmail) => {
    return new Promise((resolve, reject) => {
        userModel.findOne({email: userEmail}, '-_id', (err, user) => {
            if(err){
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}

const getAllRooms = () => {
    return new Promise((resolve, reject) => {
        roomModel.find({}, '-_id', (err, rooms) => {
            if(err){
                reject(err);
            } else {
                resolve(rooms);
            }
        });
    });
}

const getRoom = (room_no) => {
    return new Promise((resolve, reject) => {
        roomModel.findOne({room_number: room_no}, '-_id', (err, room) => {
            if(err){
                reject(err);
            } else {
                resolve(room);
            }
        });
    });
}

const getAllStaff = () => {
    return new Promise((resolve, reject) => {
        staffModel.find({}, '-_id', (err, members) => {
            if(err){
                reject(err);
            } else {
                resolve(members);
            }
        });
    });
}
const getStaff = (contact_no) => {
    return new Promise((resolve, reject) => {
        staffModel.findOne({contact: contact_no}, '-_id', (err, member) => {
            if(err){
                reject(err);
            } else {
                resolve(member);
            }
        });
    });
}

const getBill = (bill_no) => {
    return new Promise((resolve, reject) => {
        accountModel.findOne({bill_number: bill_no}, '-_id', (err, bill) => {
            if(err){
                reject(err);
            } else {
                resolve(bill);
            }
        });
    });
}

const getBillsWithinTime = (data) => {
    return new Promise((resolve, reject) => {
        accountModel.find({date: {$gte: new Date(data.dateFrom).toISOString(), $lte: new Date(data.dateTo).toISOString()}}, '-_id', (err, bills) => {
            if(err){
                reject(err);
            } else {
                resolve(bills);
            }
        });
    });
}

const aggregateBillsWithinTime = (data) => {
    let total = 0;
    return new Promise((resolve, reject) => {
        accountModel.find({date: {$gte: new Date(data.dateFrom).toISOString(), $lte: new Date(data.dateTo).toISOString()}}, '-_id', (err, bills) => {
            if(err){
                reject(err);
            } else {
                for(let i=0;i<bills.length;i++){
                    total += bills[i].total;
                }
                resolve({total});
            }
        });
    });
}


module.exports = {
    getAllUsers,
    getUser,
    getAllRooms,
    getRoom,
    getAllStaff,
    getStaff,
    getBill,
    getBillsWithinTime,
    aggregateBillsWithinTime
}