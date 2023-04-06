import { GetAllTvShowsController } from "@modules/tvShows/useCases/getAllTvShows/GetAllTvShowsController";
import { GetOneTvShowController } from "@modules/tvShows/useCases/getOneTvShow/GetOneTvShowController";
import { getOneTvShowSchema } from "@modules/tvShows/validations/GetOneTvShowSchema";
import { ensureAuthenticated } from "@shared/middlewares/ensureAuthenticated";
import { Router } from "express";

import { validateFields } from "../middlewares/validateFields";

const tvShowRoutes = Router();
const getAllTvShowsController = new GetAllTvShowsController();
const getOneTvShowController = new GetOneTvShowController();

// Get all tv shows with episodes
tvShowRoutes.get("/", ensureAuthenticated, getAllTvShowsController.handle);

// Get one tv show
tvShowRoutes.get(
  "/:id",
  ensureAuthenticated,
  validateFields(getOneTvShowSchema),
  getOneTvShowController.handle
);

export { tvShowRoutes };
