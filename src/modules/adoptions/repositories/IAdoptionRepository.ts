import { ICreateAdoption } from "../dtos/ICreateAdoption";
import { IListAdoption } from "../dtos/IListAdoption";
import { Adoption } from "../models/Adoption";

interface IAdoptionRepository {
  create(data: ICreateAdoption): Promise<Adoption>;
  list(data: IListAdoption): Promise<Adoption[]>;
}

export { IAdoptionRepository };
