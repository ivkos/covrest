import { Column, Entity } from "typeorm"

@Entity({ name: "provinces" })
export class Province {
    @Column({ name: "ekatte_code", primary: true })
    readonly ekatteCode: string

    @Column({ name: "name" })
    readonly name: string
}
