import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";
import { IPagedQueryReturn } from "@shared/interfaces/IPagedQueryReturn";

import { TvShow } from "../entities/TvShow";

interface ITvShowRepository {
  getAll(data: IPagedQueryRequest): Promise<IPagedQueryReturn<TvShow>>;
  getOne(id: number): Promise<TvShow | undefined>;
}

export { ITvShowRepository };
