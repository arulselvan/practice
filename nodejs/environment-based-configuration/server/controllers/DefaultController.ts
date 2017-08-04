import { Controller } from "./Controller";
import { Request, Response } from "express";
import { config } from "./../config";

export class DefaultController extends Controller {

    retrieve(req: Request, res: Response): void {
        try {
            res.send(config);
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }

}