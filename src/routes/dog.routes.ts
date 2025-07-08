import { CreateDogController } from "@modules/dogs/useCases/CreateDog/CreateDogController";
import { DeleteDogController } from "@modules/dogs/useCases/DeleteDog/DeleteDogController";
import { ListDogController } from "@modules/dogs/useCases/ListDog/ListDogController";
import { UpdateDogController } from "@modules/dogs/useCases/UpdateDog/UpdateDogController";

import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload";
import { UploadDogImageController } from "@modules/dogs/useCases/UploadImage/UploadDogImageController";

const upload = uploadConfig.upload("tmp");
const dogRoutes = Router();
const createDogUseCase = new CreateDogController();
const listDogUseCase = new ListDogController();
const deleteDogController = new DeleteDogController();
const updateDogController = new UpdateDogController();
const uploadImageController = new UploadDogImageController();

dogRoutes.post("/", multer(upload).single("image"), createDogUseCase.handle);
dogRoutes.get("/list", listDogUseCase.handle);
dogRoutes.delete("/:id", deleteDogController.handle);
dogRoutes.get("/:id", listDogUseCase.handle);
dogRoutes.post("/upload/:id", multer(upload).single("image"), uploadImageController.handle);

dogRoutes.put("/", multer(upload).single("image"), updateDogController.handle);
export { dogRoutes };
