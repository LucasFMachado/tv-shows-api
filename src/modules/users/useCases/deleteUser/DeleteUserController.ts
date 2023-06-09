import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserService } from "./DeleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserService = container.resolve(DeleteUserService);

    const user = await deleteUserService.execute(+id);

    return response.status(200).json(user);
  }
}

export { DeleteUserController };
