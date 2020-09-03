const mongoose = require('mongoose')
const validator = require('validator')

const accountSchema = new mongoose.Schema({
    room_number: {
        type: Number,
        required: true,
    },
    bill_number:{
        type: String,
        required:true,
        unique: true,
        index: true,
        lowercase: true
    },
    room_type: {
        type: String,
        enum: ["luxury", "deluxe", "economic"],
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
    },
    total: {
        type: Number,
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