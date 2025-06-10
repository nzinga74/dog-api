import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSellUseCase } from "./ListSellUseCase";

class ListSellController {
  async handle(request: Request, response: Response) {
    try {
      const { dogId, clientId, userId } = request.query;

      const sellListUseCase = container.resolve(ListSellUseCase);

      const dogs = await sellListUseCase.execute({
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

export { ListSellController };
