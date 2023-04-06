import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllTvShowsService } from "./GetAllTvShowsService";

class GetAllTvShowsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page, take } = request.query;

    const getAllTvShowsService = container.resolve(GetAllTvShowsService);

    const categories = await getAllTvShowsService.execute({
      page: Number(page) || 0,
      take: Number(take) || 10,
    });

    return response.status(200).json(categories);
  }
}

export { GetAllTvShowsController };
