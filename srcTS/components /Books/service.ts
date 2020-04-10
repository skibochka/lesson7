import  Model  from './model';
import { IModel} from "./interfaces/IModel";

class bookService {
    public async getChartData(): Promise<IModel[]> {
        return Model.find({}).exec();
    }
}

export default new bookService();
