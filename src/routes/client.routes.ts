import { ApproveClientController } from "@modules/accounts/useCases/ApproveClient/ApproveClientController";
import { CreateClientController } from "@modules/accounts/useCases/CreateClient/CreateClientController";
import { ListClientController } from "@modules/accounts/useCases/ListClient/ListClientController";
import { Router } from "express";

const clientRoutes = Router();
const createClientController = new CreateClientController();
const approveClientController = new ApproveClientController();
const listClientController = new ListClientController();
clientRoutes.post("/", createClientController.handle);
clientRoutes.post("/approve", approveClientController.handle);
clientRoutes.get("/", listClientController.handle);
export { clientRoutes };
