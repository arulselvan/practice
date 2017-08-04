"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AuditPlugin(schema, options) {
    schema.add({ createdAt: Date, createdBy: String, modifiedAt: Date, modifiedBy: String });
    if (!options) {
        options = {};
    }
    schema.pre('save', function (next) {
        this.createdAt = new Date();
        this.createdBy = options.createdBy || "apiUser";
        this.modifiedAt = null;
        this.modifiedBy = null;
        next();
    });
    schema.pre('update', function (next) {
        var update = this._update;
        if (update.$set) {
            this.update({}, { $set: { modifiedAt: new Date() } });
        }
        if (update.$set) {
            this.update({}, { $set: { modifiedBy: options.modifiedBy || "apiUser" } });
        }
        next();
    });
}
exports.AuditPlugin = AuditPlugin;
//# sourceMappingURL=AuditPlugin.js.map