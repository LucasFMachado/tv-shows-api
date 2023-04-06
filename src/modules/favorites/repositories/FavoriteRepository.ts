import { AppError } from "@shared/errors/AppError";
import { getRepository, Not, Repository } from "typeorm";

import { Favorite } from "../entities/Favorite";
import { IFavoriteRepository } from "./IFavoriteRepository";

class FavoriteRepository implements IFavoriteRepository {
  private repository: Repository<Favorite>;

  constructor() {
    this.repository = getRepository(Favorite);
  }

  async create(tv_show_id: number): Promise<Favorite> {
    const favorite_already_added = await this.findByTvShowId(tv_show_id);

    if (favorite_already_added) {
      throw new AppError("This Tv Show is already in your favorites list.");
    }

    const favorite = this.repository.create({ tv_show_id });

    await this.repository.save(favorite);

    return favorite;
  }

  async delete(tv_show_id: number): Promise<Favorite> {
    const favorite = await this.findByTvShowId(tv_show_id);

    if (!favorite) {
      throw new AppError("This Tv Show is not in your favorites list.");
    }

    const deleted_favorite = this.repository.create({
      ...favorite,
      delete: true,
    });

    await this.repository.save(deleted_favorite);

    return deleted_favorite;
  }

  /*
  // Private methods
  */

  private async findByTvShowId(
    tv_show_id: number
  ): Promise<Favorite | undefined> {
    const favorite = await this.repository.findOne({
      tv_show_id,
      delete: false,
    });
    return favorite;
  }
}

export { FavoriteRepository };
