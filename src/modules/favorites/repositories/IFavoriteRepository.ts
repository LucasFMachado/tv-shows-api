import { Favorite } from "../entities/Favorite";

interface IFavoriteRepository {
  create(tv_show_id: number): Promise<Favorite>;
  delete(tv_show_id: number): Promise<Favorite>;
}

export { IFavoriteRepository };
