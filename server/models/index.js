const mongoose = require('mongoose');

mongoose.connect('mongodb://dolare:wojiushidolare@ds021346.mlab.com:21346/mymongo');

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once('openUri', () => {
   console.log('connect successfully');
});

db.on('error', (error) => {
    console.log('Database connection error: ' + error);
});

db.on('close', () => {
    console.log('disconnect database');
});


exports.User = require('./User');
exports.AdminGroup = require('./AdminGroup');
exports.AdminResource = require('./AdminResource');
exports.Article = require('./Article');
exports.ArticleTag = require('./ArticleTag');
exports.ArticleCategory = require('./ArticleCategory');
exports.SystemConfig = require('./SystemConfig');
exports.SystemLog = require('./SystemLog');
