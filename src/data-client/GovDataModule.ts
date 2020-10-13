import { Module } from "@nestjs/common"
import { GovDataClient } from "./GovDataClient"
import { GovDataService } from "./GovDataService"
import { ProvinceDataTransformer } from "./transformers/ProvinceDataTransformer"

@Module({
    imports: [],
    providers: [GovDataClient, GovDataService, ProvinceDataTransformer],
    exports: [GovDataClient, GovDataService],
})
export class GovDataModule {}
