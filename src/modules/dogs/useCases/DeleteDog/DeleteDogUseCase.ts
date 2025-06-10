import { ErrorConstants } from "@errors/ErrorConstants";
import { ICreateDog } from "@modules/dogs/dtos/ICreateDog";
import { Dog } from "@modules/dogs/models/Dog";
import { IDogRepository } from "@modules/dogs/repositories/IDogRepository";
import { inject, injectable } from "tsyringe";
@injectable()
class DeleteDogUseCase {
  constructor(
    //@ts-ignore
    @inject("DogRepository")
    private doRepository: IDogRepository
  ) {}

  async execute(dogId: number): Promise<Dog> {
    try {
      return await this.doRepository.deleteDog(dogId);
    } catch (error) {
      throw new Error(ErrorConstants.DELETE_DOG_ERROR);
    }
  }
}

export { DeleteDogUseCase };
