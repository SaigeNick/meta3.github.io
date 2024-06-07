import { UsersService } from './users.service';
import { User } from './entities/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(user: User): Promise<User>;
    login(body: {
        email: string;
        password: string;
    }): Promise<User>;
    getUser(email: string): Promise<User>;
}
