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
import { UsersService } from './services/users.service';

@Controller('users')
export class UsersController {
  // Import usersService from the UsersService class
  constructor(private readonly usersService: UsersService) {}

  // Add a GET request handler for the "/users" endpoint
  @Get('/:id?')
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.getAllUsers(getUsersParamDto, limit, page);
  }

  // Add a POST request handler for the "/users" endpoint
  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'You just created an user via POST on "/users" endpoint';
  }

  // Add a PATCH request handler for the "/users" endpoint
  @Patch()
  public patchUsers(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
    return 'You just send a PATCH request to "/users" endpoint';
  }
}
