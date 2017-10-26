let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let uuid = require('node-uuid/v4');

let ArticleTagSchema = new Schema({
    _id: {
        type: String,
        unique: true,
        default: uuid()
    },
    name: String,
    alias: String,
    date_created: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('ArticlTag', ArticleTagSchema);
