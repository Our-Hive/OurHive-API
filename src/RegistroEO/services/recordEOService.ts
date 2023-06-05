import { UserService } from "../../User/services/UserService";
import { AppDataSource } from "../../data-source";
import { CreateRecordEODto } from "../dtos/createRecordEO_Dto";
import { UpdateRecordEODTO } from "../dtos/updateRecordEO_Dto";
import { RegistroEO } from "../entities/RegistroEO";

export class recordEoService {
    private recordRepository = AppDataSource.getRepository(RegistroEO)
    private userService = new UserService()

    async all(){
        return this.recordRepository.find()
    }

    async one(id: number): Promise<RegistroEO>{
        const recordEO = await this.recordRepository.findOne({
            where: {id}
        })
        return recordEO
    }

    async save (recordDTO: CreateRecordEODto){
        const user = await this.userService.one(recordDTO.userid)

        const record = Object.assign(new RegistroEO(), recordDTO)
        record.user = user

        return this.recordRepository.save(record)
    }

    async delete (id: number){
        const record: RegistroEO = await this.one(id)

        return await this.recordRepository.remove(record)
    }

    async update (id: number, updateRecord: UpdateRecordEODTO){
        const record: RegistroEO = await this.one(id)
        
        const updateRecordEO: RegistroEO = Object.assign(record, updateRecord)
        
        return await this.recordRepository.save(updateRecordEO)
    }
}