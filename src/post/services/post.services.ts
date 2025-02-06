import { Injectable } from '@nestjs/common';

@Injectable()
export class PostServices {
    public findAll(userId: string) {
        console.log(userId);
    }
}
