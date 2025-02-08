import { Controller, Get, Param } from '@nestjs/common';
import { PostServices } from './services/post.services';

@Controller('post')
export class PostController {
  constructor(private readonly postServices: PostServices) {}

  @Get('/:userId')
  public getPosts(@Param('userId') userId: string) {
    return this.postServices.findAll(userId);
  }
}
