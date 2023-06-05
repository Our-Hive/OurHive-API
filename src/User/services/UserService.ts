import { AppDataSource } from "../../data-source"
import { CreateUserDto } from "../dtos/CreateUserDto"
import { UpdateUserDto } from "../dtos/UpdateUserDto"
import { User } from "../entities/User"

export class UserService {
    private userRepository = AppDataSource.getRepository(User)

    async all() {
        return this.userRepository.find()
    }

    async one(id: number): Promise<User> {
        const user = await this.userRepository.findOne({
            where: { id }
        })

        return user
    }

    async save(userDto: CreateUserDto) {
        const user = Object.assign(new User(), {
            username: userDto.username,
            email: userDto.email,
            password: userDto.password,
        })

        return this.userRepository.save(user)
    }

    async delete(id: number) {
        const user: User = await this.one(id)

        return await this.userRepository.remove(user)
    }

    async update(id: number, updateDto: UpdateUserDto) {
        const user: User = await this.one(id)

        const updateUser = Object.assign(user, updateDto)

        return await this.userRepository.save(updateUser)
    }
}