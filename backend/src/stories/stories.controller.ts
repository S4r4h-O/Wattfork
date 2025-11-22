import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { StoriesService } from './stories.service';

@Controller('story')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Get(':params')
  async getStory(@Param('params') params: string) {
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
