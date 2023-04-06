import { ITvShowRepository } from "@modules/tvShows/repositories/ITvShowRepository";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { UserRepository } from "@modules/users/repositories/UserRepository";
import { TvShowRepository } from "@modules/tvShows/repositories/TvShowRepository";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ITvShowRepository>(
  "TvShowRepository",
  TvShowRepository
);
