"use server";

import { MessageIndexResponse } from '@/app/api/messages/route';
import { createMessage } from '@/mutations/message';
import Link from 'next/link';

export default async function MessagesPage() {
  const messages = await getAllMessages();

  return (
    <section>
      <form action={createMessage}>
        <textarea name="content" />
        <button type="submit">Send</button>
      </form>
      <main>
        <ul>
          {messages.map(message => (
            <li key={message.id}>
              <Link href={`/messages/${message.id}`}>{message.content}</Link>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}

async function getAllMessages() {
  return await fetch(
    `${process.env.BASE_URL}/api/messages`,
    {
      next: {
        tags: ['messages'],
      }
    }
  ).then(res => res.json()) as MessageIndexResponse;
}
