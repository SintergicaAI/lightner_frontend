// src/domain/use_cases/RegisterUser.ts
import { IUserRepository } from "../interfaces/IUserRepository";
import { User } from "../models/User";

export class RegisterUser {
    constructor(private userRepository: IUserRepository) {}

    async execute(email: string, password: string): Promise<User> {
        const user = new User(email, password);

        user.validate();
        
        return await this.userRepository.save(user);
    }
}