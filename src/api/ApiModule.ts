import { Module } from "@nestjs/common"
import { HealthController } from "./HealthController"
import { ConfigurationModule } from "../ConfigurationModule"
import { GovDataModule } from "../data-client/GovDataModule"
import { ProvincesController } from "./ProvincesController"
import { CasesController } from "./CasesController"
import { ProvinceModule } from "../db/entities/province/ProvinceModule"

@Module({
    imports: [ConfigurationModule, GovDataModule, ProvinceModule],
    providers: [],
    controllers: [
        HealthController,
        ProvincesController,
        CasesController,
    ],
})
export class ApiModule {}
