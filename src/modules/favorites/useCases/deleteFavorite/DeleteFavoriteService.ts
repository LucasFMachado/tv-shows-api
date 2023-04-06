import { inject, injectable } from "tsyringe";

import { Favorite } from "../../entities/Favorite";
import { IFavoriteRepository } from "../../repositories/IFavoriteRepository";

@injectable()
class DeleteFavoriteService {
  constructor(
    @inject("FavoriteRepository")
    private favoriteRepository: IFavoriteRepository
  ) {}

  async execute(id: number): Promise<Favorite> {
    const favorite = await this.favoriteRepository.delete(id);
    return favorite;
  }
}

export { DeleteFavoriteService };
