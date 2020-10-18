import { Module } from "@nestjs/common"
import { HealthController } from "./HealthController"
import { ConfigurationModule } from "../ConfigurationModule"
import { ProvincesController } from "./ProvincesController"
import { CasesController } from "./CasesController"
import { ProvinceModule } from "../db/entities/province/ProvinceModule"
import { CovidCasesModule } from "../db/entities/covid-cases/CovidCasesModule"

@Module({
    imports: [ConfigurationModule, ProvinceModule, CovidCasesModule],
    providers: [],
    controllers: [
        HealthController,
        ProvincesController,
        CasesController,
    ],
})
export class ApiModule {}
