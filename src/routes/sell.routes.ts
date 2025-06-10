import { CreateSellController } from "@modules/sells/useCases/CreateSell/CreateSellController";
import { ListSellController } from "@modules/sells/useCases/ListSell/ListSellController";
import { Router } from "express";

const sellRoutes = Router();
const createSellController = new CreateSellController();
const listSellController = new ListSellController();
sellRoutes.post("/", createSellController.handle);
sellRoutes.get("/list", listSellController.handle);
export { sellRoutes };
