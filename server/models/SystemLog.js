const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const uuid = require("uuid/v4");

let SystemLogSchema = new Schema({
    _id: {
        type: String,
        default: uuid()
    },
    type: String, //login
    date: {type: Date, default: Date.now},
    logs: String
});

SystemLogSchema.statics = {

};

SystemLogSchema.set('toJSON', {getters: true, virtuals: true});
SystemLogSchema.set('toObject', {getters: true, virtuals: true});

SystemLogSchema.path('date').get(function (v) {
    return moment(v).format("YYYY-MM-DD HH:mm:ss");
});

let SystemLog = mongoose.model("SystemLog", SystemLogSchema);

module.exports = SystemLog;


