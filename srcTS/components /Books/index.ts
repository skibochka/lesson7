import bookService from './service';
import {IModel} from "./interfaces/IModel";
import {IData} from "./interfaces/IData";

class books {
    public async chart(req, res, next):Promise<Express.Response>{
        try {
            const books: IModel[] = await bookService.getChartData();
            const map: Map<string, number> = new Map();

            books.forEach((el) => {
                const key = el.code3;
                if (map[key] != null) map[key] += 1;
                else map[key] = 1;
            });
            const data:IData[] = Object.keys(map).map((key) => ({ code3: key, value: map[key] }));
            res.status(200).json({
                data,
            });
        } catch (error) {
            res.status(500).json({
                message: error.name,
                details: error.message,
            });

            return next(error);
        }
    }
}
export default new books();
