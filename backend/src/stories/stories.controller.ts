import {
  Controller,
  Get,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';

import { StoriesService } from './stories.service';
import { Story as StoryModel } from '@prisma/client';
import { GetStoriesDto } from './dtos/get-stories.dto';

@Controller('story')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Get()
  async getStories(@Query() query: GetStoriesDto): Promise<StoryModel[]> {
    return await this.storiesService.getAllStories({
      page: query.page,
      limit: query.limit,
      orderBy: query.orderBy
        ? { [query.orderBy]: 'desc' }
        : { createdAt: 'desc' },
    });
  }

  @Get(':params')
  async getStory(@Param('params') params: string): Promise<StoryModel> {
    const storyId = params.includes('-')
      ? parseInt(params.split('-')[0], 10)
      : parseInt(params, 10);
    const story = await this.storiesService.getStoryById(storyId);

    if (!story) {
      throw new NotFoundException('Story not found');
    }

    return story;
  }
}
