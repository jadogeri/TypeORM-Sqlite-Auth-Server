import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;

    constructor(id :number){
        this.id = id
    }
}