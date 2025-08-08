import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
const userRepository = AppDataSource.getRepository(User);


async function create(body : any){
    const user = userRepository.create(body as User);
    const createdUser = userRepository.save(user);
    return createdUser;
}

export { create}