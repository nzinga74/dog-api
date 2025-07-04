import { IClientRepositoryDTO } from "../dtos/IClientRepositoryDTO";
import { Client } from "../models/Client";
interface IClientRepository {
  create(data: IClientRepositoryDTO): Promise<Client>;
  updateClientApproval(clientId: number, eligibility: boolean): Promise<any>;
  list(eligibility: boolean): Promise<Client[]>;
  findByEmail(email: string): Promise<Client | null>;
}

export { IClientRepository };
