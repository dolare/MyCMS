let mongoose  = require('mongoose');
let Schema = mongoose.Schema;
let uuid = require('node-uuid');
let momonet = require('momonet');

var UserSchema = new Schema({
    _id: {
        type: String,
        unique: true,
        default: uuid.v4
    },
    enable: {
        type: Boolean,
        default: true
    },
    email: {
        type: String,
        unique: true
    },
    username: String,
    password: String,
    phone: Number,
    group:{
        type: String
    },
    date_create: {
        type: Date,
        default: Date.now()
    },
    date_modified: {
        type: Date,
        default: Date.now()
    }
})

UserSchema.set('toJSON', { getters: true, virtuals: true });
UserSchema.set('toObject', { getters: true, virtuals: true });
//update date_modified
/*UserSchema.pre('save', function (next) {
    this.date_create =
})*/

UserSchema.path('date_create').get(function (v) {
    return moment(v).format("YYYY-MM-DD HH:mm:ss");
});

UserSchema.path('date_modified').get(function (v) {
    return moment(v).format("YYYY-MM-DD HH:mm:ss");
});

module.exports = mongoose.model('User', UserSchema);
