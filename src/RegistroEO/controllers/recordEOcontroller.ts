import { NextFunction, Request, Response } from "express";
import { recordEoService } from "../services/recordEOService";
import { CreateRecordEODto } from "../dtos/createRecordEO_Dto";
import { UpdateRecordEODTO } from "../dtos/updateRecordEO_Dto";

export class recordEOController{
    private recordEOService = new recordEoService()

    async all (request: Request, response: Response, next: NextFunction){
        
        return await this.recordEOService.all()

    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
        const recordEO = await this.recordEOService.one(id)

        if (!recordEO) {
            response.status(404).json({
                message: "Record Not Found"
            })
        }

        return recordEO
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const createRecordDto: CreateRecordEODto = request.body
        return await this.recordEOService.save(createRecordDto)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        return await this.recordEOService.delete(id)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
        const update: UpdateRecordEODTO = request.body

        return await this.recordEOService.update(id, update)
    }

}