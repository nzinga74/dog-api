import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListClientUseCase } from "./ListClientUseCase";

class ListClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      let { eligibility } = request.query;
      const eligible = parseInt(eligibility as any) == 0 ? false : true;

      const listClientUseCase = container.resolve(ListClientUseCase);
      const clients = await listClientUseCase.execute(eligible);
      return response.status(200).json({ data: clients });
    } catch (error) {
      //@ts-ignore
      return response.status(400).json({ message: error.message });
    }
  }
}

export { ListClientController };
