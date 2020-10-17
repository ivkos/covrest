import { MigrationInterface, QueryRunner } from "typeorm"

export class AgeGroups1602926452862 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        async function migrateTable(tableName: string) {
            await queryRunner.query(`
                alter table ${tableName}
                    add age_group_low int;
                alter table ${tableName}
                    add age_group_high int;

                UPDATE ${tableName}
                SET age_group_low  = (SELECT (regexp_match(age_group, '(\\d+)(?:\\s*-\\s*(\\d+))?'))[1]::int),
                    age_group_high = (SELECT (regexp_match(age_group, '(\\d+)(?:\\s*-\\s*(\\d+))?'))[2]::int);

                UPDATE ${tableName}
                SET age_group_high = 0
                WHERE age_group_low = 0
                  AND age_group_high IS NULL;
            `)
        }


        await migrateTable("age_structure")
        await migrateTable("deaths")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("age_structure", "age_group_low")
        await queryRunner.dropColumn("age_structure", "age_group_high")
        await queryRunner.dropColumn("deaths", "age_group_low")
        await queryRunner.dropColumn("deaths", "age_group_high")
    }
}
