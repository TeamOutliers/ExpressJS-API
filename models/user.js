const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    name: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["m", "f", "o"],
        lowercase: true,
        required: true
    },
    contact: {
        type: String,
        lowercase: true,
        required: true,
        maxlength: 14
    },
    address: {
        type: String,
        lowercase: true,
        required: true
    },
    aadhar: {
        type: Number,
        required: true,
        maxlength: 16
    }
}, {
    collection: 'users'
})

const userModel = mongoose.model('user', userSchema);

module.exports = {
    userModel,
    userSchema
}