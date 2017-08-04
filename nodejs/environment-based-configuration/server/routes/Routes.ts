import * as express from "express";
import { DefaultRoutes } from "./DefaultRoutes";
import { UserRoutes } from "./UserRoutes";
var app = express();

export class Routes {

    get routes() {
        app.use("/", new DefaultRoutes().routes)
        app.use("/user", new UserRoutes().routes)
        return app;
    }
}
