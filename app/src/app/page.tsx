'use client';

import { helloWorld } from '@/actions/helloWorld';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={async () => { await helloWorld();}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Hello World
      </button>
    </main>
  );
}
