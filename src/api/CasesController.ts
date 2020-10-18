import { Controller, Get, Post } from "@nestjs/common"
import { CovidCasesService } from "../db/entities/covid-cases/CovidCasesService"

@Controller()
export class CasesController {
    constructor(private readonly covidCasesService: CovidCasesService) {}

    @Get("/v1/cases")
    async getCases() {
        return await this.covidCasesService.findAll()
    }

    @Post("/v1/cases/update")
    async updateCases() {
        await this.covidCasesService.updateCases()
        return { status: "ok" }
    }
}
