import { ErrorConstants } from "@errors/ErrorConstants";
import { ICreateAdoption } from "@modules/adoptions/dtos/ICreateAdoption";
import { Adoption } from "@modules/adoptions/models/Adoption";
import { IAdoptionRepository } from "@modules/adoptions/repositories/IAdoptionRepository";
import { IDogRepository } from "@modules/dogs/repositories/IDogRepository";
import { ICreateSell } from "@modules/sells/dtos/ICreateSell";
import { Sell } from "@modules/sells/models/Sell";
import { ISellRepository } from "@modules/sells/repositories/ISellRepository";
import { inject, injectable } from "tsyringe";
@injectable()
class CreateSellUseCase {
  constructor(
    //@ts-ignore
    @inject("SellRepository")
    private sellRepository: ISellRepository,
    //@ts-ignore
    @inject("DogRepository")
    private dogRepository: IDogRepository
  ) {}

  async execute({
    paymentMethodId,
    clientId,
    dogId,
    userId,
  }: ICreateSell): Promise<Sell> {
    try {
      const dog = await this.dogRepository.findById(dogId);
      if (dog == null) {
        throw new Error(ErrorConstants.FIND_DOG_ERROR);
      }
      const price = dog.price;
      return await this.sellRepository.create({
        clientId,
        dogId,
        paymentMethodId,
        price,
        userId,
      });
    } catch (error) {
      console.log(error);
      throw new Error(ErrorConstants.CREATE_SELL_ERROR);
    }
  }
}

export { CreateSellUseCase };
