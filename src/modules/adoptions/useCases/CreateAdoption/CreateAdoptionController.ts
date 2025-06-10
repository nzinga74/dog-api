import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAdoptionUseCase } from "./CreateAdoptionUseCase";

class CreateAdoptionController {
  async handle(request: Request, response: Response) {
    const { dogId, clientId, userId, acceptedTerm } = request.body;
    try {
      const dogUseCase = container.resolve(CreateAdoptionUseCase);
      const dog = await dogUseCase.execute({
        dogId,
        clientId,
        userId,
        acceptedTerm,
      });
      return response.json({ data: dog });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { CreateAdoptionController };
