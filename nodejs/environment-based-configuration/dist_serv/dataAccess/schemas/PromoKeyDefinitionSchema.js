"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../dataAccess/DataAccess");
const AuditPlugin_1 = require("./common/AuditPlugin");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class PromoKeyDefinitionSchema {
    static get schema() {
        var schema = mongoose.Schema({
            promoKeyDefinitonId: { type: Number, required: true, unique: true },
            name: { type: String },
            maximumLength: { type: Number },
            displayOrder: { type: Number }
        }, { collection: "promokeydefinition" }).plugin(AuditPlugin_1.AuditPlugin, {});
        return schema;
    }
}
exports.PromoKeyDefinitionSchema = PromoKeyDefinitionSchema;
exports.PromoKeyDefinitionSchemaModel = mongooseConnection.model("PromoKeyDefiniton", PromoKeyDefinitionSchema.schema);
//# sourceMappingURL=PromoKeyDefinitionSchema.js.map