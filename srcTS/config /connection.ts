import * as mongoose from 'mongoose';

const MONGODB_URI: string = 'mongodb://localhost:27017/';
const MONGODB_DB_MAIN: string = 'books_db';

class Config  {
    private readonly MONGO_URI: string = `${MONGODB_URI}${MONGODB_DB_MAIN}`;
    private readonly connectOptions: mongoose.ConnectionOptions = {
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    connection(): mongoose.Connection {
        return module.exports = mongoose.createConnection(this.MONGO_URI, this.connectOptions);
    }
}
export default new Config().connection();
