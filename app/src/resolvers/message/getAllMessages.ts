"use server";

import { MessageIndexResponse } from '@/app/api/messages/route';
import { handleJsonResponse } from '@/utils/request';

export default async function getAllMessages() {
  const response = await fetch(
    `${process.env.BASE_URL}/api/messages`,
    {
      next: {
        tags: ['messages'],
      }
    }
  );

  return handleJsonResponse<MessageIndexResponse>(response, 'An error occurred while fetching messages. Please try again later.');
}
