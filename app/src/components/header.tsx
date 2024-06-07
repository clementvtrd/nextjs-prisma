"use server";

import { loginWithGoogle, logout } from '@/actions/auth';
import { auth } from '@/auth';
import AuthButton from '@/components/AuthButton';
import Icon from '@/components/Icon';
import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex gap-4 justify-between items-center p-2 bg-red-500 text-slate-100">
      <div className="flex gap-4 justify-center items-center p-2">
        <nav>
          <ul>
            <li><Link href="/messages">Messages</Link></li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-4 justify-center items-center p-2">
      {
        session?.user == null
          ? (
            <AuthButton action={loginWithGoogle}>
              <Icon name="log-in" />
              <span className="sr-only">Log in</span>
            </AuthButton>
          ) : (
            <>
              {
                session.user.image != null
                  ? (
                    <Image
                      src={session.user.image}
                      alt="User profile image"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <span className="text-red-500 bg-slate-50 size-8 rounded-full flex justify-center items-center leading-4">
                      {session.user.name?.charAt(0)}
                      </span>
                  )
                }
              <AuthButton action={logout}>
                <Icon name="log-out" />
                <span className="sr-only">Log out</span>
              </AuthButton>
            </>
          )
        }
      </div>
    </header>
  );
}
