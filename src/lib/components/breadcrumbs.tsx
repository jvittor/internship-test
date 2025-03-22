'use client';

import Link from 'next/link';

export default function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav
      className="mt-10 flex items-center justify-center"
      aria-label="Breadcrumb"
      role="navigation"
    >
      <ul className="flex w-4xl flex-wrap items-center">
        <li className="inline-flex items-center">
          <Link
            href="/"
            aria-label="home"
            className="inline-flex items-center font-medium text-gray-700"
          >
            <svg
              className="h-4 w-4 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              ></path>
            </svg>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="mx-2 h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              ></path>
            </svg>
            {item.href ? (
              <Link href={item.href} className="font-medium text-gray-700">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-gray-600" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
