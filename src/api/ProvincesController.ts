import { Controller, Get } from "@nestjs/common"
import { Province } from "../data-client/transformers/Province"

@Controller()
export class ProvincesController {
    @Get("/v1/provinces")
    async getProvinces(): Promise<typeof Province> {
        return Province
    }
}
