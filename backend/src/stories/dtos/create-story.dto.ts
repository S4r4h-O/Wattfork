import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

import { StoryStatus } from '@prisma/client';

export class CreateStoryDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  categoryId: string;

  @IsString()
  @IsOptional()
  cover: string;

  @IsString()
  @MinLength(1)
  @MaxLength(200)
  title: string;

  @IsString()
  @MinLength(1)
  @MaxLength(2000)
  description: string;

  @IsString()
  @MinLength(2)
  @MaxLength(5)
  language: string;

  @IsEnum(StoryStatus)
  @IsOptional()
  status?: StoryStatus;

  @IsBoolean()
  @IsOptional()
  isMature?: boolean;
}
