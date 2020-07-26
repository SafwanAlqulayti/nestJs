import { Entity, PrimaryGeneratedColumn ,CreateDateColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity  {
@PrimaryGeneratedColumn()
id?:string ;
@CreateDateColumn({nullable:true})
createdAt:number ;
@UpdateDateColumn({nullable:true})
updatedAt:number ;
}