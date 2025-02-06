import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegistrationInput } from './dtos/register.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() input:RegistrationInput):Promise<RegistrationInput> {
    const user = await this.usersService.registerUser(input);
    return user
  }

  @Post('login')
  async login(@Body() input:any) {
    const user = await this.usersService.login();
  }
}
