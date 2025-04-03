import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateUserPostDto } from './create-user-post.dto';

export class PatchPostDto extends PartialType(CreateUserPostDto) {
    @ApiProperty({
        description: 'The ID of the post that needs to be updated',
    })
    @IsInt()
    @IsNotEmpty()
    id: number;
}