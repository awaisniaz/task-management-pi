import { Injectable } from '@nestjs/common';
@Injectable()
export class UsersService {
  constructor(){}
  async registerUser():Promise<any> {}
  async login():Promise<any> {}
  async getDetails():Promise<any>{}
}
