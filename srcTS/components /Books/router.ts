import { Router as ERouter } from 'express';
import books from './index'

class Router{
    /**
 * Express router to mount books related functions on.
 * @type {Express.Router}
 * @const
 */
    private readonly router: ERouter = ERouter();

    constructor(){
        const router = ERouter();
        /**
         * Route serving list of books.
         * @name /v1/books
         * @function
         * @inner
         * @param {string} path - Express path
         * @param {callback} middleware - Express middleware.
         */
        router.get('/', books.chart);

        /**
         * Route serving list of books.
         * @name /v1/chart
         * @function
         * @inner
         * @param {string} path - Express path
         * @param {callback} middleware - Express middleware.
         */
        router.get('/chart', books.page)
        this.router = router;
    }

    get(): ERouter{
        return this.router;
    }
}
export default new Router().get();
