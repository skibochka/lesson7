import { Router as ERouter } from 'express';
import * as path from 'path';
import books from './index'


class Router{
    /**
 * Express router to mount books related functions on.
 * @type {Express.Router}
 * @const
 */
    private readonly _router: ERouter = ERouter();

    run(): void{
        /**
         * Route serving list of books.
         * @name /v1/books
         * @function
         * @inner
         * @param {string} path - Express path
         * @param {callback} middleware - Express middleware.
         */
        this._router.get('/', books.chart);

        /**
         * Route serving list of books.
         * @name /v1/chart
         * @function
         * @inner
         * @param {string} path - Express path
         * @param {callback} middleware - Express middleware.
         */
        this._router.get('/chart', (req, res) => {
            res.sendFile(path.resolve('public/index.html'));
        });
    }

    get(): ERouter{
        return this._router;
    }
}
export default new Router().get();
