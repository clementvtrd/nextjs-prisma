"use server";

import MessageRepository from '@/repositories/MessageRepository';
import { unstable_cache } from 'next/cache';

const getAll = unstable_cache(
  () => MessageRepository.getAll(),
  ['message', 'getAll'],
  { tags: ['messages'] }
);

export default async function getAllMessages() {
  return getAll();
}
