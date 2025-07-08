import { inject, injectable } from "tsyringe";
import { IDogRepository } from "@modules/dogs/repositories/IDogRepository";

@injectable()
class UploadDogImageUseCase {
  constructor(
    //@ts-ignore
    @inject("DogRepository")
    private dogRepository: IDogRepository
  ) {}

  async execute({ dogId, photo }: { dogId: number; photo: string }): Promise<any> {
    const dog = await this.dogRepository.findById(dogId);
    if (!dog) {
      throw new Error("Dog not found");
    }
    dog.photo = photo;
    await this.dogRepository.save(dog);
    return dog;
  }
}

export { UploadDogImageUseCase };
