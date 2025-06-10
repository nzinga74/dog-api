import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAdoptionUseCase } from "./ListAdoptionUseCase";


class ListAdoptionController {
  async handle(request: Request, response: Response) {
    try {
      const { dogId, clientId, userId } = request.query;

      const adoptionListUseCase = container.resolve(ListAdoptionUseCase);

      const dogs = await adoptionListUseCase.execute({
        dogId: dogId ? Number(dogId) : undefined,
        clientId: clientId ? Number(clientId) : undefined,
        userId: userId ? Number(userId) : undefined,
      });

      return response.json({ data: dogs });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { ListAdoptionController };
