require('dotenv').load();
import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as http from "http";
import { Routes } from "./routes/Routes";
import { config } from "./config";

class HttpServer {
  app: any;
  
  Initialize() {
    this.InitializeExpress();
    this.InitializePostDataParsers();
    this.UseGenericApiPath();
    this.RunHttpServer();
  }

  InitializeExpress() {
    this.app = express();
  }

  InitializePostDataParsers() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  
  UseGenericApiPath() {
     this.app.use('/',new Routes().routes)
  }

  RunHttpServer() {
    var port = process.env.PORT || '3000';
    this.app.set('port', port);
    
    var server = http.createServer(this.app);
    server.listen(port, () => console.log(`API running on localhost:${port}`));
  }
}

var httpServer = new HttpServer();
httpServer.Initialize();