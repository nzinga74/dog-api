// src/modules/dogs/useCases/updateDog/UpdateDogController.ts
import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateDogUseCase } from "./UpdateDogUseCase";

class UpdateDogController {
  async handle(request: Request, response: Response) {
    const {
      id,
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

    const photo = request.file?.filename ?? undefined;

    try {
      const updateDogUseCase = container.resolve(UpdateDogUseCase);
      const dog = await updateDogUseCase.execute({
        id: Number(id),
        name,
        commercialTypeId: commercialTypeId
          ? Number(commercialTypeId)
          : undefined,
        dogSizeId: dogSizeId ? Number(dogSizeId) : undefined,
        raceId: raceId ? Number(raceId) : undefined,
        birthDate,
        sex,
        status: status ? Number(status) : undefined,
        description,
        photo,
        price,
      });

      return response.status(200).json({ data: dog });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { UpdateDogController };
