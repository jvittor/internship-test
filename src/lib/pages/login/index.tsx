/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

'use client';

import Login from '@/lib/pages/login/components/login';

export default function LoginPage() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center sm:flex-row">
      {/* bg-[url('/bg-login.jpg')] */}
      <div className="absolute inset-0 bg-black bg-white opacity-0 lg:opacity-75" />{' '}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <Login />
      </div>
    </div>
  );
}
