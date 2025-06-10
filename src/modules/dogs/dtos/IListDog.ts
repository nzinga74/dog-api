import { DogSex } from "@prisma/client";
import { DogStatus } from "../models/Dog";

interface IListDog {
  commercialTypeId?: number;
  dogSizeId?: number;
  maxPrice?: number;
  minPrice?: number;
  raceId?: number;
  sex?: DogSex;
  status?: DogStatus;
}

export { IListDog };
