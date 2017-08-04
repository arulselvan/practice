"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const DefaultRoutes_1 = require("./DefaultRoutes");
var passport = require('passport');
var app = express();
class Routes {
    get routes() {
        app.use("/", new DefaultRoutes_1.DefaultRoutes().routes);
        return app;
    }
}
exports.Routes = Routes;
//# sourceMappingURL=Routes.js.map