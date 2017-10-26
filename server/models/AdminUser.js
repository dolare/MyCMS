let mongoose = require('mongoose');
let uuid = require('node-uuid/v4');
let Schema = mongoose.Schema;
let AdminGroup = require('./AdminGroup');


let AdminUserSchema = new Schema({
    _id: {
        type: String,
        unique: true,
        default: uuid()
    },
    username: String,
    email: {
        type: String,
        unique: true
    },
    phone: Number,
    date_created: {
        type: Date,
        default: Date.now()
    },
    date_modified: {
        type: Date,
        default: Date.now()
    },
    group: {
        type: String,
        ref: 'AdminGroup'
    }
});


module.exports = mongoose.model('AdminUser', AdminUserSchema);
