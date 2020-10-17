import { Controller, Get } from "@nestjs/common"
import { ProvinceService } from "../db/entities/province/ProvinceService"

@Controller()
export class ProvincesController {
    constructor(private readonly provinceService: ProvinceService) {}

    @Get("/v1/provinces")
    async getProvinces() {
        return this.provinceService.findAll()
    }
}
