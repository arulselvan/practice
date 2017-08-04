import {Router} from "express";
import {UserController} from "./../controllers/UserController";

var router = Router();

export class UserRoutes {
    private userController: UserController;
    
    constructor () {
        this.userController = new UserController();   
    }

    get routes () {
        var controller = this.userController;
        router.get("/", controller.retrieve);  
        router.post("/", controller.create);  
        return router;
    }
   
}