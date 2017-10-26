let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let uuid = require('node-uuid/v4');


let ArticleCategorySchema = new Schema({
    _id: {
        type: String,
        unique: true,
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
    parentId: String,
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

