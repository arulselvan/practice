"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CidRepository_1 = require("./../../repository/CidRepository");
class CidCommand {
    constructor() {
        this.cidRepository = new CidRepository_1.CidRepository();
    }
    create(item, callback) {
        this.cidRepository.create(item, callback);
    }
    retrieve(callback) {
        this.cidRepository.retrieve(callback);
    }
    retrieveWithOptions(criteria, projection, sortOptions, populateOptions, callback) {
        this.cidRepository.retrieveWithOptions(criteria, projection, sortOptions, populateOptions, callback);
    }
    update(_id, item, callback) {
        this.cidRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this.cidRepository.update(res._id, item, callback);
        });
    }
    delete(_id, callback) {
        this.cidRepository.delete(_id, callback);
    }
    findById(_id, callback) {
        this.cidRepository.findById(_id, callback);
    }
    getCount(criteria, callback) {
        this.cidRepository.getCount(criteria, callback);
    }
}
exports.CidCommand = CidCommand;
//# sourceMappingURL=UserCommand.js.map