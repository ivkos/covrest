import axios from "axios"
import { Injectable } from "@nestjs/common"

@Injectable()
export class GovDataClient {
    static readonly BASE_URL = "https://data.egov.bg"

    async getResourceMetadata(resourceUri: string): Promise<ResourceObject> {
        const response = await axios
            .post<ResponseDto<ResourceDto>>(
                `${GovDataClient.BASE_URL}/api/getResourceMetadata`,
                { resource_uri: resourceUri },
            )

        if (!response.data.success) {
            throw new Error("Could not get metadata")
        }

        return response.data.resource
    }

    async getResourceData(resourceUri: string, version: string): Promise<ResourceData> {
        const response = await axios
            .post<ResponseDto<ResourceDataDto>>(
                `${GovDataClient.BASE_URL}/api/getResourceData`,
                { resource_uri: resourceUri, version: version },
            )

        if (!response.data.success) {
            throw new Error("Could not get data")
        }

        if (response.data.data === undefined) {
            throw new Error(`Resource '${resourceUri}' or version '${version}' has no data`)
        }

        return response.data.data
    }
}

export type ResourceDataDto = {
    data: ResourceData
}

export type ResourceData = string[][]

export type ResourceObject = {
    id: number,
    uri: string,
    dataset_uri: string,
    name: string,
    description: string,
    locale: string,
    version: string,
    file_format: string,
    created_at: string,
    updated_at: string,
    versions_list: string[],
}

export type ResourceDto = {
    resource: ResourceObject
}

export type ResponseDto<T> =
    ErrorResponseDto |
    SuccessResponseDto<T>

export type ErrorResponseDto = {
    success: false,
    status: number,
    errors: { [prop: string]: string[] },
    error: {
        type: string,
        message: string,
    }
}

export type SuccessResponseDto<T> = {
    success: true,
} & T
