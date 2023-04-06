import { inject, injectable } from "tsyringe";

import { Favorite } from "../../entities/Favorite";
import { IFavoriteRepository } from "../../repositories/IFavoriteRepository";

@injectable()
class CreateFavoriteService {
  constructor(
    @inject("FavoriteRepository")
    private favoriteRepository: IFavoriteRepository
  ) {}

  async execute(tv_show_id: number): Promise<Favorite> {
    const favorite = await this.favoriteRepository.create(tv_show_id);
    return favorite;
  }
}

export { CreateFavoriteService };
