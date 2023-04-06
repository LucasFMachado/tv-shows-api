import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateFavoriteService } from "./CreateFavoriteService";

class CreateFavoriteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tv_show_id } = request.params;

    const createFavoriteService = container.resolve(CreateFavoriteService);

    const favorite = await createFavoriteService.execute(+tv_show_id);

    return response.status(200).json(favorite);
  }
}

export { CreateFavoriteController };
