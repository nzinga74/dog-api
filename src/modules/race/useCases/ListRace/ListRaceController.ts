import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListRaceUseCase } from "./ListRaceUseCase";

class ListRaceController {
  async handle(req: Request, res: Response) {
    const listRaceUseCase = container.resolve(ListRaceUseCase);
    const races = await listRaceUseCase.execute();
    return res.json(races);
  }
}

export { ListRaceController };