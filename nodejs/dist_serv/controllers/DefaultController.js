"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("./Controller");
const config_1 = require("config");
class DefaultController extends Controller_1.Controller {
    retrieve(req, res) {
        try {
            res.send(config_1.config);
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}
exports.DefaultController = DefaultController;
//# sourceMappingURL=DefaultController.js.map