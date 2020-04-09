"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const router_1 = require("../components /Books/router");
class Router {
    static init(app) {
        const router = express.Router();
        app.use('/v1/books', router_1.default);
        app.use((req, res) => {
            res.status(404).send(http.STATUS_CODES[404]);
        });
        app.use(router);
    }
}
exports.Router = Router;
