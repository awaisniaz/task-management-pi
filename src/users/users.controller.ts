import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() input:any) {
    const user = await this.usersService.registerUser();
  }

  @Post('login')
  async login(@Body() input:any) {
    const user = await this.usersService.login();
  }
}
