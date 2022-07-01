const mongoose = require("mongoose")
const portfolioreach = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }

}, { timestamps: true })
const msg = mongoose.models.Comment || mongoose.model("portfolioreply", portfolioreach);
module.exports = msg;