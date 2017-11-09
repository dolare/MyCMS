const validators = require('../utils/validators');
const UserModel = require('../models').User;
const _ = require('lodash');
const logUtil = require("../utils").logUtil;
const formidable = require("formidable");
const crypt = require("../utils").crypt;

class User {
    constructor(){
        //super()
    }

    async getUser(req, res, next){
        try{
            let current = req.query.current || 1;
            let pageSize = req.query.pageSize || 10;
            let searchKey = req.query.searchKey;

            let queryObj = {};

            if(searchKey){
                let reKey = new RegExp(searchKey, "i");
                queryObj.username = { $regex: reKey};
            }

            const Users = await UserModel.find(queryObj, { password: 0 }).sort({ date: -1 }).skip(10 * (Number(current) - 1)).limit(Number(pageSize));
            const totalItems = await UserModel.count();

            res.send({
                status: "success",
                data: Users,
                pageInfo: {
                    totalItems,
                    current: Number(current) || 1,
                    pageSize: Number(pageSize) || 10
                }
            })
        } catch (err) {
            logUtil.error(err, req);
            res.send({
                state: "error",
                type: 'ERROR_DATA',
                message: "falied downloading user list"
            })
        }
    }

    async getOneUser(req, res, params) {
        console.log("ooo");
        return await UserModel.findOne(params, { password: 0 });
    }

    async updateUser(req, res, next) {
        const form = new formidable.IncomingForm();

        form.parse(req, async(err, fields, files) => {
            let errMsg = "";

            try {

                //form validation
                if(!validators.check_id(fields._id)){
                    errMsg = "bad request";
                }
                if (!validators.checkEmail(fields.username)){
                    errMsg = "the length should be 2 - 12";
                }
                if(!validators.checkEmail(fields.email)){
                    errMsg = "email format error";
                }
                if(!validators.checkPhoneNum(fields.phoneNum)){
                    errMsg = "phoneNum format error";
                }

                if(errMsg){
                    res.send({
                        state: "error",
                        type: "ERROR_PARAMS",
                        message: errMsg
                    })
                }
            }catch (err) {
                console.log(err.message, err);
                res.send({
                    state: "error",
                    type: "ERROR_PARAMS",
                    message: err.message
                });
                return;
            }

            const userObj = {
                username: fields.username,
                phoneNum: fields.phoneNum,
                password: crypt.encrypt(fields.password),
                group: fields.group
            }

            const user_id = fields._id;

            try {
                await UserModel.findOneAndUpdate({_id: user_id}, {$set: userObj});
                delete userObj.password;
                res.send({
                    state: "success"
                });
            } catch (err) {
                logUtil.error(err. req);
                res.send({
                    state: "error",
                    type: "ERROR_IN_SAVE_DATA",
                    message: "fail to update user: " + err
                })
            }
        })
    }

    async delUser(req, res, next) {
        try {
            let errMsg = "";
            let user_ids = req.query._ids;
            if(!validators.check_ids(user_ids)){
                errMsg = "bad request";
            }else{
                idsArr = user_ids.split(",");
            }

            if(errMsg){
                res.send({
                    state: "error",
                    message: errMsg
                })
            }

            await UserModel.remove({ "_id" : { $in: idsArr}});
            res.send({
                state: "success"
            })
        } catch (err){
            logUtil.error(err, req);
            res.send({
                state: "error",
                type: "ERROR_IN_SAVE_DATA",
                message: "fail to delete selected user: " + err
            })
        }
    }

    async loginAction(req, res, next){
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
           try {
               let errMsg = "";
               if(!validators.checkEmail(fields.email)) {
                   errMsg = "email format error";
               }
               if(!validators.checkPwd(fields.password)){
                   errMsg = "password format error";
               }

               if(errMsg) {
                   res.send({
                       state: "error",
                       type: "ERROR_PARAMS",
                       message: errMsg
                   });
                   return;
               }
           } catch(err) {
               console.log(err.message, err);
               res.send({
                   state: "error",
                   type: "ERROR_PARAMS",
                   message: err.message
               });
               return;
           }

           try{
               const userObj = {
                   email: fields.email,
                   password: crypt.encrypt(fields.password)
                }

               let user = await UserModel.findOne(userObj);
               if(user) {
                   if(!user.enable){
                       res.send({
                           state: "error",
                           message: "your account is inactive now, please contact admin"
                       });
                       return;
                   }
                   res.send({
                       state: "success"
                   })
               } else {
                   logUtil.error(err, req);
                   res.send({
                       state: "error",
                       message: "username and password do not match"
                   })
               }
           } catch(err) {
               res.send({
                   state: "error",
                   type: "ERROR_IN_SAVE_DATA",
                   message: err.stack
               })
           }
        });
    }

    async regUser(req, res, next) {

        try {
            let errMsg = "";

            if(!validators.checkPwd(req.body.password)){
                errMsg = "password format error";
            }
            console.log(req.body);
            if(!validators.checkUsername(req.body.username)){
                errMsg = "username format error";
            }
            if(!validators.checkEmail(req.body.email)){
                errMsg = "email format error";
            }
            if(req.body.password != req.body.confirmPassword){
                errMsg = "password is not equal to confirmpassword";
            }

            if(errMsg) {
                res.send({
                    state: "error",
                    type: "ERROR_PARAMS",
                    message: errMsg
                })
                return;
            }
        } catch(err) {
            console.log(err.message, err);
            res.send({
                state: 'error',
                type: 'ERROR_PARAMS',
                message: err.message
            })
            return;
        }

        try{
            const userObj = {
                username: req.body.username,
                email: req.body.email,
                password: crypt.encrypt(req.body.password)
            };
            let user = await UserModel.find().or([{"email": req.body.email}, {"username": req.body.username}]);
            if(!_.isEmpty(user)) {
                res.send({
                    state: "error",
                    message: "email or username already exists."
                });
            } else {
                let newUser = new UserModel(userObj);
                await newUser.save();

                res.send({
                    state: "success",
                    message: "register successfully"
                })
            }
        } catch (err) {
            res.send({
                state: "error",
                type: "ERROR_IN_SAVE_DATA",
                message: err.stack
            })
        }

    }

    async logOut(req, res, next) {
        res.send({
            state: "success",
            message: "logout successfully"
        })
    }

}

module.exports = new User();
