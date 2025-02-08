/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  public login(email: string, password: string, id: string) {
    const user = this.usersService.getUserById('1234');
    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}
