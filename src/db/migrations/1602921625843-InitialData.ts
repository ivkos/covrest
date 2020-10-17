import { MigrationInterface, QueryRunner } from "typeorm"
import * as fs from "fs"
import * as path from "path"

export class InitialData1602921625843 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(await fs.promises.readFile(path.join(__dirname, "initial-data", "age_structure.sql"), { encoding: "utf-8" }))
        await queryRunner.query(await fs.promises.readFile(path.join(__dirname, "initial-data", "deaths.sql"), { encoding: "utf-8" }))
        await queryRunner.query(await fs.promises.readFile(path.join(__dirname, "initial-data", "population.sql"), { encoding: "utf-8" }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`TRUNCATE TABLE public.age_structure`)
        await queryRunner.query(`TRUNCATE TABLE public.deaths`)
        await queryRunner.query(`TRUNCATE TABLE public.population`)
    }
}
