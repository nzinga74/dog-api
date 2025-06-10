import { ErrorConstants } from "@errors/ErrorConstants";
import { IListDog } from "@modules/dogs/dtos/IListDog";
import { Dog, DogStatus } from "@modules/dogs/models/Dog";
import { IDogRepository } from "@modules/dogs/repositories/IDogRepository";
import { inject, injectable } from "tsyringe";
@injectable()
class ListDogUseCase {
  constructor(
    //@ts-ignore
    @inject("DogRepository")
    private doRepository: IDogRepository
  ) {}

  async execute({
    commercialTypeId,
    dogSizeId,
    maxPrice,
    minPrice,
    raceId,
    sex,
    status = DogStatus.Disponivel,
  }: IListDog): Promise<Dog[]> {
    try {
      return await this.doRepository.listDogs({
        commercialTypeId,
        dogSizeId,
        maxPrice,
        minPrice,
        raceId,
        sex,
        status,
      });
    } catch (error) {
      throw new Error(ErrorConstants.LIST_DOG_ERROR);
    }
  }
}

export { ListDogUseCase };
