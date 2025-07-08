import { ICreateDog } from "../dtos/ICreateDog";
import { IListDog } from "../dtos/IListDog";
import { IUpdateDog } from "../dtos/IUpdateDog";
import { Dog } from "../models/Dog";

interface IDogRepository {
  save(dog: Dog): unknown;
  create(data: ICreateDog): Promise<Dog>;
  listDogs(data: IListDog): Promise<Dog[]>;
  findById(id: number): Promise<Dog | null>;
  deleteDog(dogId: number): Promise<Dog>;
  updateDog(data: IUpdateDog): Promise<Dog>;
}
export { IDogRepository };
