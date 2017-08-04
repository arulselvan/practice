"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const DefaultRoutes_1 = require("./DefaultRoutes");
const UserRoutes_1 = require("./UserRoutes");
var app = express();
class Routes {
    get routes() {
        app.use("/", new DefaultRoutes_1.DefaultRoutes().routes);
        app.use("/user", new UserRoutes_1.UserRoutes().routes);
        return app;
    }
}
exports.Routes = Routes;
//# sourceMappingURL=Routes.js.map