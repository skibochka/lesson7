const { Router } = require('express');
const path = require('path');
const BooksComponent = require('./index');
/**
 * Express router to mount books related functions on.
 * @type {Express.Router}
 * @const
 */
const router = Router();
/**
 * Route serving list of books.
 * @name /v1/books
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', BooksComponent.chart);

/**
 * Route serving list of books.
 * @name /v1/chart
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/chart', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

module.exports = router;
