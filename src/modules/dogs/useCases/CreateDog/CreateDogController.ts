import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDogUseCase } from "./CreateDogUseCase";

class CreateDogController {
  async handle(request: Request, response: Response) {
    const {
      name,
      commercialTypeId,
      dogSizeId,
      raceId,
      birthDate,
      sex,
      status,
      description,
      photo,
      price,
    } = request.body;
    try {
      const dogUseCase = container.resolve(CreateDogUseCase);
      const dog = await dogUseCase.execute({
        name,
        commercialTypeId,
        dogSizeId,
        raceId,
        birthDate,
        sex,
        status,
        description,
        photo,
        price,
      });
      return response.json({ data: dog });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { CreateDogController };
