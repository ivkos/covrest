import { Column, Entity } from "typeorm"

@Entity({ name: "provinces" })
export class Province {
    @Column({ name: "ekatte_code", primary: true })
    ekatteCode: string

    @Column({ name: "name" })
    name: string

    static create(code: string): Province {
        const entity = new Province()
        entity.ekatteCode = code
        return entity
    }
}
