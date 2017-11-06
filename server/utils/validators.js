const validator = require('validator');

module.exports = {


    //check id (uuid)
    check_id(str){
        return str && validator.isUUID(str, 4);
    },

    //check ids (array as str)
    check_ids(str){
        if(!str){
            return false;
        }
        let idsArr = ids.split(",");
        if(typeof idsArr === "object" && idsArr.length > 0){
            for(let i = 0; i < idsArr.length; i++){
                if(check_id(idsArr[i])){
                    continue;
                }else{
                    return false;
                }
            }
        }
        return true;
    },

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
    },

    //check username
    checkUsername(str) {
        return str && validator.isLength(str, 2, 12);
    }

};
