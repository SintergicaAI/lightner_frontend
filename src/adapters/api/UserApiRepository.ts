// src/adapters/api/UserApiRepository.ts
import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { User } from "../../domain/models/User";
import {HttpClient} from "./HttpClient.ts";

export class UserApiRepository implements IUserRepository {
    async save(user: User): Promise<User> {

        try {
            const response = await new HttpClient().post(
                "/users",
                {email: user.email, password: user.password}
            )
            return new User(response.email, response.password);
        } catch (error: any) {
            return new User("", "");
        }
    }
}