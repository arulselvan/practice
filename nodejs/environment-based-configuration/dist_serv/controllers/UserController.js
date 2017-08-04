"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("./Controller");
const UserCommand_1 = require("./../domain/commands/UserCommand");
class UserController extends Controller_1.Controller {
    retrieve(req, res) {
        try {
            let command = new UserCommand_1.UserCommand();
            command.retrieve(function (error, result) {
                if (error) {
                    res.status(500).send("error occured");
                }
                res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    create(req, res) {
        try {
            let user = req.body;
            let command = new UserCommand_1.UserCommand();
            command.create(user, function (error, result) {
                if (error) {
                    res.status(500).send("error occured");
                }
                res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map