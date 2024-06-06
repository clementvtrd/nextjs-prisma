"use client";

export default function AuthButton({ action, children }: {
  action: () => Promise<void>;
  children: React.ReactNode;
}) {
  return (
    <button onClick={async () => {
      await action();
    }}
      className="p-2 rounded-md ring-2 ring-red-300 hover:bg-red-300"
    >{children}</button>
  );
}
