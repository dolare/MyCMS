let mongoose = require('mongoose');
let uuid = require('node-uuid/v4');
let Schema = mongoose.Schema;
let AdminResource = require('./AdminResource');

let AdminGroupSchema = new Schema({
    _id: {
        type: String,
        unique: true,
        default: uuid()
    },
    name: String,
    permission: [{
        type: String,
        ref: "AdminResource"
    }],
    date_created: {
        type: Date,
        default: Date.now()
    },
    date_modified: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mogoose.model('AdminGroup', AdminGroupSchema);
