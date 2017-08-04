"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Todo Arul : added environment specific configuration, need to do some more research 
var defaults = require("./default.json");
var envConfig = require("./" + (process.env.NODE_ENV || "development") + ".json");
exports.config = Object.assign({}, defaults, envConfig);
//# sourceMappingURL=index.js.map