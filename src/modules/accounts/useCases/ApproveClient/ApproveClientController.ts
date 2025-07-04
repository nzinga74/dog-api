import { Request, Response } from "express";
import { container } from "tsyringe";
import { ApproveClientUseCase } from "./ApproveClientUseCase";

class ApproveClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { clientId, eligibility } = request.body;
      const approveClientUseCase = container.resolve(ApproveClientUseCase);
      const client = await approveClientUseCase.execute(clientId, eligibility);
      return response.status(200).json({ data: client });
    } catch (error) {
      //@ts-ignore
      return response.status(400).json({ message: error.message });
    }
  }
}

export { ApproveClientController };
