const passport = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'testPrivateKey'
    };

passport.use(new JwtStrategy(jwtOptions,
    function (username, password, done) {
        //database --- find user and verify password
        if(username === 1){
            done(null, {
                id:1
            });
        }else{
            done(null, false);
        }
    }
));


module.exports = passport;
