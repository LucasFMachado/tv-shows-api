import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteFavoriteService } from "./DeleteFavoriteService";

class DeleteFavoriteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tv_show_id } = request.params;

    const deleteFavoriteService = container.resolve(DeleteFavoriteService);

    const favorite = await deleteFavoriteService.execute(+tv_show_id);

    return response.status(200).json(favorite);
  }
}

export { DeleteFavoriteController };
