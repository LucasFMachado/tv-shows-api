import { Router } from "express";

import { userRoutes } from "./user";
import { tvShowRoutes } from "./tvShow";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/tv-shows", tvShowRoutes);

export { routes };
