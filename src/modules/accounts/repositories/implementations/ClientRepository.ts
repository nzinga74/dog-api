import { prismaClient } from "database";
import { IClientRepository } from "../IClientRepository";
import { IClientRepositoryDTO } from "@modules/accounts/dtos/IClientRepositoryDTO";
import { Client } from "@modules/accounts/models/Client";
class ClientRepository implements IClientRepository {
  async list(eligibility: boolean): Promise<Client[]> {
    return await prismaClient.client.findMany({
      where: {
        eligibleAdoption: eligibility,
      },
    });
  }
  async updateClientApproval(
    clientId: number,
    eligibility: boolean
  ): Promise<any> {
    return await prismaClient.client.update({
      where: {
        id: clientId,
      },
      data: {
        eligibleAdoption: eligibility,
      },
    });
  }
  async findByEmail(email: string): Promise<Client | null> {
    return await prismaClient.client.findUnique({
      where: { email },
    });
  }
  async create({
    county,
    email,
    lastname,
    name,
    phone,
    province,
    residenceNumber,
    district,
    street,
    password,
  }: IClientRepositoryDTO): Promise<Client> {
    const client = await prismaClient.client.create({
      data: {
        email,
        lastname,
        name,
        phone,
        password,
        address: {
          create: {
            province,
            county,
            district,
            residenceNumber,
            street,
          },
        },
      },
    });
    return client;
  }
}

export { ClientRepository };
