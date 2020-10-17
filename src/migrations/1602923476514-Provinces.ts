import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Provinces1602923476514 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table provinces
            (
                ekatte_code character varying(3) primary key,
                name        character varying
            );

            create unique index provinces_name_uindex on provinces (name);
        `)

        await queryRunner.query(`
            INSERT INTO public.provinces (ekatte_code, name) VALUES('BLG', 'Благоевград');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('BGS', 'Бургас');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('VAR', 'Варна');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('VTR', 'Велико Търново');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('VID', 'Видин');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('VRC', 'Враца');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('GAB', 'Габрово');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('DOB', 'Добрич');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('KRZ', 'Кърджали');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('KNL', 'Кюстендил');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('LOV', 'Ловеч');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('MON', 'Монтана');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('PAZ', 'Пазарджик');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('PER', 'Перник');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('PVN', 'Плевен');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('PDV', 'Пловдив');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('RAZ', 'Разград');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('RSE', 'Русе');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('SLS', 'Силистра');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('SLV', 'Сливен');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('SML', 'Смолян');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('SFO', 'София');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('SOF', 'София (столица)');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('SZR', 'Стара Загора');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('TGV', 'Търговище');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('HKV', 'Хасково');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('SHU', 'Шумен');
            INSERT INTO public.provinces (ekatte_code, name) VALUES('JAM', 'Ямбол');
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("provinces")
    }
}
