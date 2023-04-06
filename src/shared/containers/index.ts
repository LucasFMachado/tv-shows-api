import { ITvShowRepository } from "@modules/tvShows/repositories/ITvShowRepository";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { UserRepository } from "@modules/users/repositories/UserRepository";
import { TvShowRepository } from "@modules/tvShows/repositories/TvShowRepository";
import { container } from "tsyringe";
import { IFavoriteRepository } from "@modules/favorites/repositories/IFavoriteRepository";
import { FavoriteRepository } from "@modules/favorites/repositories/FavoriteRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ITvShowRepository>(
  "TvShowRepository",
  TvShowRepository
);

container.registerSingleton<IFavoriteRepository>(
  "FavoriteRepository",
  FavoriteRepository
);
