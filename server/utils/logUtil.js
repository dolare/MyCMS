const log4js = require("log4js");
const fs = require("fs");
const _ = require("lodash");
const path = require("path");
const SystemLog = require("../models/index").SystemLog;

//set path for each category
let baseLogPath = path.resolve(__dirname, "../logs");

let errorLogRootPath = "/error";
let errorLogPath = baseLogPath + "/error/error";

let responseLogRootPath = '/response';
let responseLogPath = baseLogPath + '/response/response';

let logConfig = {
    appenders: {
        //error logs write by hours
        errorLogger: {
            "type": "dateFile",        //log type
            "filename": errorLogPath,  // output location
            "pattern": "-yyyy-mm-dd.log",  //file extension
            "path": errorLogRootPath,   //root path
        },
        resLogger: {
            "type": "dateFile",
            "filename": responseLogPath,
            "pattern": "-yyyy-mm-dd.log",
            "path": responseLogRootPath,
        }
    },
    categories: {
        errorLogger: {
            appenders:["errorLogger"],
            level: "ERROR"
        },
        resLogger: {
            appenders: ["resLogger"],
            level: "ALL"
        },
        default:{
            appenders: ["resLogger"],
            level: "ALL"
        },
    }
};

log4js.configure(logConfig);

let errorLogger = log4js.getLogger('errorLogger');
let resLogger = log4js.getLogger('resLogger');

let logUtil = {

    initPath() {
        if(logConfig.baseLogPath){
            confirmPath(logConfig.baseLogPath);
            //create different logs
            for(let i = 0; i < logConfig.appenders.length; i++){
                if(logConfig.appenders[i].path){
                    confirmPath(logConfig.baseLogPath + logConfig.appenders[i].path);
                }
            }
        }
    },

    h5Error(req, error, resTime){
        if(req){
            errorLogger.error(formatError(req, error, 'h5', resTime));
        }
    },

    error(error, req, resTime){
        if(error){
            if(typeof(error) == "string"){
                errorLogger.error("***** node server error *****", error);
            } else{
                errorLogger.error(formatError(req, error, "node", resTime));
            }
        }
    },

    res(ctx, resTime){
        if(ctx){
            resLogger.info(formatRes(ctx, resTime));
        }
    },

    info(key, info = ""){
        if(key){
            resLogger.info(key, info);
        }
    }

};

let confirmPath = function (pathStr) {
    if(!fs.existsSync(pathStr)){
        fs.mkdirSync(pathStr);
    }
};

let formatRes = function (req, resTime) {
    let logText = "";

    //start
    logText += "\n" + "*************** response log start ***************" + "\n";

    //add request log
    logText += formatReqLog(req, resTime);

    //add status code
    logText += "response status: " + req.status + "\n";

    //add respnse body
    logText += "response body: " + "\n" + JSON.stringify(req.body) + "\n";

    //add end
    logText += "*************** response log end ***************" + "\n";

    return logText;

};

//format err log file
let formatError = function (req = {}, error = {}, type = "node", resTime = 0) {
    let logText = "";
    let err = type === "h5" ? req.query : error;

    //start error
    logText += "\n" + "***************  " + type + " error log start *************** " + "\n";

    //add request
    if(!_.isEmpty(req)) {
        logText += formatReqLog(req);
    }
    if(type === "h5"){
        //user info
        if(err.userInfo) {
            logText += "request user info:   "+ err.userInfo + "\n";
        }
        //add page info
        if(err.pageParams) {
            logText += "request client channel info:   " + err.pageParams + "\n";
        }
        //add client info
        if(err.clientInfo){
            logText += "request mobile info:   " + err.clientInfo + "\n";
        }
        //err location
        logText += "err line: " + err.line + ", col: " + err.col + "\n";
        //err info
        logText += "err message: " + err.msg + "\n";
        //err page
        logText += "err url: " + err.url + "\n";
    }  else  { //server side
        //err name
        logText += "err name: " + error.name + "\n";
        //err info
        logText += "err message: " + error.message + "\n";
        //err detail
        logText += "err stack: " + error.stack + "\n";
    }

    //error info end
    logText += "\n" + "***************  " + type + " error log end *************** " + "\n";


    let loginLog = new SystemLogModel();
    loginLog.type = type + '-exception';
    loginLog.logs = logText;
    loginLog.save();

    return logText;
};

let formatReqLog = function (req) {
    let logText = "";
    let method = req.method;

    //request path
    logText += "request url: " + req.url + "\n";
    //request method
    logText += "request method: " + method + "\n";
    //client ip
    logText += "request client ip: " + req.ip + "\n";

    return logText;
};
