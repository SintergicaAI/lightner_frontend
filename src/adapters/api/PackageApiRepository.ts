
import {Package} from "../../domain/models/Package.ts";
import {IPackageRepository} from "../../domain/interfaces/IPackageRepository.ts";

export class PackageApiRepository implements IPackageRepository {
    async save(_package: Package): Promise<Package> {
        const response = await fetch("/api/services", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: _package.name,
                iport: _package.internalPort,
                eport: _package.externalPort
            }),
        });

        if (!response.ok) throw new Error("Error al guardar servicio.");

        const data = await response.json();
        return new Package(data.name, data.iport, data.eport);
    }
}