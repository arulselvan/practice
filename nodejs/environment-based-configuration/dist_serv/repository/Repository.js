"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Repository {
    constructor(schemaModel) {
        this.model = schemaModel;
    }
    create(item, callback) {
        this.model.create(item, callback);
    }
    retrieve(callback) {
        this.model.find({}, callback);
    }
    retrieveWithOptions(criteria, projection, sortOptions, populateOptions, callback) {
        if (populateOptions) {
            this.model.find(criteria).populate(populateOptions).sort(sortOptions).find(callback);
        }
        else {
            this.model.find(criteria).sort(sortOptions).find(callback);
        }
    }
    update(_id, item, callback) {
        this.model.update({ _id: _id }, item, callback);
    }
    delete(_id, callback) {
        this.model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
    }
    findById(_id, callback) {
        this.model.findById(_id, callback);
    }
    getCount(criteria, callback) {
        this.model.count(criteria, callback);
    }
    toObjectId(_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map