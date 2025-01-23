import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(40)
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(40)
  lastName?: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^\$2[ayb]\$[\d]{2}\$[./A-Za-z0-9]{53}$/, {
    message:
      'Minimum 8 characters, 1 special character, 1 letter and 1 number.',
  })
  password: string;
}
