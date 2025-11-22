import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { Story, Prisma } from '@prisma/client';

@Injectable()
export class StoriesService {
  constructor(private prisma: PrismaService) {}

  async getAllStories(params: {
    page: number;
    limit: number;
    orderBy?: Prisma.StoryOrderByWithRelationInput;
  }): Promise<Story[]> {
    const { page, limit, orderBy } = params;
    return this.prisma.story.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy,
    });
  }

  async getStoryById(id: number): Promise<Story | null> {
    return this.prisma.story.findUnique({ where: { id } });
  }
}
