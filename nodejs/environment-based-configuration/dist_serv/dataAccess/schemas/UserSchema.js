"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../dataAccess/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class UserSchema {
    static get schema() {
        var schema = mongoose.Schema({
            firstName: { type: Number, required: true, unique: true },
            lastName: { type: String },
            email: { type: Number },
        }, { collection: "user" });
        return schema;
    }
}
exports.UserSchema = UserSchema;
exports.UserSchemaModel = mongooseConnection.model("User", UserSchema.schema);
//# sourceMappingURL=UserSchema.js.map