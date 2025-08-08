import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { IUserRegister } from "../interfaces/IUserRegister";
const userRepository = AppDataSource.getRepository(User);


async function create(body : IUserRegister){
    const user = userRepository.create(body as User);
    const createdUser = userRepository.save(user);
    return createdUser;
}

export { create}