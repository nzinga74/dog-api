import { ICreateDog } from "@modules/dogs/dtos/ICreateDog";
import { Dog } from "@modules/dogs/models/Dog";
import { prismaClient } from "database";
import { IListDog } from "@modules/dogs/dtos/IListDog";
import { IUpdateDog } from "@modules/dogs/dtos/IUpdateDog";
import { IRaceRepository } from "../IRaceRepository";
import { Race } from "@modules/race/models/race";


class RaceRepository implements IRaceRepository {
  async findAll(): Promise<Race[]> {
    const races = await prismaClient.dogRace.findMany();
    return races.map(race => ({
      id: race.id,
      name: race.name,
      created_at: race.created_at,
      updated_at: race.updated_at,
    }));

  }
  
}

export { RaceRepository };
