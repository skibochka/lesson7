"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class bookService {
    async getChartData() {
        return model_1.default.find({}).exec();
    }
}
exports.default = new bookService();
