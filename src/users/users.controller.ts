import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Headers,
  Ip,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(id);
    console.log(limit);
    console.log(page);
    return 'You just send a GET request to "/users" endpoint';
  }
  @Post()
  public createUsers(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto,
  ) {
    console.log(createUserDto);
    return 'You just created an user via POST on "/users" endpoint';
  }
}
