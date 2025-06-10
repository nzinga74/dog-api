import { ICreateAdoption } from "@modules/adoptions/dtos/ICreateAdoption";
import { Adoption } from "@modules/adoptions/models/Adoption";
import { IAdoptionRepository } from "../IAdoptionRepository";
import { prismaClient } from "database";
import { IListAdoption } from "@modules/adoptions/dtos/IListAdoption";

class AdoptionRepository implements IAdoptionRepository {
  async list({ clientId, dogId, userId }: IListAdoption): Promise<Adoption[]> {
    return await prismaClient.adoption.findMany({
      where: {
        clientId,
        dogId,
        userId,
      },
    });
  }
  async create({
    acceptedTerm,
    clientId,
    dogId,
    userId,
  }: ICreateAdoption): Promise<Adoption> {
    return await prismaClient.adoption.create({
      data: {
        acceptedTerm,
        clientId,
        dogId,
        userId,
      },
    });
  }
}

export { AdoptionRepository };
