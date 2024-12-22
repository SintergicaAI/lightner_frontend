// src/domain/interfaces/IServiceRepository.ts
import { Service } from "../models/Service.ts";

export interface IServiceRepository {
    save(user: Service): Promise<Service>;
}