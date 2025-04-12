import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule, PostModule, AuthModule, TypeOrmModule.forRootAsync({
      useFactory: () => ({
      type: 'postgres',
      entities: [],
      synchronize: true,
      port: 5432,
      username: 'postgres',
      password: 'El-nevado96@',
      host: 'localhost',
      database: 'nestjs-intro',
    }),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
