import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { RegistroDE } from "../../RegistroDE/entities/RegistroDE"
import { RegistroEO } from "../../RegistroEO/entities/RegistroEO"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    avatar: string

    @OneToMany( () =>  RegistroDE, (registroDE) => registroDE.user)
    diarioDE: RegistroDE[]

    @OneToMany( ()=> RegistroEO, (registroEO) => registroEO.user)
    OccasionalEmotion: RegistroEO[]
}
