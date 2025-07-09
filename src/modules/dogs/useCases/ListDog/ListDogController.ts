import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListDogUseCase } from "./ListDogUseCase";
import { DogSex } from "@prisma/client";
import { DogStatus } from "@modules/dogs/models/Dog";

class ListDogController {
  async handle(request: Request, response: Response) {
    try {
      const {
        commercialTypeId,
        dogSizeId,
        maxPrice,
        minPrice,
        raceId,
        sex,
        status,
      } = request.query;

      const dogListUseCase = container.resolve(ListDogUseCase);

      const dogs = await dogListUseCase.execute({
        commercialTypeId: commercialTypeId
          ? Number(commercialTypeId)
          : undefined,
        dogSizeId: dogSizeId ? Number(dogSizeId) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined,
        minPrice: minPrice ? Number(minPrice) : undefined,
        raceId: raceId ? Number(raceId) : undefined,
        sex: sex ? (sex as DogSex) : undefined,
        status: status ? Number(status) : DogStatus.Disponivel,
      });
      const baseUrl = process.env.APP_URL || "http://localhost:3333";
      const dogsWithPhotoUrl = dogs.map(dog => ({
        ...dog,
        photo: dog.photo ? `${baseUrl}/files/${dog.photo}` : null
      }));

      console.log("Dogs found:", dogs.length);

      return response.json({ data: dogsWithPhotoUrl });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { ListDogController };
