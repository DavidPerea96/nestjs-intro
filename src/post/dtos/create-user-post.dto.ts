import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from "class-validator";
import { postType } from "../enums/postType.enum";
import { postStatus } from "../enums/postStatus.enum";
import { CreatePostMetaOptionsDto } from "./create-post-meta-options.dto";
import { Transform, Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserPostDto {
    
    @ApiProperty({
        description: 'The title of the post',
        example: 'My First Post'
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    title: string;

    @ApiProperty({
        enum: postType,
        description: 'Possible values: "post", "page", "story", "series"',
        example: 'series'
    })
    @IsNotEmpty()
    @Transform(({value}) => value.toLowerCase())
    postType: postType;

    @ApiProperty({
        description: 'The slug of the post',
        example: 'my-first-post'
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'slug must be all small letters, uses only "-" as separator. For example: "my-first-post"'
    })
    slug: string;

    @ApiProperty({
        enum: postStatus,
        description: 'Possible values: "draft", "scheduled", "review", "published"',
        example: 'published'
    })
    @IsEnum(postStatus)
    @IsNotEmpty()
    @Transform(({value}) => value.toLowerCase())
    status: postStatus;

    @ApiProperty({
        description: 'The content of the post',
        example: 'This is my first post, I am so excited to share it with you all.'
    })
    @IsOptional()
    @IsString()
    content: string;

    @ApiProperty({
        description: 'The schema of the post',
        example: '{"type": "object", "properties": {"title": {"type": "string"}}}'
    })
    @IsOptional()
    @IsJSON()
    schema: string;

    @ApiProperty({
        description: 'The featured image URL of the post',
        example: 'https://example.com/image.jpg'
    })
    @IsOptional()
    @IsUrl()
    featuredImageUrl: string;

    @ApiProperty({
        description: 'The publish date of the post',
        example: '2021-09-30T00:00:00.000Z'
    })
    @IsOptional()
    @IsISO8601()
    pubishOn: Date;

    @ApiProperty({
        description: 'The tags of the post',
        example: '["tag1", "tag2", "tag3"]'
    })
    @IsOptional()
    @IsArray()
    @IsString({each: true})
    @MinLength(3, {each: true})    
    tags: string[];

    @ApiProperty({
        type: 'array',
        required: false,
        items: {
            type: 'object',
            properties: {
                key: { type: 'string',
                    description: "The key can be any string that identifies the meta option",
                    example: 'sidebarEnabled'
                 },
                value: { type: 'any',
                    description: "The value can be any data type that represents the meta option",
                    example: 'true'
                 }
            }
        },
        description: 'The meta options of the post',
        example: '[{"key": "author", "value": "John Doe"}]'
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => CreatePostMetaOptionsDto)
    metaOptions: CreatePostMetaOptionsDto[];

}