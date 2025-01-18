import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    public getUsers() {
        return 'You just send a GET request to "/users" endpoint';
    }
    @Post()
    public createUsers() {
        return 'You just created an user via POST on "/users" endpoint';
    }
}
