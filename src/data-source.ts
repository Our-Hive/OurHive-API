import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./User/entities/User"
import { RegistroDE } from "./RegistroDE/entities/RegistroDE"
import { RegistroEO } from "./RegistroEO/entities/RegistroEO"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "our-hive",
    synchronize: true,
    logging: false,
    entities: [User, RegistroDE, RegistroEO],
    migrations: [],
    subscribers: [],    
})
