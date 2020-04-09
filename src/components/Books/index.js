const BookService = require('./service');
/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function chart(req, res, next) {
    try {
        const books = await BookService.getChartData();
        const map = new Map();

        books.forEach((el) => {
            const key = el.code3;
            if (map[key] != null) map[key] += 1;
            else map[key] = 1;
        });
        const data = Object.keys(map).map((key) => ({ code3: key, value: map[key] }));
        res.status(200).json({
            data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }
}


module.exports = {
    chart,
};
