import { Controller, Get } from "@nestjs/common"
import { GovDataService } from "../data-client/GovDataService"

@Controller()
export class CasesController {
    constructor(private readonly service: GovDataService) {}

    @Get("/v1/cases/by-province")
    async getCasesByProvince() {
        return this.service.getCasesByProvince()
    }
}
