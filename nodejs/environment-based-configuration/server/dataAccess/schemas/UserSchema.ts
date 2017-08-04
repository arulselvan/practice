import { Document } from "mongoose";
import { DataAccess } from "./../../dataAccess/DataAccess";
import { User} from "./../../model/interfaces/User";

export interface UserModel extends User, Document { }

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export class UserSchema {
  static get schema() {
    var schema = mongoose.Schema({
      firstName:{type:Number,required:true,unique:true},
      lastName: { type: String },
      email: { type: Number },
    }, { collection: "user" });

    return schema;
  }
}

export var UserSchemaModel = mongooseConnection.model<UserModel>("User", UserSchema.schema);

