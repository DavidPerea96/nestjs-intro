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
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  // Import usersService from the UsersService class
  constructor(private readonly usersService: UsersService) {}

  // Add a GET request handler for the "/users" endpoint
  @Get('/:id')
  @ApiOperation({ 
    summary: 'Fetches a list of users registered in application based on their ID.' 
  })
  @ApiResponse({
    status: 200,
    description: 'The list of users has been successfully fetched.'
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'Limit of entries returned per query.',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'Limit of pages returned per query.',
    example: 1,
  })
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.getAllUsers();
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
