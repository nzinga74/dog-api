import { ICreateSell } from "../dtos/ICreateSell";
import { IListSell } from "../dtos/IListSells";
import { Sell } from "../models/Sell";

interface ISellRepository {
  create(data: ICreateSell): Promise<Sell>;
  list(data: IListSell): Promise<Sell[]>;
}

export { ISellRepository };
