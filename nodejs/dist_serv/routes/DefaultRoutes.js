"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DefaultController_1 = require("./../controllers/DefaultController");
var router = express_1.Router();
class DefaultRoutes {
    constructor() {
        this._defaultController = new DefaultController_1.DefaultController();
    }
    get routes() {
        var controller = this._defaultController;
        router.get("/", controller.retrieve);
        return router;
    }
}
exports.DefaultRoutes = DefaultRoutes;
//# sourceMappingURL=DefaultRoutes.js.map