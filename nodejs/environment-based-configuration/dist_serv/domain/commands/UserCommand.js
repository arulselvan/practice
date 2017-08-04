"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = require("./../../repository/UserRepository");
class UserCommand {
    constructor() {
        this.userRepository = new UserRepository_1.UserRepository();
    }
    create(item, callback) {
        this.userRepository.create(item, callback);
    }
    retrieve(callback) {
        this.userRepository.retrieve(callback);
    }
}
exports.UserCommand = UserCommand;
//# sourceMappingURL=UserCommand.js.map