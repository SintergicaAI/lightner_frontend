import {describe, expect, it} from "vitest";
import {User} from "../../../../src/domain/models/User";

describe("User class", () => {
    it("should create a User instance with valid email and password", () => {
        const user = new User("test@example.com", "securePass");
        expect(user.email).toBe("test@example.com");
        expect(user.password).toBe("securePass");
    });

    it("should throw an error if the email is invalid", () => {
        const user = new User("invalid-email", "securePass");
        expect(() => user.validate()).toThrowError("Email inválido.");
    });

    it("should throw an error if the password is less than 6 characters", () => {
        const user = new User("test@example.com", "12345");
        expect(() => user.validate()).toThrowError(
            "La contraseña debe tener al menos 6 caracteres."
        );
    });

    it("should not throw an error for a valid email and password", () => {
        const user = new User("valid@example.com", "validPass");
        expect(() => user.validate()).not.toThrow();
    });
});