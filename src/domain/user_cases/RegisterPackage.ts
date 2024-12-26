// src/domain/use_cases/RegisterUser.ts


import {IPackageRepository} from "../interfaces/IPackageRepository.ts";
import {Package} from "../models/Package.ts";

export class RegisterPackage {
    constructor(private packageRepository: IPackageRepository) {}

    async execute(name: string, internalPort: number, externalPort: number): Promise<Package> {

        const _package = new Package(name, internalPort, externalPort);
        _package.addTag("1.0")
        _package.addTag("1.1")

        _package.validate();

        return await this.packageRepository.save(_package);
    }
}