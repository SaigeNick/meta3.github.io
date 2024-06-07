import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(user: User): Promise<User>;
    findOne(email: string): Promise<User>;
    validateUser(email: string, password: string): Promise<User>;
}
