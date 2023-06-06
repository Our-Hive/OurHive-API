import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../../User/entities/User";

@Entity()
export class RegistroDE{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: String

    @Column()
    description: String

    @Column()
    emotion: String

    @Column({ type: 'timestamp' })
    fecha: Date

    @ManyToOne(() => User, (user) => user.diarioDE)
    user: User

}