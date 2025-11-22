// AI GENERATED
import { StoryStatus, Roles } from '@prisma/client';
import { prisma } from './client';

async function main() {
  console.log('Cleaning database...');
  await prisma.storyPart.deleteMany();
  await prisma.story.deleteMany();
  await prisma.category.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  console.log('Seeding Users with Profiles...');

  // Users creation
  const users = await Promise.all([
    // User 1 (Admin)
    prisma.user.create({
      data: {
        email: 'sarah@example.com',
        authId: '00000000-0000-0000-0000-000000000001', // Mock Supabase ID
        role: Roles.ADMIN,
        profile: {
          create: {
            username: 'sarah_writes',
            about: 'Fantasy writer. I love dragons and magic.',
            image: 'https://i.pravatar.cc/150?img=1',
            location: 'London, UK',
            myWebsite: 'https://sarah-writes.com',
          },
        },
      },
    }),
    // User 2 (Regular User)
    prisma.user.create({
      data: {
        email: 'alex@example.com',
        authId: '00000000-0000-0000-0000-000000000002',
        role: Roles.USER,
        profile: {
          create: {
            username: 'alex_scifi',
            about: 'SciFi enthusiast and stargazer.',
            image: 'https://i.pravatar.cc/150?img=2',
            location: 'New York, USA',
          },
        },
      },
    }),
    // User 3 (Regular User)
    prisma.user.create({
      data: {
        email: 'emma@example.com',
        authId: '00000000-0000-0000-0000-000000000003',
        role: Roles.USER,
        profile: {
          create: {
            username: 'emma_dark',
            about: 'Horror stories collector.',
            image: 'https://i.pravatar.cc/150?img=3',
            location: 'Salem, USA',
          },
        },
      },
    }),
  ]);

  console.log('Seeding Categories...');
  const fantasy = await prisma.category.create({
    data: { name: 'Fantasy', slug: 'fantasy' },
  });
  const scifi = await prisma.category.create({
    data: { name: 'Science Fiction', slug: 'science-fiction' },
  });
  const horror = await prisma.category.create({
    data: { name: 'Horror', slug: 'horror' },
  });
  const romance = await prisma.category.create({
    data: { name: 'Romance', slug: 'romance' },
  });
  const mystery = await prisma.category.create({
    data: { name: 'Mystery', slug: 'mystery' },
  });

  console.log('Seeding Stories...');

  // User 1 Stories
  const story1 = await prisma.story.create({
    data: {
      userId: users[0].id,
      categoryId: fantasy.id,
      slug: 'dragon-keeper',
      cover: 'https://picsum.photos/seed/dragon/400/600',
      title: 'The Last Dragon Keeper',
      description: 'A young girl discovers she can communicate with dragons.',
      language: 'en',
      status: StoryStatus.PUBLISHED,
      isMature: false,
    },
  });

  const story2 = await prisma.story.create({
    data: {
      userId: users[0].id,
      categoryId: romance.id,
      slug: 'summer-love',
      cover: 'https://picsum.photos/seed/summer/400/600',
      title: 'Summer in Paris',
      description:
        'Two strangers meet in Paris and fall in love over the summer.',
      language: 'en',
      status: StoryStatus.PUBLISHED,
      isMature: false,
    },
  });

  const story3 = await prisma.story.create({
    data: {
      userId: users[0].id,
      categoryId: fantasy.id,
      slug: 'shadow-crown',
      cover: 'https://picsum.photos/seed/crown/400/600',
      title: 'Crown of Shadows',
      description: 'A princess fights for her throne.',
      language: 'en',
      status: StoryStatus.DRAFT,
      isMature: true,
    },
  });

  // User 2 Stories
  const story4 = await prisma.story.create({
    data: {
      userId: users[1].id,
      categoryId: scifi.id,
      slug: 'mars-signal',
      cover: 'https://picsum.photos/seed/mars/400/600',
      title: 'Signal from Mars',
      description: 'A mysterious signal changes everything.',
      language: 'en',
      status: StoryStatus.PUBLISHED,
      isMature: false,
    },
  });

  const story5 = await prisma.story.create({
    data: {
      userId: users[1].id,
      categoryId: scifi.id,
      slug: 'quantum-leap',
      cover: 'https://picsum.photos/seed/quantum/400/600',
      title: 'Quantum Paradox',
      description: 'Time travel goes wrong.',
      language: 'en',
      status: StoryStatus.DRAFT,
      isMature: true,
    },
  });

  // User 3 Stories
  const story6 = await prisma.story.create({
    data: {
      userId: users[2].id,
      categoryId: horror.id,
      slug: 'maple-street',
      cover: 'https://picsum.photos/seed/house/400/600',
      title: 'The House on Maple Street',
      description: 'A haunted house story.',
      language: 'en',
      status: StoryStatus.PUBLISHED,
      isMature: true,
    },
  });

  const story7 = await prisma.story.create({
    data: {
      userId: users[2].id,
      categoryId: mystery.id,
      slug: 'vanishing',
      cover: 'https://picsum.photos/seed/mystery/400/600',
      title: 'The Vanishing',
      description: 'People keep disappearing.',
      language: 'en',
      status: StoryStatus.PUBLISHED,
      isMature: false,
    },
  });

  const story8 = await prisma.story.create({
    data: {
      userId: users[2].id,
      categoryId: horror.id,
      slug: 'midnight-calls',
      cover: 'https://picsum.photos/seed/phone/400/600',
      title: 'Midnight Calls',
      description: 'Strange calls at night.',
      language: 'en',
      status: StoryStatus.DRAFT,
      isMature: true,
    },
  });

  console.log('Seeding Story Parts...');

  await prisma.storyPart.createMany({
    data: [
      {
        storyId: story1.id,
        partNumber: 1,
        title: 'Awakening',
        content:
          'Kira discovered her gift on her 17th birthday when a dragon appeared in her backyard.',
      },
      {
        storyId: story1.id,
        partNumber: 2,
        title: 'Training',
        content: 'An old keeper taught her the ancient ways of dragon bonding.',
      },
      {
        storyId: story1.id,
        partNumber: 3,
        title: 'First Flight',
        content:
          "She soared through the clouds on Ember's back for the first time.",
      },
      {
        storyId: story1.id,
        partNumber: 4,
        title: 'Dark Forces',
        content: 'The Dark Court learned of her existence and sent hunters.',
      },
      {
        storyId: story1.id,
        partNumber: 5,
        title: 'Battle',
        content:
          'Kira fought to protect the dragons and discovered her true power.',
      },
    ],
  });

  await prisma.storyPart.createMany({
    data: [
      {
        storyId: story2.id,
        partNumber: 1,
        title: 'Arrival',
        content: 'Sophie arrived in Paris with a broken heart and no plans.',
      },
      {
        storyId: story2.id,
        partNumber: 2,
        title: 'Café Meeting',
        content: 'She met Lucas at a small café near the Louvre.',
      },
      {
        storyId: story2.id,
        partNumber: 3,
        title: 'Perfect Summer',
        content: 'They spent every day together exploring the city.',
      },
    ],
  });

  await prisma.storyPart.createMany({
    data: [
      {
        storyId: story4.id,
        partNumber: 1,
        title: 'Discovery',
        content: 'Dr. Chen detected an impossible signal from Mars.',
      },
      {
        storyId: story4.id,
        partNumber: 2,
        title: 'Investigation',
        content: 'The message warned against colonization.',
      },
    ],
  });

  await prisma.storyPart.createMany({
    data: [
      {
        storyId: story6.id,
        partNumber: 1,
        title: 'Moving Day',
        content: 'The Hendersons bought the house cheap. Too cheap.',
      },
      {
        storyId: story6.id,
        partNumber: 2,
        title: 'First Night',
        content: 'Whispers in the walls. Shadows that moved wrong.',
      },
      {
        storyId: story6.id,
        partNumber: 3,
        title: 'The Truth',
        content: 'Every family before them had disappeared.',
      },
      {
        storyId: story6.id,
        partNumber: 4,
        title: 'Escape',
        content: "But the house doesn't let people leave.",
      },
    ],
  });

  console.log('Seed complete!');
  console.log(`${await prisma.user.count()} users`);
  console.log(`${await prisma.category.count()} categories`);
  console.log(`${await prisma.story.count()} stories`);
  console.log(`${await prisma.storyPart.count()} parts`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
