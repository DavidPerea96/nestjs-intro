import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostServices } from './services/post.services';

@Module({
  controllers: [PostController],
  providers: [PostServices]
})
export class PostModule {}
