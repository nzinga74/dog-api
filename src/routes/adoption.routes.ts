import { CreateAdoptionController } from "@modules/adoptions/useCases/CreateAdoption/CreateAdoptionController";
import { ListAdoptionController } from "@modules/adoptions/useCases/ListAdoption/ListAdoptionController";
import { Router } from "express";

const adoptionRoutes = Router();
const createAdoptionController = new CreateAdoptionController();
const listAdoptionController = new ListAdoptionController();
adoptionRoutes.post("/", createAdoptionController.handle);
adoptionRoutes.get("/list", listAdoptionController.handle);
export { adoptionRoutes };
