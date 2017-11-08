const crypto = require("crypto");
const PRIVATEKEY = require("./setting").PRIVATEKEY;

module.exports = {
    encrypt: function (data, key) {
        let cipher = crypto.createCipher("aes-256-cbc", key);
        let newPwd = "";
        newPwd += cipher.update(data, "utf8", "hex");
        newPwd += cipher.final("hex");
        return newPwd;
    },

    decrypt: function (data, key = PRIVATEKEY) {
        let decipher = crypto.createDecipher("aes-256-cbc", key);
        let oldPwd = "";
        oldPwd += decipher.update(data, "hex", "utf8");
        oldPwd += decipher.final("utf8");
        return oldPwd;
    }
};
