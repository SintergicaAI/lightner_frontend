export class Image {
    tags: Array<string> = [];
    constructor(
        public name: string) {
    }

    addTag(tag: string): void {
        this.tags.push(tag);
    }
}

// src/domain/models/Package.ts
export class Package {
    private tags: Array<string> = [];
    constructor(public name: string, public internalPort: number, public externalPort: number) {}

    validate(): void {
        if (!this.name) throw new Error("El nombre del paquete es obligatorio.");
        if (!this.internalPort) throw new Error("El puerto de entrada es obligatorio.");
        if (!this.externalPort) throw new Error("El puerto de salida es obligatorio.");
        if (!this.tags.every((tag: string) => { if (tag.length > 0) return true; })) throw new Error("Tag invalido");
    }

    addTag(tag: string) {
        this.tags.push(tag);
    }
}