import { RaceRepository } from "@modules/race/repositories/implementations/RaceRepository";
import { IRaceRepository } from "@modules/race/repositories/IRaceRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListRaceUseCase {

  constructor(
    //@ts-ignore
    @inject("RaceRepository")
    private raceRepository: IRaceRepository
  ) {}

  async execute() {
    const races = await this.raceRepository.findAll();
    return races;
  }
}

export { ListRaceUseCase };
