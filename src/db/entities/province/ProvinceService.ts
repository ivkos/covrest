import { Repository } from "typeorm"
import { Province } from "./Province"
import { InjectRepository } from "@nestjs/typeorm"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ProvinceService {
    constructor(@InjectRepository(Province) private readonly provinceRepository: Repository<Province>) {}

    async findAll(): Promise<Province[]> {
        return this.provinceRepository.find()
    }
}
