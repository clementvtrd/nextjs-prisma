'use server';

import inngest from '@/inngest/client';
import { sayHelloWorld } from '@/inngest/events/hello';

export async function helloWorld() {
  await inngest.send(sayHelloWorld('Fernendos'));
}
