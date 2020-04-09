import * as http from 'http';
import Server from "./server";
import Events from "./events";

class App {
    private server: any = new Server().server;
    private readonly _port: number = new this.server.get('port');

    start(): void{
       new Events().bind(http.createServer(this.server).listen(this._port), this._port);
    }
}
new App().start();

