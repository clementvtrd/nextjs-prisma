"use client";

import { HTMLProps, useRef } from 'react';

type Props = Omit<HTMLProps<HTMLFormElement>, 'action'> & {
  action: (data: FormData) => Promise<unknown>;
};

export default function Form({ action, children, ...props }: Props) {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      {...props}
      action={async (data) => {
        await action(data);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
}
