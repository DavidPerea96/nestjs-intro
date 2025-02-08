import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostServices } from './services/post.services';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PostController],
  providers: [PostServices],
  imports: [UsersModule],
})
export class PostModule {}
