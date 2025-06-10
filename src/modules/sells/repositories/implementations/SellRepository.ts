import { ISellRepository } from "../ISellRepository";
import { prismaClient } from "database";
import { IListSell } from "@modules/sells/dtos/IListSells";
import { ICreateSell } from "@modules/sells/dtos/ICreateSell";
import { Sell } from "@modules/sells/models/Sell";

class SellRepository implements ISellRepository {
  async list({ clientId, dogId, userId }: IListSell): Promise<Sell[]> {
    return await prismaClient.sell.findMany({
      where: {
        clientId,
        dogId,
        userId,
      },
    });
  }
  async create({
    clientId,
    dogId,
    paymentMethodId,
    price,
    userId,
  }: ICreateSell): Promise<Sell> {
    return await prismaClient.sell.create({
      data: {
        clientId,
        dogId,
        paymentMethodId,
        price,
        userId,
      },
    });
  }
}

export { SellRepository };
