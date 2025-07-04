import { inject, injectable } from "tsyringe";
import { IDogRepository } from "@modules/dogs/repositories/IDogRepository";
import { Dog } from "@modules/dogs/models/Dog";
import { IUpdateDog } from "@modules/dogs/dtos/IUpdateDog";
import { ErrorConstants } from "@errors/ErrorConstants";

@injectable()
class UpdateDogUseCase {
  constructor(
    //@ts-ignore
    @inject("DogRepository")
    private dogRepository: IDogRepository
  ) {}

  async execute(data: IUpdateDog): Promise<Dog> {
    try {
      return await this.dogRepository.updateDog(data);
    } catch (error) {
      console.log(error);
      throw new Error(ErrorConstants.UPDATE_DOG_ERROR);
    }
  }
}

export { UpdateDogUseCase };
