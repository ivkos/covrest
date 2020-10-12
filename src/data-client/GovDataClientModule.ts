import { Module } from "@nestjs/common"
import { GovDataClient } from "./GovDataClient"

@Module({
    imports: [],
    providers: [GovDataClient],
    exports: [GovDataClient],
})
export class GovDataClientModule {}
