import * as express from 'express';
import { Router } from '../config /router';
import Middleware from '../config /middleware';


export default class Server {
    private readonly _server: express.Application = express();

    constructor() {
        Middleware.init(this._server);
        Router.init(this._server);
        this._server.set('port', 3000);
    }
    get server(): express.Application {
        return this._server;
    }
}
