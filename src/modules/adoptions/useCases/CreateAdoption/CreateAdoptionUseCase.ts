import { ErrorConstants } from "@errors/ErrorConstants";
import { IClientRepositoryDTO } from "@modules/accounts/dtos/IClientRepositoryDTO";
import { Client } from "@modules/accounts/models/Client";
import { ICreateAdoption } from "@modules/adoptions/dtos/ICreateAdoption";
import { Adoption } from "@modules/adoptions/models/Adoption";
import { IAdoptionRepository } from "@modules/adoptions/repositories/IAdoptionRepository";
import { ICreateDog } from "@modules/dogs/dtos/ICreateDog";
import { Dog } from "@modules/dogs/models/Dog";
import { IDogRepository } from "@modules/dogs/repositories/IDogRepository";
import { DogSex } from "@prisma/client";
import { inject, injectable } from "tsyringe";
@injectable()
class CreateAdoptionUseCase {
  constructor(
    //@ts-ignore
    @inject("AdoptionRepository")
    private adoptionRepository: IAdoptionRepository
  ) {}

  async execute({
    acceptedTerm,
    clientId,
    dogId,
    userId,
  }: ICreateAdoption): Promise<Adoption> {
    try {
      return await this.adoptionRepository.create({
        acceptedTerm,
        clientId,
        dogId,
        userId,
      });
    } catch (error) {
      throw new Error(ErrorConstants.CREATE_ADOPTION_ERROR);
    }
  }
}

export { CreateAdoptionUseCase };
