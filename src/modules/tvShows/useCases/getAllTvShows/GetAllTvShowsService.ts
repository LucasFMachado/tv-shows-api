import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";
import { IPagedQueryReturn } from "@shared/interfaces/IPagedQueryReturn";
import { inject, injectable } from "tsyringe";

import { TvShow } from "../../entities/TvShow";
import { ITvShowRepository } from "../../repositories/ITvShowRepository";

@injectable()
class GetAllTvShowsService {
  constructor(
    @inject("TvShowRepository")
    private tvShowRepository: ITvShowRepository
  ) {}

  async execute({
    page,
    take,
  }: IPagedQueryRequest): Promise<IPagedQueryReturn<TvShow>> {
    const tvShows = await this.tvShowRepository.getAll({ page, take });
    return tvShows;
  }
}

export { GetAllTvShowsService };
