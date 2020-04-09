"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const server_1 = require("./server");
const events_1 = require("./events");
class App {
    constructor() {
        this.server = new server_1.default().server;
        this._port = new this.server.get('port');
    }
    start() {
        new events_1.default().bind(http.createServer(this.server).listen(this._port), this._port);
    }
}
new App().start();
