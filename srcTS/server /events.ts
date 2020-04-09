import * as http from 'http';
import {AddressInfo} from "net";

export default class Events {
    private _addr: string | AddressInfo;
    onError(error: NodeJS.ErrnoException, port: number | string):never {
        if (error.syscall !== 'listen') {
            throw error;
        }

        const bindPort = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

        switch (error.code) {
            case 'EACCES':
                console.error(`${bindPort} requires elevated privileges`);
                process.exit(1);
            case 'EADDRINUSE':
                console.error(`${bindPort} is already in use`);
                process.exit(1);
            default:
                throw error;
        }
    }

     onListening(port: number): void {
        const addr: string | AddressInfo = this._addr;
        const bindPort = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;

        console.log(`Listening on ${bindPort}`);
    }

    bind(Server, port): void {
        this._addr = Server.address;
        Server.on('error', (error) => this.onError(error, port));
        Server.on('listening', this.onListening.bind(Server));
    }
}
