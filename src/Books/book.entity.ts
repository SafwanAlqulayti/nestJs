// import { BaseEntity  } from "../base.entity";
import { Entity, Column} from 'typeorm'
import { BaseEntity } from '../base.entity';
import { IsOptional, IsString, MaxLength, IsNotEmpty } from "class-validator";

import { CrudValidationGroups } from "@nestjsx/crud";
const { CREATE, UPDATE } = CrudValidationGroups;
@Entity('books')
export class Book extends BaseEntity {  
    @IsOptional({ groups: [UPDATE] })
    @IsNotEmpty({ groups: [CREATE] })
    @IsString({ always: true })
     @Column({type:"varchar" ,length:19 , nullable:false})
    title:string;
    @IsNotEmpty({ groups: [CREATE] })
    @Column()
    author:string
    @Column()
    price:number
    @IsOptional({ groups: [CREATE] })

    @Column({nullable:true})

    test:number
}