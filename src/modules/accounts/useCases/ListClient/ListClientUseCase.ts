import { inject, injectable } from "tsyringe";
import { ErrorConstants } from "@errors/ErrorConstants";
import { IClientRepository } from "@modules/accounts/repositories/IClientRepository";

@injectable()
class ListClientUseCase {
  constructor(
    //@ts-ignore
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}
  async execute(eligibility: boolean): Promise<any> {
    try {
      const clients = await this.clientRepository.list(eligibility);
      return clients;
    } catch (error) {
      console.log(error);
      throw new Error(ErrorConstants.LIST_CLIENT_ERROR);
    }
  }
}

export { ListClientUseCase };
