"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = require("./Repository");
const UserSchema_1 = require("./../dataAccess/schemas/UserSchema");
class UserRepository extends Repository_1.Repository {
    constructor() {
        super(UserSchema_1.UserSchemaModel);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map