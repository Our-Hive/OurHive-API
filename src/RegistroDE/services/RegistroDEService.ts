import { AppDataSource } from "../../data-source";
import { CreateRegistroDto } from "../dtos/createRegistroDE_Dto";
import { UpdateRegistroDTO } from "../dtos/updateRegistroDE_Dto";
import { RegistroDE } from "../entities/RegistroDE";


export class RegistroDEService{
    private regisRepository = AppDataSource.getRepository(RegistroDE)

    async all(){
        return this.regisRepository.find()
    }

    async one(id: number): Promise<RegistroDE>{
        const record = await this.regisRepository.findOne({
            where: {id}
        })
        return record
    }

    async save (registroDTO: CreateRegistroDto){

        const record = Object.assign( new RegistroDE(),{
            title: registroDTO.title,
            description: registroDTO.description,
            emotion: registroDTO.emotion,
            fecha: registroDTO.fecha,
            userid: registroDTO.userid
        })

        return this.regisRepository.save(record)
    }


    async delete(id: number) {
        const record: RegistroDE = await this.one(id)

        return await this.regisRepository.remove(record)
    }

    async update (id: number, updateRegistro: UpdateRegistroDTO){
        const record: RegistroDE = await this.one(id)
        
        const updateRecordDE = Object.assign(record,updateRegistro)

        return await this.regisRepository.save(updateRecordDE)
    }

}