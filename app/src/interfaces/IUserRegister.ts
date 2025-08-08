import { IEmail } from "./IEmail";

export interface IUserRegister extends IEmail  {
    username: string;
    password : string,
    phone : string
}