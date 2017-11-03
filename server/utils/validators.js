const validator = require('validator');

module.exports = {

    // check password
    checkPwd(str, min = 6, max = 12){
        return str && validator.isLength(str, 5, max) && /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{6,}/.test(str);
    },

    //check email
    checkEmail(str){
        return str && validator.isEmail(str);
    },

    //check phone number
    checkPhoneNum(str, region = 'zh-CN'){
        return str && validator.isMobilePhone(str, region);
    },

    //check URL
    checkURL(str){
        return str && validator.isURL(str);
    }
};
