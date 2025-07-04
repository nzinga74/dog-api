import { inject, injectable } from "tsyringe";
import { ErrorConstants } from "@errors/ErrorConstants";
import { IClientRepository } from "@modules/accounts/repositories/IClientRepository";

@injectable()
class ApproveClientUseCase {
  constructor(
    //@ts-ignore
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}
  async execute(clientId: number, eligibility: boolean): Promise<any> {
    try {
      const client = await this.clientRepository.updateClientApproval(
        clientId,
        eligibility
      );

      return client;
    } catch (error) {
      console.log(error);
      throw new Error(ErrorConstants.APPROVE_CLIENT_ERROR);
    }
  }
}

export { ApproveClientUseCase };
