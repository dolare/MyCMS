const MongoClient = require('mongodb').MongoClient();

MongoClient.connect('mongodb://dolare:123321@ds021346.mlab.com:21346/mymongo', function (err, db) {
    if(err){
        throw err;
    }

    db.collection('')
});
