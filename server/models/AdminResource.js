let mongoose = require('mongoose');
let uuid = require("uuid/v4");
let Schema = mongoose.Schema;

let AdminResourceSchema = new Schema({
    _id: {
        type: String,
        default: uuid()
    },
    name: String,
    type: String,
    routePath: String,
    icon: String,
    api: String,
    parentId: String,
    enable: {
        type: Boolean,
        default: true,
    },
    sortId: {
        type: Number,
        default: '0'
    },
    date_created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('AdminResource', AdminResourceSchema);
