
import {Service} from "../../domain/models/Service.ts";
import {IServiceRepository} from "../../domain/interfaces/IServiceRepository.ts";

export class ServiceApiRepository implements IServiceRepository {
    async save(service: Service): Promise<Service> {
        const response = await fetch("/api/services", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                image: service.image,
                tag: service.tag,
                iport: service.iport,
                eport: service.eport
            }),
        });

        if (!response.ok) throw new Error("Error al guardar servicio.");

        const data = await response.json();
        return new Service(data.image, data.tag, data.iport, data.eport);
    }
}