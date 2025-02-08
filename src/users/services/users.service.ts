/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/services/auth.service';

@Injectable()
export class UsersService {
  public getAllUsers(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        fistName: 'John',
        email: 'jhon@doe.com',
      },
      {
        fistName: 'Jane',
        email: 'jane@doe.com',
      },
    ];
  }
  constructor(private readonly authService: AuthService) {}
  public getUserById(userId: string) {
    if (!this.authService.isAuth()) {
      throw new Error('User is not authenticated');
    } else {
      return {
        id: 1234,
        fistName: 'Alice',
        email: 'alice@doe.com',
      };
    }
  }
}
