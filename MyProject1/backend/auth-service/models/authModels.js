const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    passWord: {type: String, required: true}
},{
    timestamps: true,
    collection: 'UserCollection'
})

module.exports = mongoose.model('UserCollection',accountSchema);