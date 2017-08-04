//Todo Arul : added environment specific configuration, need to do some more research 
var defaults = require("./default.json");
var envConfig = require("./" + (process.env.NODE_ENV || "development")+".json");
export const config:any = Object.assign({}, defaults, envConfig);