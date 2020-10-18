import { MigrationInterface, QueryRunner } from "typeorm"

export class ProvinceLocations1602954417776 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table province_locations
            (
                province character varying(3),
                location point,
                geohash  character varying(12)
            );

            INSERT INTO province_locations(province, location, geohash) VALUES('BLG', point(42.012690, 23.094168), 'sx2rj80ttj5c');
            INSERT INTO province_locations(province, location, geohash) VALUES('BGS', point(42.510470, 27.462434), 'sxe9bfv93jfz');
            INSERT INTO province_locations(province, location, geohash) VALUES('VAR', point(43.212763, 27.920928), 'sxevg6eksfbu');
            INSERT INTO province_locations(province, location, geohash) VALUES('VTR', point(43.076291, 25.621790), 'sxdjp1c1wfxk');
            INSERT INTO province_locations(province, location, geohash) VALUES('VID', point(43.993834, 22.872967), 'sxb622zddv06');
            INSERT INTO province_locations(province, location, geohash) VALUES('VRC', point(43.208158, 23.552675), 'sx8tzcy9c07q');
            INSERT INTO province_locations(province, location, geohash) VALUES('GAB', point(42.876383, 25.321563), 'sxd5bjqt51jg');
            INSERT INTO province_locations(province, location, geohash) VALUES('DOB', point(43.569975, 27.828176), 'sxezc5xve2pb');
            INSERT INTO province_locations(province, location, geohash) VALUES('KRZ', point(41.634703, 25.378441), 'sx6hce258x1j');
            INSERT INTO province_locations(province, location, geohash) VALUES('KNL', point(42.287325, 22.694889), 'sx80s6jvt0xz');
            INSERT INTO province_locations(province, location, geohash) VALUES('LOV', point(43.146884, 24.712100), 'sx9t6qducdjk');
            INSERT INTO province_locations(province, location, geohash) VALUES('MON', point(43.412825, 23.230492), 'sx8wbx5fj9nk');
            INSERT INTO province_locations(province, location, geohash) VALUES('PAZ', point(42.190378, 24.334375), 'sx9218xbb03p');
            INSERT INTO province_locations(province, location, geohash) VALUES('PER', point(42.605506, 23.069106), 'sx86kun7j1un');
            INSERT INTO province_locations(province, location, geohash) VALUES('PVN', point(43.409762, 24.618558), 'sx9wbnw8jypk');
            INSERT INTO province_locations(province, location, geohash) VALUES('PDV', point(42.144817, 24.747698), 'sx3xg0hxr5m1');
            INSERT INTO province_locations(province, location, geohash) VALUES('RAZ', point(43.531704, 26.529647), 'sxdzeswq99f9');
            INSERT INTO province_locations(province, location, geohash) VALUES('RSE', point(43.842701, 25.969985), 'sxf3qvqf0xb6');
            INSERT INTO province_locations(province, location, geohash) VALUES('SLS', point(44.116413, 27.265240), 'sxg6urjuwpkq');
            INSERT INTO province_locations(province, location, geohash) VALUES('SLV', point(42.678555, 26.341473), 'sxddz3mk8g3c');
            INSERT INTO province_locations(province, location, geohash) VALUES('SML', point(41.575893, 24.715253), 'sx3sd2tj5hhq');
            INSERT INTO province_locations(province, location, geohash) VALUES('SFO', point(42.779421, 23.534382), 'sx8erec0ny54');
            INSERT INTO province_locations(province, location, geohash) VALUES('SOF', point(42.697727, 23.321877), 'sx8dfsykr15y');
            INSERT INTO province_locations(province, location, geohash) VALUES('SZR', point(42.426077, 25.633485), 'sxd1r73tz3zz');
            INSERT INTO province_locations(province, location, geohash) VALUES('TGV', point(43.250434, 26.572454), 'sxdyh9t2p13b');
            INSERT INTO province_locations(province, location, geohash) VALUES('HKV', point(41.931724, 25.555151), 'sx6nt92typvs');
            INSERT INTO province_locations(province, location, geohash) VALUES('SHU', point(43.270406, 26.939584), 'sxenjj0u3u3c');
            INSERT INTO province_locations(province, location, geohash) VALUES('JAM', point(42.485244, 26.507064), 'sxdcenjy7re2');

        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("province_locations")
    }

}
