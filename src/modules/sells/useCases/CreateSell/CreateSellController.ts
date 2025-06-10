import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSellUseCase } from "./CreateSellUseCase";

class CreateSellController {
  async handle(request: Request, response: Response) {
    const { paymentMethodId, clientId, dogId, userId } = request.body;
    try {
      const sellUseCase = container.resolve(CreateSellUseCase);
      const sell = await sellUseCase.execute({
        paymentMethodId,
        clientId,
        dogId,
        userId,
        price: 0,
      });
      return response.json({ data: sell });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { CreateSellController };
