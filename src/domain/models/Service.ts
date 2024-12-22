// src/domain/models/Service.ts
export class Service {
    constructor(public image: string, public tag: string, public iport: number, public eport: number) {}

    validate(): void {
        if (!this.image.includes(":")) throw new Error("La imagen debe tener el formato: <nombre_imagen>:<tag>");
    }
}