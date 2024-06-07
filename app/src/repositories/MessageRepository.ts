import { prismaDisconnect } from '@/decorator/prismaDisconnect';
import client from '@/prisma-client';
import { Prisma } from '@prisma/client';

class Repository {
  @prismaDisconnect()
  public create(data: Prisma.MessageCreateInput) {
    return client.message.create({ data });
  }

  @prismaDisconnect()
  public getAll() {
    return client.message.findMany({
      select: {
        content: true,
        id: true
      },
      take: 10,
    });
  }
}

const MessageRepository = new Repository();

export default MessageRepository;
