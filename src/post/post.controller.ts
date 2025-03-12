import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { PostServices } from './services/post.services';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserPostDto } from './dtos/create-user-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('post')
@ApiTags('Post')
export class PostController {
  constructor(private readonly postServices: PostServices) {}

  @Get('/:userId')
  @ApiOperation({
    summary:
      'Fetches a list of posts created by a specific user based on their ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'The list of posts has been successfully fetched.',
  })
  @ApiQuery({
    name: 'userId',
    type: 'string',
    required: false,
    description: '.',
    example: 1234,
  })
  public getPosts(@Param('userId') userId: string) {
    return this.postServices.findAll(userId);
  }

  @Post()
  @ApiOperation({
    summary: 'Creates a new post.',
  })
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created.',
  })
  public createPost(@Body() createUserPostDto: CreateUserPostDto) {
    return 'You just created a post via POST on "/post" endpoint';
  }

  @Patch()
  @ApiOperation({
    summary: 'Updates a post.',
  })
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    return 'You just updated a post via PATCH on "/post" endpoint';
  }
}
