import { ErrorConstants } from "@errors/ErrorConstants";
import { IClientRepositoryDTO } from "@modules/accounts/dtos/IClientRepositoryDTO";
import { Client } from "@modules/accounts/models/Client";
import { ICreateDog } from "@modules/dogs/dtos/ICreateDog";
import { Dog } from "@modules/dogs/models/Dog";
import { IDogRepository } from "@modules/dogs/repositories/IDogRepository";
import { DogSex } from "@prisma/client";
import { inject, injectable } from "tsyringe";
@injectable()
class CreateDogUseCase {
  constructor(
    //@ts-ignore
    @inject("DogRepository")
    private doRepository: IDogRepository
  ) {}

  async execute({
    birthDate,
    commercialTypeId,
    description,
    dogSizeId,
    name,
    photo,
    price,
    raceId,
    sex,
    status,
  }: ICreateDog): Promise<Dog> {
    try {
      return await this.doRepository.create({
        birthDate,
        commercialTypeId,
        description,
        dogSizeId,
        name,
        photo,
        price,
        raceId,
        sex,
        status,
      });
    } catch (error) {
      console.log(error);
      throw new Error(ErrorConstants.CREATE_DOG_ERROR);
    }
  }
}

export { CreateDogUseCase };
