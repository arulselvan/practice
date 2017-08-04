"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("./../controllers/UserController");
var router = express_1.Router();
class UserRoutes {
    constructor() {
        this.userController = new UserController_1.UserController();
    }
    get routes() {
        var controller = this.userController;
        router.get("/", controller.retrieve);
        router.post("/", controller.create);
        return router;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=UserRoutes.js.map