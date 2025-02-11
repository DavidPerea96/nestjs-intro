import { Injectable } from '@nestjs/common';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class PostServices {
  constructor(private readonly usersService: UsersService) {}
  public findAll(userId: string) {
    const user = this.usersService.getUserById(userId);

    return [
      {
        user: 1234,
        title: 'Post 1',
        content: 'This is post 1',
      },
      {
        user: 1234,
        title: 'Post 2',
        content: 'This is post 2',
      },
    ];
  }
}
