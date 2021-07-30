const mongoose = require('mongoose');

const usersweekproductsSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: false
    },
    displayImage: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const weekproducts = mongoose.model('weekproducts', usersweekproductsSchema)
module.exports = weekproducts