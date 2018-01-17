const crypto = require("crypto");
const PRIVATEKEY = require("./setting").PRIVATEKEY;

module.exports = {
    encrypt: function (data, key = PRIVATEKEY) {
        let privateKey = Buffer.from(key, 'utf8');
        let cipher = crypto.createCipher("aes-256-cbc", privateKey);
        let newPwd = "";
        newPwd += cipher.update(data, "utf8", "hex");
        newPwd += cipher.final("hex");
        return newPwd;
    },

    decrypt: function (data, key = PRIVATEKEY) {
        let privateKey = Buffer.from(key, 'utf8');
        let decipher = crypto.createDecipher("aes-256-cbc", privateKey);
        let oldPwd = "";
        oldPwd += decipher.update(data, "hex", "utf8");
        oldPwd += decipher.final("utf8");
        return oldPwd;
    }
};
