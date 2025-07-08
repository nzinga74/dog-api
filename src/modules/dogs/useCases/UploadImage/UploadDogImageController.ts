import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadDogImageUseCase } from "./UploadDogImageUseCase";

class UploadDogImageController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const file = request.file;

    try {
      if (!file) {
        return response.status(400).json({ message: "File is required" });
      }

      const uploadDogImageUseCase = container.resolve(UploadDogImageUseCase);

      const dog = await uploadDogImageUseCase.execute({
        dogId: parseInt(id),
        photo: file.filename 
      });

      return response.json({ data: dog });
    } catch (error: any) {
      console.error(error);
      return response.status(400).json({ message: error.message });
    }
  }
}

export { UploadDogImageController };
