import { IsString, IsInt, MinLength, MaxLength } from 'class-validator';

export class CreateStoryPartDto {
  @IsString()
  storyId: string;

  @IsInt()
  partNumber: number;

  @IsString()
  @MinLength(3)
  @MaxLength(200)
  title: string;

  @IsString()
  content: string;
}
