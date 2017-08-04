"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ silent: true });
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const Routes_1 = require("./routes/Routes");
class HttpServer {
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
        this.app.use('/api', new Routes_1.Routes().routes);
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
//# sourceMappingURL=server.js.map