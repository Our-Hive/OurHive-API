import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../../User/entities/User";

@Entity()
export class RegistroEO{

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

    @ManyToOne(() => User, (user) => user.OccasionalEmotion)
    user: User

}