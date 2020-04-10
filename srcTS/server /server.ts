import * as express from 'express';
import  Router  from '../config /router';
import Middleware from '../config /middleware';


class Server {
    private app: express.Application;

    constructor() {
        const app: express.Application = express();
        Middleware.init(app);
        Router.init(app);
        app.set('port', 3000);
        this.app = app;
    }
    public get(): express.Application {
        return this.app;
    }
}

export default new Server().get();
