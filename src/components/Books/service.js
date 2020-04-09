const Model = require('./model');

/**
 * @method getChartData
 * @param {any}
 * @returns {any}
 */
function getChartData() {
    return Model.find({}).exec();
}

module.exports = {
    getChartData,
};
