import { IClientRepository } from "@modules/accounts/repositories/IClientRepository";
import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { ClientRepository } from "@modules/accounts/repositories/implementations/ClientRepository";
import { UserRepository } from "@modules/accounts/repositories/implementations/UserRepository";
import { IAdoptionRepository } from "@modules/adoptions/repositories/IAdoptionRepository";
import { AdoptionRepository } from "@modules/adoptions/repositories/implementations/AdoptionRepository";
import { IDogRepository } from "@modules/dogs/repositories/IDogRepository";
import { DogRepository } from "@modules/dogs/repositories/implementations/DogRepository";
import { ISellRepository } from "@modules/sells/repositories/ISellRepository";
import { SellRepository } from "@modules/sells/repositories/implementations/SellRepository";

import { IHashProvider } from "@shared/providers/HashProvider/IHashProvider";
import { BcryptHash } from "@shared/providers/HashProvider/implementations/BcryptHash";
import { ITokenProvider } from "@shared/providers/TokenProvider/ITokenProvider";
import { JsonWebToken } from "@shared/providers/TokenProvider/implementations/JsonWebToken";
import { container } from "tsyringe";

container.registerSingleton<IClientRepository>(
  "ClientRepository",
  ClientRepository
);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IHashProvider>("HashProvider", BcryptHash);
container.registerSingleton<ITokenProvider>("TokenProvider", JsonWebToken);
container.registerSingleton<IDogRepository>("DogRepository", DogRepository);
container.registerSingleton<IAdoptionRepository>(
  "AdoptionRepository",
  AdoptionRepository
);
container.registerSingleton<ISellRepository>("SellRepository", SellRepository);
