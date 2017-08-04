"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionSchema_1 = require("./../dataAccess/schemas/VersionSchema");
const Repository_1 = require("./Repository");
class VersionRepository extends Repository_1.Repository {
    constructor() {
        super(VersionSchema_1.VersionSchemaModel);
    }
}
exports.VersionRepository = VersionRepository;
//# sourceMappingURL=VersionRepository.js.map