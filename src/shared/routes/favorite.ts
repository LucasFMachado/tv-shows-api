import { CreateFavoriteController } from "@modules/favorites/useCases/createFavorite/CreateFavoriteController";
import { DeleteFavoriteController } from "@modules/favorites/useCases/deleteFavorite/DeleteFavoriteController";
import { ensureAuthenticated } from "@shared/middlewares/ensureAuthenticated";
import { createFavoriteSchema } from "@modules/favorites/validations/CreateFavoriteSchema";
import { deleteFavoriteSchema } from "@modules/favorites/validations/DeleteFavoriteSchema";
import { validateFields } from "../middlewares/validateFields";
import { Router } from "express";

const favoriteRoutes = Router();
const createFavoriteController = new CreateFavoriteController();
const deleteFavoriteController = new DeleteFavoriteController();

// Add a tv show to the favorites list
favoriteRoutes.post(
  "/:tv_show_id",
  ensureAuthenticated,
  validateFields(createFavoriteSchema),
  createFavoriteController.handle
);

// Remove a tv show to the favorites list
favoriteRoutes.delete(
  "/:tv_show_id",
  ensureAuthenticated,
  validateFields(deleteFavoriteSchema),
  deleteFavoriteController.handle
);

export { favoriteRoutes };
