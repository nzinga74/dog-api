import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListRaceUseCase } from "./ListRaceUseCase";

class ListRaceController {
  async handle(request: Request, response: Response) {
    try {
      const listRaceUseCase = container.resolve(ListRaceUseCase);
      const races = await listRaceUseCase.execute();
      return response.json({ data: races });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { ListRaceController };