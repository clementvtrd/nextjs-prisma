"use server";

import { loginWithGoogle, logout } from '@/actions/auth';
import { auth } from '@/auth';
import AuthButton from '@/components/AuthButton';

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex gap-4 justify-end items-center p-2 bg-red-500 text-white">
      {
        session?.user == null
          ? <AuthButton action={loginWithGoogle}>Sign In</AuthButton>
          : (
            <>
              <h1>Welcome, {session.user.name}</h1>
              <AuthButton action={logout}>Sign Out</AuthButton>
            </>
          )
      }
    </header>
  );
}
