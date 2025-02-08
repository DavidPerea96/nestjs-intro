import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class PostServices {

    constructor(
        private readonly usersService: UsersService,
    ) {}
    public findAll(userId: string) {
        const user = this.usersService.getUserById(userId);

        return [{
            user: user,
            title: 'Post 1',
            content: 'This is post 1',
        }
        , {
            user: user,
            title: 'Post 2',
            content: 'This is post 2',
        }
    ]

    }
}
