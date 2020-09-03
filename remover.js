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

module.exports = {
    removeUser: removeUser
}