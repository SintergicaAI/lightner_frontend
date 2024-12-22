// src/domain/interfaces/IUserRepository.ts
import { User } from "../models/User";

export interface IUserRepository {
    save(user: User): Promise<User>;
}