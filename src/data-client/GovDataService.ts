import { GovDataClient } from "./GovDataClient"
import { ProvinceDataPoint, ProvinceDataTransformer } from "./transformers/ProvinceDataTransformer"
import { Injectable } from "@nestjs/common"

@Injectable()
export class GovDataService {
    constructor(private readonly client: GovDataClient,
                private readonly provinceDataTransformer: ProvinceDataTransformer) {}

    async getCasesByProvince(): Promise<ProvinceDataPoint[]> {
        const resourceId = "cb5d7df0-3066-4d7a-b4a1-ac26525e0f0c"

        const metadata = await this.client.getResourceMetadata(resourceId)
        const latestVersion = metadata.versions_list
            .map(v => parseInt(v))
            .sort((x1, x2) => x2 - x1)
            [0]

        const data = await this.client.getResourceData(resourceId, String(latestVersion))

        return this.provinceDataTransformer.transform(data)
    }
}
