"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require("path");
const index_1 = require("./index");
class Router {
    constructor() {
        this._router = express_1.Router();
    }
    run() {
        this._router.get('/', index_1.default.chart);
        this._router.get('/chart', (req, res) => {
            res.sendFile(path.resolve('public/index.html'));
        });
    }
    get() {
        return this._router;
    }
}
exports.default = new Router().get();
