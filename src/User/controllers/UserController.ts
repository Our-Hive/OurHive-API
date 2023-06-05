import { NextFunction, Request, Response } from "express"
import { User } from "../entities/User"
import { AppDataSource } from "../../data-source"
import { UserService } from "../services/UserService"
import { CreateUserDto } from "../dtos/CreateUserDto"

export class UserController {

    private userService = new UserService()


    async all(request: Request, response: Response, next: NextFunction) {
        return await this.userService.all()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
        const user = await this.userService.one(id)

        if (!user) {
            response.status(404).json({
                message: "User Not Found"
            })
        }

        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const userDto: CreateUserDto = request.body
        return await this.userService.save(userDto)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        return await this.userService.delete(id)
    }

}