const mongoose = require('mongoose')
const validator = require('validator')

const accountSchema = new mongoose.Schema({
    room_number: {
        type: Number,
        required: true,
    },
    room_type: {
        type: String,
        enum: ["Luxury", "Deluxe", "Economic"],
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
    base_price: {
        type: Number,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    prime: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        required: true
    }
}, {
    collection: 'accounts'
})

const accountModel = mongoose.model('account', accountSchema);

module.exports = {
    accountModel,
    accountSchema
}