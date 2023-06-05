import { hash } from "bcrypt"
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
        const hashedPassword = await hash(userDto.password, 10);
        userDto.password = hashedPassword;

        const user = Object.assign(new User(), userDto)

        return this.userRepository.save(user)
    }

    async delete(id: number) {
        const user: User = await this.one(id)

        return await this.userRepository.remove(user)
    }

    async update(id: number, updateDto: UpdateUserDto) {
        const user: User = await this.one(id)

        if (updateDto.password) {
            const hashedPassword = await hash(updateDto.password, 10);
            updateDto.password = hashedPassword;
        }

        const updateUser = Object.assign(user, updateDto)

        return await this.userRepository.save(updateUser)
    }
}