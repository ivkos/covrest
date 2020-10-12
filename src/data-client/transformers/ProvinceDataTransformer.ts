import { Province } from "./Province"
import * as _ from "lodash"

export class ProvinceDataTransformer {
    transform(csv: string[][]): ProvinceDataPoint[] {
        const indexes: { provinceKey: string, type: "ALL" | "ACT" }[] = []

        const header = csv[0]
        // Go through header fields, skipping first one (date)
        for (let i = 1; i < header.length; i++) {
            const matches = header[i].match(/([A-Z]{3})_(ALL|ACT)/)
            if (matches === null) throw new Error(`Unexpected format: '${header[i]}'`)

            indexes[i] = { provinceKey: matches[1], type: matches[2] as "ALL" | "ACT" }
        }

        const result = []

        // Go through actual data points after header
        for (let i = 1; i < csv.length; i++) {
            const point: Partial<ProvinceDataPoint> = {}

            const date = csv[i][0]
            if (date.match(/\d{4}\/\d{2}\/\d{2}/) === null) {
                throw new Error(`Invalid date format: '${date}'`)
            }
            point.date = date.replace(/\//g, "-")

            for (let j = 1; j < csv[i].length; j++) {
                const provinceKey = indexes[j].provinceKey
                const typeKey = { "ALL": "total", "ACT": "active" }[indexes[j].type]
                _.set(point, `${provinceKey}.${typeKey}`, csv[i][j])
            }

            result.push(point)
        }

        return result
    }
}

export type ProvinceDataPointCases = { total: number, active: number }
export type ProvinceDataPoint =
    { date: string } &
    { [provinceKey in keyof typeof Province]?: ProvinceDataPointCases }
