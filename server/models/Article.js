let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let moment = require('moment');
let uuid = require('uuid/v4');
let ArticleTag = require('./ArticleTag');
let ArticleCategory = require('./ArticleCategory');
let User = require('./User');


let ArticleSchema = new Schema({
    _id: {
        type: String,
        default: uuid()
    },
    title: String,
    subTitle: String,
    type: {
        type: String,
        default: "original" //quoted
    },
    categories: [{
        type: String,
        ref: 'ArticleCategory'
    }],
    sortPath: String,
    tags: [{
        type: String,
        ref: 'ArticleTag'
    }],
    author: {
        type: String,
        ref: 'User'
    },
    displayed: {
        type: Boolean,
        default: true
    },
    clickNum: {
        type: Number,
        default: 0
    },
    likeNum: {
        type: Number,
        default: 0
    },
    likeUsers: [{
        type: String,
        ref: 'User'
    }],
    topLevel: {
        type: Number,
        default: 0 // ranking from 0 - 10
    },
    content: {
        type: String
    },
    date_created: {
        type: Date,
        default: Date.now()
    },
    date_modified: {
        type: Date,
        default: Date.now()
    }
});

ArticleSchema.set('toJSON', { getters: true, virtuals: true });
ArticleSchema.set('toObject', { getters: true, virtuals: true });

ArticleSchema.path('date_created').get(function (v) {
    return moment(v).startOf('hour').fromNow();
});
ArticleSchema.path('date_modified').get(function (v) {
    return moment(v).format("YYYY-MM-DD HH:mm");
});

module.exports = mongoose.model('Article', ArticleSchema);

