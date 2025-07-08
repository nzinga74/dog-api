import { Race } from "../models/race";

interface IRaceRepository {
    findAll(): Promise<Race[]>;
}
export { IRaceRepository };
