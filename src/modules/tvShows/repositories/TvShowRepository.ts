import { AppError } from "@shared/errors/AppError";
import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";
import { IPagedQueryReturn } from "@shared/interfaces/IPagedQueryReturn";
import { notExistsMessage } from "@shared/messages";
import { getRepository, Repository } from "typeorm";

import { TvShow } from "../entities/TvShow";
import { ITvShowRepository } from "./ITvShowRepository";
import { Episode } from "@modules/episodes/entities/Episode";

class TvShowRepository implements ITvShowRepository {
  private repository: Repository<TvShow>;
  private episodeRepository: Repository<Episode>;

  constructor() {
    this.repository = getRepository(TvShow);
    this.episodeRepository = getRepository(Episode);
  }

  async getAll({
    page,
    take,
  }: IPagedQueryRequest): Promise<IPagedQueryReturn<TvShow>> {
    const [tvShows, count] = await this.repository.findAndCount({
      take: take,
      skip: page * take,
    });

    return {
      list: tvShows,
      count,
    };
  }

  async getOne(id: number): Promise<TvShow | undefined> {
    const tvShow = await this.findById(id);

    if (!tvShow) {
      throw new AppError(notExistsMessage("TvShow"));
    }

    return tvShow;
  }

  /*
  // Private methods
  */

  private async findById(id: number): Promise<TvShow | undefined> {
    const tvShow = await this.repository.findOne({
      where: { id },
    });

    let tvShowResult: TvShow | undefined;
    if (tvShow) {
      const episodes = await this.episodeRepository.find({
        where: { tv_show_id: id },
      });
      tvShowResult = {
        ...tvShow,
        episodes: episodes,
      };
    }

    return tvShowResult;
  }
}

export { TvShowRepository };
