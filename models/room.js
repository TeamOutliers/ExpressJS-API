const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    room_number: {
        type: Number,
        required: true
    },
    room_type: {
        type: String,
        enum: ["Luxury", "Deluxe", "Economic"],
        required: true,
        lowercase: true
    },
    bedding: {
        type: String,
        enum: ["Single", "Double", "Suite"],
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