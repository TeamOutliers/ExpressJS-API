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
    userModel.findOne({email: userEmail}, (data) => {
        return data;
    })
}

const getAllRoom = () => {
    roomModel.find({}, (data) => {
        return data;
    })
}

const getRoom = (room_no) => {
    roomModel.findOne({room_number: room_no}, (data) => {
        return data;
    })
}

const getAllstaff = () => {
    staffModel.find({}, (data) => {
        return data;
    })
}
const getStaff = (contact_no) => {
    staffModel.findOne({contact: contact_no}, (data) => {
        return data;
    })
}

const getBill = (bill_no) => {
    accountModel.findOne({bill_number: bill_no}, (data) => {
        return data;
    })
}


module.exports = {
    getAllUsers,
    getUser,
    getAllRoom,
    getRoom,
    getAllstaff,
    getStaff,
    getBill
}