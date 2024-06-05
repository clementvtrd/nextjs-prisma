"use server";

import MessageRepository from '@/repositories/MessageRepository';

export type MessageIndexResponse = ReturnType<typeof MessageRepository.getAll>;

export async function GET() {
  const messages = await MessageRepository.getAll();

  return Response.json(messages);
}
