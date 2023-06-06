import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { LoginDto } from "../dtos/LoginDto";

export class AuthController {
    private authService = new AuthService()

    async login(request: Request, response: Response, next: NextFunction) {
        const loginDto: LoginDto = request.body

        const user = await this.authService.validateUser(loginDto)


        if (!user) {
            response.status(401).json({
                message: "Unauthorized"
            })
        }

        return user
    }
}