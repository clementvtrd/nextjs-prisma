"use server";

import { createMessage } from '@/actions/message';
import getAllMessages from '@/resolvers/message/getAllMessages';
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
