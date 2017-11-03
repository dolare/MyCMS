const log4js = require("log4js");
const fs = require("fs");
const _ = require("lodash");
const path = require("path");

//set path for each category
let baseLogPath = path.resolve(__dirname, "../logs");

let errorLogPath = baseLogPath + "/error/error";

let responseLogPath = baseLogPath + '/response/response';

let logSetting = {
    "appenders": [
        //error logs write by hours
        {
            "category": "errorLogger", //logger name
            "type": "dateFile",        //log type
            "filename": errorLogPath, // output location
            "pattern":
        }
    ]
};

