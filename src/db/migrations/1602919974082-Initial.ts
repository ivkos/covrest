import { MigrationInterface, QueryRunner } from "typeorm"

export class Initial1602919974082 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table age_structure
            (
                province             text,
                age_group            text,
                total                integer,
                total_men            integer,
                total_women          integer,
                total_cities         integer,
                total_cities_men     integer,
                total_cities_women   integer,
                total_villages       integer,
                total_villages_men   integer,
                total_villages_women integer,
                stats_date           date
            );
        `)
        await queryRunner.query(`
            create table deaths
            (
                province             text,
                age_group            text,
                total                integer,
                total_men            integer,
                total_women          integer,
                total_cities         integer,
                total_cities_men     integer,
                total_cities_women   integer,
                total_villages       integer,
                total_villages_men   integer,
                total_villages_women integer,
                stats_date           date
            );
        `)
        await queryRunner.query(`
            create table population
            (
                province             text,
                total                integer,
                total_men            integer,
                total_women          integer,
                total_cities         integer,
                total_cities_men     integer,
                total_cities_women   integer,
                total_villages       integer,
                total_villages_men   integer,
                total_villages_women integer,
                stats_date           date
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("age_structure")
        await queryRunner.dropTable("deaths")
        await queryRunner.dropTable("population")
    }
}
