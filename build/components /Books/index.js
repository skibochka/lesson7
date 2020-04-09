"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
class books {
    async chart(req, res, next) {
        try {
            const books = await service_1.default.getChartData();
            const map = new Map();
            books.forEach((el) => {
                const key = el.code3;
                if (map[key] != null)
                    map[key] += 1;
                else
                    map[key] = 1;
            });
            const data = Object.keys(map).map((key) => ({ code3: key, value: map[key] }));
            res.status(200).json({
                data,
            });
        }
        catch (error) {
            res.status(500).json({
                message: error.name,
                details: error.message,
            });
            return next(error);
        }
    }
}
exports.default = new books();
