import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Province } from "./Province"
import { ProvinceService } from "./ProvinceService"

@Module({
    imports: [TypeOrmModule.forFeature([Province])],
    providers: [ProvinceService],
    exports: [ProvinceService],
})
export class ProvinceModule {}
