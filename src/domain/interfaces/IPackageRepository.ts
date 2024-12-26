// src/domain/interfaces/IServiceRepository.ts
import { Package } from "../models/Package.ts";

export interface IPackageRepository {
    save(user: Package): Promise<Package>;

}