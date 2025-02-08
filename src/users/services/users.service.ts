import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

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
  public getUserById(userId: string) {
    return {
      id: 1234,
      fistName: 'Alice',
      email: 'alice@doe.com',
    };
  }
}
