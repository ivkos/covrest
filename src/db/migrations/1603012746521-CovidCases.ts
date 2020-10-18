import { MigrationInterface, QueryRunner } from "typeorm"

export class CovidCases1603012746521 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table covid_cases
            (
                stats_date   date,
                province     character varying(3)
                    constraint covid_cases_provinces_ekatte_code_fk
                        references provinces
                        on update cascade on delete cascade,
                active_cases int,
                total_cases  int,
                created_at   timestamp with time zone not null default now(),
                updated_at   timestamp with time zone not null default now()
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("covid_cases")
    }
}
