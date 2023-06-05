import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { RegistroDE } from "../../RegistroDE/entities/RegistroDE"

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
}
