import { DogSex } from "@prisma/client";

class Dog {
  id?: number;
  dogSizeId: number;
  commercialTypeId: number;
  raceId: number;
  name: string;
  birthDate: Date;
  sex: DogSex;
  status: DogStatus;
  description: String;
  photo: string;
  price: number;
}

// (0 - disponível, 1 -adotado, 2 -vendido)

enum DogStatus {
  Disponivel,
  Adotado,
  vendido,
}
export { DogStatus, Dog };
