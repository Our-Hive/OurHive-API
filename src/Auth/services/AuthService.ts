import { compare } from "bcrypt";
import { UserService } from "../../User/services/UserService";
import { LoginDto } from "../dtos/LoginDto";

export class AuthService {
    private userService = new UserService()

    async validateUser(loginDto: LoginDto) {
        const {email, password} = loginDto

        const user = await this.userService.findByEmail(email)

        if (!user) {
            return null
        }

        const isMatch = await compare(password, user.password)

        if (!isMatch) {
            return null
        }

        return user
    }

}