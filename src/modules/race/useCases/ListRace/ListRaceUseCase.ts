// import { inject, injectable } from "tsyringe";
// import { RaceRepository } from "../../repositories/RaceRepository";

// @injectable()
// class ListRaceUseCase {
//   constructor(
//     @inject("RaceRepository")
//     private raceRepository: RaceRepository
//   ) {}

//   async execute() {
//     const races = await this.raceRepository.findAll();
//     return races;
//   }
// }

// export { ListRaceUseCase };