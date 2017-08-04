import { Controller } from "./Controller";
import { Request, Response } from "express";
import { UserCommand } from "./../domain/commands/UserCommand";
import {UserModel} from "./../dataAccess/schemas/UserSchema";

export class UserController extends Controller {

    retrieve(req: Request, res: Response): void {
        try {
            let command = new UserCommand();
            command.retrieve(function (error, result) {
                if(error){
                    res.status(500).send("error occured");
                }
                res.send(result);
            })
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }

    create(req: Request, res: Response): void {
        try {
            let user = <UserModel>req.body;
            let command = new UserCommand();
            command.create(user,function (error, result) {
                if(error){
                    res.status(500).send("error occured");
                }
                res.send(result);
            })
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }

}