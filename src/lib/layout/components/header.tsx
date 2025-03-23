'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { getUserData, logout } from '@/lib/services/user-storage';

export const Header = () => {
  interface User {
    id: string;
    name: string;
    email: string;
  }

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeUser = async () => {
      try {
        const storedUser = await getUserData();
        if (storedUser) {
          console.log('Dados do usuário carregados:', storedUser);
          setUser(storedUser);
        }
      } catch (error) {
        console.error('Erro ao carregar os dados do usuário:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeUser();
  }, []);
  return (
    <header className="sticky top-0 z-99 flex w-full justify-center border-b-2 border-black bg-white/60 p-5 backdrop-blur-md">
      <section className="flex w-4xl items-center justify-between bg-[#00000]">
        {isLoading ? (
          <div className="flex w-full items-center justify-center p-10">
            <div className="loading"></div>
          </div>
        ) : user ? (
          <>
            <div className="flex flex-row">
              <div>
                <Image
                  src="/assets/logo.png"
                  className="rounded-full"
                  width={50}
                  height={50}
                  alt="logo"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-black">
              <div className="font-bold text-black">{user.name}</div>
              <div className="">
                <a
                  href="#"
                  onClick={logout}
                  className="rounded-2xl border-2 border-black p-2 px-5 text-center text-xl font-bold text-black hover:bg-black hover:text-white"
                >
                  logout
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row">
              <div>
                <Image
                  src="/assets/logo.png"
                  className="rounded-full"
                  width={50}
                  height={50}
                  alt="logo"
                />
              </div>
            </div>
            <div className="bg-white">
              <a
                href="/login"
                className="rounded-2xl border-2 border-black p-2 px-5 text-center text-xl font-bold text-black hover:bg-black hover:text-white"
              >
                login
              </a>
            </div>
          </>
        )}
      </section>
    </header>
  );
};
