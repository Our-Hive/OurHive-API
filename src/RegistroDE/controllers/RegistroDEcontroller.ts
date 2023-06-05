import { NextFunction, Request, Response } from "express";
import { RegistroDEService } from "../services/RegistroDEService";
import { CreateRegistroDto } from "../dtos/createRegistroDE_Dto";
import { UpdateRegistroDTO } from "../dtos/updateRegistroDE_Dto";

export class RegistroController{
    
    private recordService = new RegistroDEService()

    async all(request: Request, response: Response, next: NextFunction) {
        return await this.recordService.all()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
        const recordDE = await this.recordService.one(id)

        if (!recordDE) {
            response.status(404).json({
                message: "User Not Found"
            })
        }

        return recordDE
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const createRecordDto: CreateRegistroDto = request.body
        return await this.recordService.save(createRecordDto)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        return await this.recordService.delete(id)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
        const updaterecordDto: UpdateRegistroDTO = request.body

        return await this.recordService.update(id, updaterecordDto)
    }
}