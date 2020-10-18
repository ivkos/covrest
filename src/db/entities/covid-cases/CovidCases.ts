import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, UpdateDateColumn } from "typeorm"
import { Province } from "../province/Province"

@Entity({ name: "covid_cases" })
export class CovidCases {
    @Column({ name: "stats_date", primary: true, type: "date" })
    statsDate: string

    @ManyToOne(
        type => Province,
        p => p.ekatteCode,
        { primary: true, eager: true, persistence: false })
    @JoinColumn({ name: "province", referencedColumnName: "ekatteCode" })
    province: Province

    @Column({ name: "active_cases" })
    activeCases: number

    @Column({ name: "total_cases" })
    totalCases: number

    @CreateDateColumn({
        name: "created_at",
        type: "timestamp with time zone",
        nullable: false,
        update: false,
    })
    createdAt: Date

    @UpdateDateColumn({
        name: "updated_at",
        type: "timestamp with time zone",
        nullable: false,
        update: false,
    })
    updatedAt: Date
}
