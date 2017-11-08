let mongoose = require('mongoose');
let uuid = require("uuid/v4");
let Schema = mongoose.Schema;

let SystemConfigSchema = new Schema({
    _id: {
        type: String,
        default: uuid()
    },
    siteName: String,
    siteDomain: String,
    siteDescription: String,

    date_created: {
        type: Date,
        default: Date.now()
    },
    date_modified: {
        type: Date,
        default: Date.now()
    },

});

module.exports = mongoose.model('SystemConfig', SystemConfigSchema);



