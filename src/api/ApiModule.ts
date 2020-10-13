import { Module } from "@nestjs/common"
import { HealthController } from "./HealthController"
import { ConfigurationModule } from "../ConfigurationModule"
import { GovDataModule } from "../data-client/GovDataModule"
import { ProvincesController } from "./ProvincesController"
import { CasesController } from "./CasesController"

@Module({
    imports: [ConfigurationModule, GovDataModule],
    providers: [],
    controllers: [
        HealthController,
        ProvincesController,
        CasesController,
    ],
})
export class ApiModule {}
