import { ErrorConstants } from "@errors/ErrorConstants";
import { IListSell } from "@modules/sells/dtos/IListSells";
import { Sell } from "@modules/sells/models/Sell";
import { ISellRepository } from "@modules/sells/repositories/ISellRepository";
import { inject, injectable } from "tsyringe";
@injectable()
class ListSellUseCase {
  constructor(
    //@ts-ignore
    @inject("SellRepository")
    private sellRepository: ISellRepository
  ) {}

  async execute({ clientId, dogId, userId }: IListSell): Promise<Sell[]> {
    try {
      return await this.sellRepository.list({
        clientId,
        dogId,
        userId,
      });
    } catch (error) {
      throw new Error(ErrorConstants.LIST_DOG_ERROR);
    }
  }
}

export { ListSellUseCase };
