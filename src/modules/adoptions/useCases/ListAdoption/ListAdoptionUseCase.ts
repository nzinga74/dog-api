import { ErrorConstants } from "@errors/ErrorConstants";
import { IListAdoption } from "@modules/adoptions/dtos/IListAdoption";
import { Adoption } from "@modules/adoptions/models/Adoption";
import { IAdoptionRepository } from "@modules/adoptions/repositories/IAdoptionRepository";
import { inject, injectable } from "tsyringe";
@injectable()
class ListAdoptionUseCase {
  constructor(
    //@ts-ignore
    @inject("AdoptionRepository")
    private adoptionRepository: IAdoptionRepository
  ) {}

  async execute({
    clientId,
    dogId,
    userId,
  }: IListAdoption): Promise<Adoption[]> {
    try {
      return await this.adoptionRepository.list({
        clientId,
        dogId,
        userId,
      });
    } catch (error) {
      throw new Error(ErrorConstants.LIST_DOG_ERROR);
    }
  }
}

export { ListAdoptionUseCase };
