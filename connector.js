const mongoose = require('mongoose');

const initiateConnection = (dbURL) => {
    mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then((client) => {
        console.log("Connected to Atlas DB")
    }).catch(err => {
        throw new Error(err, "Unable to connect to DB");
    })
}

module.exports = {
    initiateConnection: initiateConnection
}
