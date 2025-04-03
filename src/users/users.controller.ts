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
/**
 * Class to connect to users table and perform business operations
 */
@Controller('users')
@ApiTags('Users')
/**
 * UsersController class handles HTTP requests related to users.
 * It provides endpoints for fetching, creating, and updating users.
 */
export class UsersController {
  // Import usersService from the UsersService class
  constructor(private readonly usersService: UsersService) {}

  @Get('/:id')
  @ApiOperation({
    summary:
      'Fetches a list of users registered in application based on their ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'The list of users has been successfully fetched.',
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
  /**
   * Fetches a list of users registered in the application based on their ID.
   * @param getUsersParamDto - The parameters for fetching users.
   * @param limit - The maximum number of users to return.
   * @param page - The number of pages to be returned.
   */
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.getAllUsers();
  }

  @Post()
  /**
   * Creates a new user.
   * @param createUserDto - The data for creating a new user.
   * @returns A message indicating that the user has been created.
   */
  public createUsers(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'You just created an user via POST on "/users" endpoint';
  }

  @Patch()
/**
 * Updates an existing user.
 * @param patchUserDto - The data for updating the user.
 * @returns A message indicating that the user has been updated.  
 */
  public patchUsers(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
    return 'You just send a PATCH request to "/users" endpoint';
  }
}
