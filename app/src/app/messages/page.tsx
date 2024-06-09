"use server";

import { createMessage } from '@/actions/message';
import Form from '@/components/Form';
import getAllMessages from '@/resolvers/message/getAllMessages';
import Link from 'next/link';

export default async function MessagesPage() {
  const messages = await getAllMessages();

  return (
    <section>
      <Form action={createMessage}>
        <textarea name="content" />
        <button className="p-2" type="submit">Send</button>
      </Form>
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
