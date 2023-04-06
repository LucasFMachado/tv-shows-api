import { inject, injectable } from "tsyringe";

import { TvShow } from "../../entities/TvShow";
import { ITvShowRepository } from "../../repositories/ITvShowRepository";

@injectable()
class GetOneTvShowService {
  constructor(
    @inject("TvShowRepository")
    private tvShowRepository: ITvShowRepository
  ) {}

  async execute(id: number): Promise<TvShow | undefined> {
    const tvShow = await this.tvShowRepository.getOne(id);
    return tvShow;
  }
}

export { GetOneTvShowService };
