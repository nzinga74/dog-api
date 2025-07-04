import { CreateDogController } from "@modules/dogs/useCases/CreateDog/CreateDogController";
import { CreateDogUseCase } from "@modules/dogs/useCases/CreateDog/CreateDogUseCase";
import { DeleteDogController } from "@modules/dogs/useCases/DeleteDog/DeleteDogController";
import { ListDogController } from "@modules/dogs/useCases/ListDog/ListDogController";
import { UpdateDogController } from "@modules/dogs/useCases/UpdateDog/UpdateDogController";

import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload";

const upload = uploadConfig.upload("tmp");
const dogRoutes = Router();
const createDogUseCase = new CreateDogController();
const listDogUseCase = new ListDogController();
const deleteDogController = new DeleteDogController();
const updateDogController = new UpdateDogController();

dogRoutes.post("/", multer(upload).single("image"), createDogUseCase.handle);
dogRoutes.get("/list", listDogUseCase.handle);
dogRoutes.delete("/:id", deleteDogController.handle);

dogRoutes.put("/", multer(upload).single("image"), updateDogController.handle);
export { dogRoutes };
