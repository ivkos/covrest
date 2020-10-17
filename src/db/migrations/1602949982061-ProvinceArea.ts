import {MigrationInterface, QueryRunner} from "typeorm";

export class ProvinceArea1602949982061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table province_area
            (
                province character varying(3)
                    constraint province_area_provinces_ekatte_code_fk
                        references provinces
                        on update cascade on delete cascade,
                area_km2     int
            );

            INSERT INTO public.province_area(province, area_km2) VALUES('BLG', 6449);
            INSERT INTO public.province_area(province, area_km2) VALUES('BGS', 7748);
            INSERT INTO public.province_area(province, area_km2) VALUES('VAR', 3819);
            INSERT INTO public.province_area(province, area_km2) VALUES('VTR', 4662);
            INSERT INTO public.province_area(province, area_km2) VALUES('VID', 3033);
            INSERT INTO public.province_area(province, area_km2) VALUES('VRC', 3620);
            INSERT INTO public.province_area(province, area_km2) VALUES('GAB', 2023);
            INSERT INTO public.province_area(province, area_km2) VALUES('DOB', 4720);
            INSERT INTO public.province_area(province, area_km2) VALUES('KNL', 3052);
            INSERT INTO public.province_area(province, area_km2) VALUES('KRZ', 3209);
            INSERT INTO public.province_area(province, area_km2) VALUES('LOV', 4129);
            INSERT INTO public.province_area(province, area_km2) VALUES('MON', 3636);
            INSERT INTO public.province_area(province, area_km2) VALUES('PAZ', 4457);
            INSERT INTO public.province_area(province, area_km2) VALUES('PER', 2394);
            INSERT INTO public.province_area(province, area_km2) VALUES('PVN', 4653);
            INSERT INTO public.province_area(province, area_km2) VALUES('PDV', 5973);
            INSERT INTO public.province_area(province, area_km2) VALUES('RAZ', 2488);
            INSERT INTO public.province_area(province, area_km2) VALUES('RSE', 2803);
            INSERT INTO public.province_area(province, area_km2) VALUES('SLS', 2846);
            INSERT INTO public.province_area(province, area_km2) VALUES('SLV', 3544);
            INSERT INTO public.province_area(province, area_km2) VALUES('SML', 3193);
            INSERT INTO public.province_area(province, area_km2) VALUES('SFO', 7062);
            INSERT INTO public.province_area(province, area_km2) VALUES('SOF', 1341);
            INSERT INTO public.province_area(province, area_km2) VALUES('SZR', 5151);
            INSERT INTO public.province_area(province, area_km2) VALUES('TGV', 2710);
            INSERT INTO public.province_area(province, area_km2) VALUES('SHU', 5533);
            INSERT INTO public.province_area(province, area_km2) VALUES('HKV', 3390);
            INSERT INTO public.province_area(province, area_km2) VALUES('JAM', 3355);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("province_area")
    }

}
