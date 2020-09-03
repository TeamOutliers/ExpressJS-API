const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    room_number: {
        type: Number,
        unique: true,
        index: true,
        required: true
    },
    room_type: {
        type: String,
        enum: ["luxury", "deluxe", "economic"],
        required: true,
        lowercase: true
    },
    bedding: {
        type: String,
        enum: ["single", "double", "suite"],
        required: true,
        lowercase: true
    },
    facilities: {
       wifi: {
        type: Boolean
       },
       warm_water: {
        type: Boolean
       },
       housekeeping: {
        type: Boolean
       },
       laundry: {
        type: Boolean
       },
       foodV: {
        type: Boolean
       },
       foodNV: {
        type: Boolean
       },
       cab: {
        type: Boolean
       },
       parking2W: {
        type: Boolean
       },
       parking4W: {
        type: Boolean
       }
    },
}, {
    collection: 'rooms'
})

const roomModel = mongoose.model('room', roomSchema);

module.exports = {
    roomModel,
    roomSchema
}