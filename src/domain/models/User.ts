// src/domain/models/User.ts
export class User {
    constructor(public email: string, public password: string) {}

    validate(): void {
        if (!this.email.includes("@")) throw new Error("Email inválido.");
        if (this.password.length < 6) throw new Error("La contraseña debe tener al menos 6 caracteres.");
    }
}