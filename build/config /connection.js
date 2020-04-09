"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const MONGODB_URI = 'mongodb://localhost:27017/';
const MONGODB_DB_MAIN = 'books_db';
class Config {
    constructor() {
        this.MONGO_URI = `${MONGODB_URI}${MONGODB_DB_MAIN}`;
        this.connectOptions = {
            autoReconnect: true,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 1000,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
    }
    connection() {
        return module.exports = mongoose.createConnection(this.MONGO_URI, this.connectOptions);
    }
}
exports.default = new Config().connection();
