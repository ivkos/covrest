import { MigrationInterface, QueryRunner } from "typeorm"

export class Normalization1602924311975 implements MigrationInterface {
    private async upMigrateTable(queryRunner: QueryRunner, tableName: string) {
        await queryRunner.query(`
            UPDATE public.${tableName}
            SET province = (
                SELECT provinces.ekatte_code
                FROM provinces
                WHERE provinces.name = ${tableName}.province
            );

            alter table ${tableName}
                add constraint ${tableName}_provinces_ekatte_code_fk
                    foreign key (province) references provinces
                        on update cascade on delete cascade;
        `)
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
        await this.upMigrateTable(queryRunner, "age_structure")
        await this.upMigrateTable(queryRunner, "deaths")
        await this.upMigrateTable(queryRunner, "population")
    }

    private async downMigrateTable(queryRunner: QueryRunner, tableName: string) {
        await queryRunner.query(`
            alter table ${tableName} drop constraint ${tableName}_provinces_ekatte_code_fk;

            UPDATE public.${tableName}
            SET province = (
                SELECT provinces.name
                FROM provinces
                WHERE provinces.ekatte_code = ${tableName}.province
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await this.downMigrateTable(queryRunner, "age_structure")
        await this.downMigrateTable(queryRunner, "deaths")
        await this.downMigrateTable(queryRunner, "population")
    }
}
