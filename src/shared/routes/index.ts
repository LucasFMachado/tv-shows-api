import { Router } from "express";

import { userRoutes } from "./user";
import { tvShowRoutes } from "./tvShow";
import { favoriteRoutes } from "./favorite";

const routes = Router();

routes.use("/favorites", favoriteRoutes);
routes.use("/users", userRoutes);
routes.use("/tv-shows", tvShowRoutes);

export { routes };
