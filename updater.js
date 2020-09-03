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

module.exports = {
    updateUser: updateUser
}