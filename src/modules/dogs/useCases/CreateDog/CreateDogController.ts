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
      price,
    } = request.body;
    try {
      let fileName = request.file?.filename;
      const photo = fileName == undefined ? "" : fileName;

      const dogUseCase = container.resolve(CreateDogUseCase);
      const dog = await dogUseCase.execute({
        name,
        commercialTypeId: parseInt(commercialTypeId),
        dogSizeId: parseInt(dogSizeId),
        raceId: parseInt(raceId),
        birthDate,
        sex,
        status: parseInt(status),
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
