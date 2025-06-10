import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteDogUseCase } from "./DeleteDogUseCase";

class DeleteDogController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const dogId = parseInt(id);
      const dogUseCase = container.resolve(DeleteDogUseCase);
      const dog = await dogUseCase.execute(dogId);
      return response.json({ data: dog });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { DeleteDogController };
