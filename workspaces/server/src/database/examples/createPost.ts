import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const author = await prisma.user.findUnique({ where: { email: 'seitamuro0210@gmail.com' } });
  await prisma.post.create({
    data: {
      title: 'Hello World',
      conetent: 'This is my first post',
      published: false,
      author: {
        connect: {
          id: author.id,
        },
      },
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
