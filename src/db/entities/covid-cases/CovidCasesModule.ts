import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CovidCases } from "./CovidCases"
import { Province } from "../province/Province"
import { CovidCasesService } from "./CovidCasesService"
import { ProvinceModule } from "../province/ProvinceModule"
import { GovDataModule } from "../../../data-client/GovDataModule"

@Module({
    imports: [
        ProvinceModule,
        TypeOrmModule.forFeature([Province, CovidCases]),
        GovDataModule,
    ],
    providers: [CovidCasesService],
    exports: [CovidCasesService],
})
export class CovidCasesModule {}
