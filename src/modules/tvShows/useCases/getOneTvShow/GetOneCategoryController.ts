import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetOneTvShowService } from "./GetOneTvShowService";

class GetOneTvShowController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getOneTvShowService = container.resolve(GetOneTvShowService);

    const tvShow = await getOneTvShowService.execute(+id);

    return response.status(200).json(tvShow);
  }
}

export { GetOneTvShowController };
