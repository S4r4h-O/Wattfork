import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { Story, Prisma } from '@prisma/client';

@Injectable()
export class StoriesService {
  constructor(private prisma: PrismaService) {}

  async getStoryById(id: number): Promise<Story | null> {
    return this.prisma.story.findUnique({ where: { id } });
  }
}
