"use client";

export default function MessagesErrorHandler({
  error,
  reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
  }) {
  return (
    <section>
      <h1>Messages</h1>
      <p>
        {error.message}
      </p>
      <p>
        Please try again later.
      </p>
      <button onClick={reset}>Retry</button>
    </section>
  );
}
