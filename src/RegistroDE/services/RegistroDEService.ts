
import { UserService } from "../../User/services/UserService";
import { AppDataSource } from "../../data-source";
import { CreateRegistroDto } from "../dtos/createRegistroDE_Dto";
import { UpdateRegistroDTO } from "../dtos/updateRegistroDE_Dto";
import { RegistroDE } from "../entities/RegistroDE";


export class RegistroDEService{
    private regisRepository = AppDataSource.getRepository(RegistroDE)
    private userService = new UserService()
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
        const user = await this.userService.one(registroDTO.userid)
        const record = Object.assign(new RegistroDE(), registroDTO)

        record.user = user
        
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