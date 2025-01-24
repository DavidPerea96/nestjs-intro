import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUsersParamDto);
    console.log(limit);
    console.log(page);
    return 'You just send a GET request to "/users" endpoint';
  }
  @Post()
  public createUsers(
    @Body() createUserDto: CreateUserDto,
  ) {
    console.log(createUserDto);
    return 'You just created an user via POST on "/users" endpoint';
  }
  @Patch()
  public patchUsers(
    @Body() patchUserDto: PatchUserDto,
  ) {
    console.log(patchUserDto);
    return 'You just send a PATCH request to "/users" endpoint';
  }
}
