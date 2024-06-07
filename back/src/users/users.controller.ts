import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
  ): Promise<User> {
    const { email, password } = body;
    const user = await this.usersService.validateUser(email, password);
    if (user) {
      return user;
    }
    throw new Error('Invalid credentials');
  }

  @Get(':email')
  async getUser(@Param('email') email: string): Promise<User> {
    return this.usersService.findOne(email);
  }
}
