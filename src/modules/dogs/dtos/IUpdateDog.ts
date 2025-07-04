import { DogSex } from "@prisma/client";

export interface IUpdateDog {
  id: number;
  name?: string;
  commercialTypeId?: number;
  dogSizeId?: number;
  raceId?: number;
  birthDate?: Date;
  sex?: DogSex;
  status?: number;
  description?: string;
  photo?: string;
  price?: number;
}
