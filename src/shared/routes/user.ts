import { AuthenticateUserController } from "@modules/users/useCases/authenticateUser/AuthenticateUserController";
import { ChangePasswordController } from "@modules/users/useCases/changePassword/ChangePasswordController";
import { CreateUserController } from "@modules/users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "@modules/users/useCases/deleteUser/DeleteUserController";
import { GetAllUsersController } from "@modules/users/useCases/getAllUsers/GetAllUsersController";
import { GetOneUserController } from "@modules/users/useCases/getOneUser/GetOneUserController";
import { UpdateUserController } from "@modules/users/useCases/updateUser/UpdateUserController";
import { authenticateUserSchema } from "@modules/users/validations/AuthenticateUserSchema";
import { changePasswordSchema } from "@modules/users/validations/ChangePasswordSchema";
import { createUserSchema } from "@modules/users/validations/CreateUserSchema";
import { deleteUserSchema } from "@modules/users/validations/DeleteUserSchema";
import { getOneUserSchema } from "@modules/users/validations/GetOneUserSchema";
import { updateUserSchema } from "@modules/users/validations/UpdateUserSchema";
import { ensureAuthenticated } from "@shared/middlewares/ensureAuthenticated";
import { Router } from "express";

import { validateFields } from "../middlewares/validateFields";

const userRoutes = Router();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const getAllUsersController = new GetAllUsersController();
const getOneUserController = new GetOneUserController();
const changePasswordController = new ChangePasswordController();
const authenticateUserController = new AuthenticateUserController();

// Authenticate user
userRoutes.post(
  "/authenticate",
  validateFields(authenticateUserSchema),
  authenticateUserController.handle
);

// Get all users
userRoutes.get("/", ensureAuthenticated, getAllUsersController.handle);

// Get one user
userRoutes.get(
  "/:id",
  ensureAuthenticated,
  validateFields(getOneUserSchema),
  getOneUserController.handle
);

// Register user
userRoutes.post(
  "/",
  validateFields(createUserSchema),
  createUserController.handle
);

// Update user
userRoutes.put(
  "/:id",
  ensureAuthenticated,
  validateFields(updateUserSchema),
  updateUserController.handle
);

// Delete user
userRoutes.delete(
  "/:id",
  ensureAuthenticated,
  validateFields(deleteUserSchema),
  deleteUserController.handle
);

// Change user password
userRoutes.put(
  "/change-password/:id",
  ensureAuthenticated,
  validateFields(changePasswordSchema),
  changePasswordController.handle
);

export { userRoutes };
