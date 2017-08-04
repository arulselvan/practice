import {Router} from "express";
import {DefaultController} from "./../controllers/DefaultController";

var router = Router();

export class DefaultRoutes {
    private _defaultController: DefaultController;
    
    constructor () {
        this._defaultController = new DefaultController();   
    }

    get routes () {
        var controller = this._defaultController;
        router.get("/", controller.retrieve);    
        return router;
    }
   
}