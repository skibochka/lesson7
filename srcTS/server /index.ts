import * as http from 'http';
import Server from "./server";
import Events from "./events";

class App {
    private readonly _port: number = Server.get('port');

    public start(): void{
        Events.bind(http.createServer(Server).listen(this._port), this._port);
    }
}
new App().start();

