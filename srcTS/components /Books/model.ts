import { Schema, Model } from 'mongoose';
import Connection from '../../config /connection';
import { IModel } from './interfaces/IModel';

class BooksSchema {
    _schema(): Schema {
    return new Schema(
        {
            title: {
                type: String,
                trim: true,
            },
            titleLength: {
                type: Number,
                required: false,
            },
            description: {
                type: String,
                required: true,
            },
            code3: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                required: true,
            },
            updatedAt: {
                type: Date,
                required: true,
            },
        },
        {
            collection: 'books',
            versionKey: false,
        },
    )
}
    public _model(): Model<IModel> {
        return Connection.model<IModel>('BooksModel', this._schema())
    }
}
export default new BooksSchema()._model();
