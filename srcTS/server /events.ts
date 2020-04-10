import * as http from 'http';
import {AddressInfo} from "net";

class Events {
    onError(error: NodeJS.ErrnoException, port: number | string):never {
        if (error.syscall !== 'listen') {
            throw error;
        }

        const bindPort: string = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

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

     onListening(address): void {
        // const bindPort: string = typeof address === 'string' ? `pipe ${address}` : `port ${address.port}`;
        console.log(`Listening on `);
    }

    bind(Server: http.Server, port: number): void {
        Server.on('error', (error) => this.onError(error, port));
        Server.on('listening', this.onListening.bind(Server));
    }
}

export default new Events();
