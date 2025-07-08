import { CreateDogController } from "@modules/dogs/useCases/CreateDog/CreateDogController";
import { CreateDogUseCase } from "@modules/dogs/useCases/CreateDog/CreateDogUseCase";
import { DeleteDogController } from "@modules/dogs/useCases/DeleteDog/DeleteDogController";
import { ListDogController } from "@modules/dogs/useCases/ListDog/ListDogController";
import { UpdateDogController } from "@modules/dogs/useCases/UpdateDog/UpdateDogController";

import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload";
import { ListRaceController } from "@modules/race/useCases/ListRace/ListRaceController";

const raceRoutes = Router();
const listRacesController = new ListRaceController();

raceRoutes.get("/list/races", (req, res) => listRacesController.handle(req, res));


export { raceRoutes };
