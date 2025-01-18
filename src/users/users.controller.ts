import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(@Param() params: any, @Query() query: any) {
    console.log(params);
    console.log(query);
    return 'You just send a GET request to "/users" endpoint';
  }
  @Post()
  public createUsers(
    @Body() param: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(param);
    console.log(headers);
    console.log(ip);
    return 'You just created an user via POST on "/users" endpoint';
  }
}
