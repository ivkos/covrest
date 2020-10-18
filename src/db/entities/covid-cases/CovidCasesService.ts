import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { CovidCases } from "./CovidCases"
import { InjectRepository } from "@nestjs/typeorm"
import { Province } from "../province/Province"
import { ProvinceDataPoint } from "../../../data-client/transformers/ProvinceDataTransformer"
import { GovDataService } from "../../../data-client/GovDataService"
import { ProvinceService } from "../province/ProvinceService"

@Injectable()
export class CovidCasesService {
    constructor(@InjectRepository(CovidCases) private readonly covidCasesRepository: Repository<CovidCases>,
                private readonly provinceService: ProvinceService,
                private readonly govDataService: GovDataService) {}

    async findAll(): Promise<CovidCases[]> {
        return await this.covidCasesRepository.find()
    }

    async fromDataPoint(point: ProvinceDataPoint, provinceCodes?: string[]): Promise<CovidCases[]> {
        if (provinceCodes === undefined) {
            provinceCodes = await this.provinceService.getProvinceCodes()
        }

        const result = []

        for (const code of provinceCodes) {
            const provinceObj = point[code]
            if (provinceObj !== undefined) {
                const cc = new CovidCases()
                cc.statsDate = point.date
                cc.province = Province.create(code)
                cc.activeCases = provinceObj.active
                cc.totalCases = provinceObj.total
                result.push(cc)
            }
        }

        return result
    }

    async updateCases() {
        const casesByProvince = await this.govDataService.getCasesByProvince()

        const provinceCodes = await this.provinceService.getProvinceCodes()
        const allCases = (await Promise.all(
            casesByProvince.map(async c => await this.fromDataPoint(c, provinceCodes)),
        )).flat()

        await this.covidCasesRepository.manager.transaction(async manager => {
            const repo = manager.getRepository(CovidCases)
            await repo.delete({})
            await repo.save(allCases)
        })
    }
}
