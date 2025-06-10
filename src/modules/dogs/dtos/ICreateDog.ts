import { DogSex } from "@prisma/client";
import { DogStatus } from "../models/Dog";
interface ICreateDog {
  dogSizeId: number;
  commercialTypeId: number;
  raceId: number;
  name: string;
  birthDate: Date;
  sex: DogSex;
  status: DogStatus;
  description: string;
  photo: string;
  price: number;
}
export { ICreateDog };
