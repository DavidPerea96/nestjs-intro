import { Controller } from '@nestjs/common';
import { PostServices } from './services/post.services';

@Controller('post')
export class PostController {
    constructor(private readonly postServices: PostServices) {}
}
