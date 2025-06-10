import { ICreateDog } from "@modules/dogs/dtos/ICreateDog";
import { Dog } from "@modules/dogs/models/Dog";
import { IDogRepository } from "../IDogRepository";
import { prismaClient } from "database";
import { IListDog } from "@modules/dogs/dtos/IListDog";

class DogRepository implements IDogRepository {
  findById(id: number): Promise<Dog | null> {
    return prismaClient.dog.findUnique({
      where: { id },
    });
  }
  deleteDog(dogId: number): Promise<Dog> {
    return prismaClient.dog.update({
      data: {
        deleted_at: new Date(),
      },
      where: { id: dogId },
    });
  }
  listDogs({
    commercialTypeId,
    dogSizeId,
    maxPrice,
    minPrice,
    raceId,
    sex,
    status,
  }: IListDog): Promise<Dog[]> {
    return prismaClient.dog.findMany({
      where: {
        commercialTypeId,
        dogSizeId,
        raceId,
        sex,
        status,
        deleted_at: { equals: null },
        price: { lte: minPrice, gte: maxPrice },
      },
    });
  }
  async create({
    birthDate,
    description,
    name,
    photo,
    raceId,
    sex,
    commercialTypeId,
    status,
    dogSizeId,
    price,
  }: ICreateDog): Promise<Dog> {
    return await prismaClient.dog.create({
      data: {
        birthDate,
        description,
        name,
        photo,
        raceId,
        sex,
        dogSizeId,
        status: 1,
        commercialTypeId,
        price,
      },
    });
  }
}

export { DogRepository };
