"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("../config /router");
const middleware_1 = require("../config /middleware");
class Server {
    constructor() {
        this._server = express();
        middleware_1.default.init(this._server);
        router_1.Router.init(this._server);
        this._server.set('port', 3000);
    }
    get server() {
        return this._server;
    }
}
exports.default = Server;
