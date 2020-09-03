const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        maxlength: 2
    },
    gender: {
        type: String,
        lowercase: true,
        enum: ["m", "f", "o"],
        required: true
    },
    contact: {
        type: String,
        unique: true,
        index: true,
        lowercase: true,
        required: true,
        maxlength: 14
    },
    address: {
        type: String,
        lowercase: true,
        required: true
    },
    designation: {
        type: String,
        enum: ['housekeeping', 'pantry', 'management'],
        lowercase: true,
        required: true,
    },
    doa: {
        type: Date,
        required: true
    }
}, {
    collection: 'staffs'
})

const staffModel = mongoose.model('staff', staffSchema);

module.exports = {
    staffModel,
    staffSchema
}