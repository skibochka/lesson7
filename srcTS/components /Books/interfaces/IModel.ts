import { Document } from 'mongoose';

export interface IModel extends Document {
    title: string;
    code3 ? : string;
    titleLength ? : string;
    description ? : string;
    createdAt ? : Date;
    updatedAt ? : Date;
}
