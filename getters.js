const { userModel, userSchema } = require('./models/user');
const { staffModel, staffSchema } = require('./models/staff');
const { accountModel, accountSchema } = require('./models/account');
const { roomModel, roomSchema } = require('./models/room');

const getAllUsers = () => {
    userModel.find({}, (data) => {
        return data;
    })
}

const getUser = (userEmail) => {
    userModel.findOne({email: userEmail}, (data) => {
        return data;
    })
}

module.exports = {
    getAllUsers,
    getUser
}