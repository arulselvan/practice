"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const config_1 = require("./../config");
class DataAccess {
    constructor() {
        DataAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected mongodb.");
        });
        var dbConnection = process.env.MONGO_CONNECTION || config_1.config.db.connection;
        this.mongooseInstance = Mongoose.connect(dbConnection);
        return this.mongooseInstance;
    }
}
exports.DataAccess = DataAccess;
DataAccess.connect();
//# sourceMappingURL=DataAccess.js.map