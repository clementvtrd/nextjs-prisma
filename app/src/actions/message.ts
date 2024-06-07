"use server";

import MessageRepository from '@/repositories/MessageRepository';
import { MessageCreateOneSchema } from '@/schemas/createOneMessage.schema';
import { revalidateTag } from 'next/cache';

export async function createMessage (formData: FormData) {
  const { data } = MessageCreateOneSchema.parse({
    data: {
      content: formData.get('content')
    },
  });

  await MessageRepository.create(data);

  revalidateTag('messages');
}
