let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let uuid = require('uuid/v4');


let ArticleCategorySchema = new Schema({
    _id: {
        type: String,
        default: uuid()
    },
    name: String,
    isPublic: {
        type: Boolean,
        default: true
    },
    sortId: {
        type: Number,
        default: 0
    },
    subAr: String,
    sortPath: String,
    date_created: {
        type: Date,
        default: Date.now()
    },
    date_modified: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('ArticleCategory', ArticleCategorySchema);

