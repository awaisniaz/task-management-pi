import { Injectable } from '@nestjs/common';
import { RegistrationInput } from './dtos/register.dto';
import { hashPassword } from 'src/utilites/utils';
@Injectable()
export class UsersService {
  constructor(){}
  async registerUser(input:RegistrationInput):Promise<RegistrationInput> {
    const hash = await hashPassword(input?.password)
    input.password = hash
    return input
  }
  async login():Promise<any> {}
  async getDetails():Promise<any>{}
}
