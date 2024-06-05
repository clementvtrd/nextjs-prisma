import { prismaDisconnect } from '@/decorator/prismaDisconnect';
import client from '@/prisma-client';
import { Prisma } from '@prisma/client';

class MessageRepository {
  @prismaDisconnect()
  public create(data: Prisma.MessageCreateInput) {
    client.message.create({ data });
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

const repository = new MessageRepository();

export default repository;
