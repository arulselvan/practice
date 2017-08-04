import * as Mongoose from "mongoose";
import { config } from "./../config";

export class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect(): Mongoose.Connection {

        if (this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected mongodb.");
        });
        
        var dbConnection = process.env.MONGO_CONNECTION || config.db.connection;
        this.mongooseInstance = Mongoose.connect(dbConnection);

        return this.mongooseInstance;
    }
}

DataAccess.connect();



