import { adoptionRoutes } from "./adoption.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { clientRoutes } from "./client.routes";
import { dogRoutes } from "./dog.routes";
import { raceRoutes } from "./race.route";
import { sellRoutes } from "./sell.routes";

import { userRoutes } from "./user.routes";
import { Router } from "express";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/session", authenticateRoutes);
routes.use("/clients", clientRoutes);
routes.use("/dogs", dogRoutes);
routes.use("/adoptions", adoptionRoutes);
routes.use("/sells", sellRoutes);
routes.use("/race", raceRoutes);

export { routes };
