const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

/* GET users listing. */
router.post('/login', function(req, res, next) {
    if(req.body.email && req.body.passport){
        let email = req.body.email;
        let passport = req.body.passport;
    }

    //find if there this user in database

    if(!user){
        res.status(401).json({message: 'no such user found'});
    }
    if(user.password === req.body.passport){

        let payload = {id: user.id};
        let token = jwt.sign(payload, 'server secret', {expre}, {expiresInMinutes: 6000});
        res.status(200).json({message: 'ok', token: token, username: user.username, email: user.email});
    }else{
        res.status(401).json({message: "password and email don't match"});
    }
});

router.post('/create', function(req, res, next) {
    if(req.body.email && req.body.passport){
        let email = req.body.email;
        let passport = req.body.passport;
    }

    //find if there this user in database

    if(!user){
        res.status(401).json({message: 'no such user found'});
    }
    if(user.password === req.body.passport){

        let payload = {id: user.id};
        let token = jwt.sign(payload, 'server secret', {expre}, {expiresInMinutes: 6000});
        res.status(200).json({message: 'ok', token: token, username: user.username, email: user.email});
    }else{
        res.status(401).json({message: "password and email don't match"});
    }
});

module.exports = router;
