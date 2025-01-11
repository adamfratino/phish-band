"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

export const LoginLink = () => {
  const pathname = usePathname();

  if (
    pathname === "/" + process.env.NEXT_PUBLIC_LOGIN_PATH! ||
    pathname === "/" + process.env.NEXT_PUBLIC_POST_PATH!
  ) {
    return null;
  }

  return (
    <Link
      href="/luis"
      className="p-4 fixed top-0 right-0 hover:scale-125 active:scale-105 transition-transform"
    >
      <SnowflakeSvg className="stroke-white size-5" />
    </Link>
  );
};

const SnowflakeSvg = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m10 20-1.25-2.5L6 18" />
    <path d="M10 4 8.75 6.5 6 6" />
    <path d="m14 20 1.25-2.5L18 18" />
    <path d="m14 4 1.25 2.5L18 6" />
    <path d="m17 21-3-6h-4" />
    <path d="m17 3-3 6 1.5 3" />
    <path d="M2 12h6.5L10 9" />
    <path d="m20 10-1.5 2 1.5 2" />
    <path d="M22 12h-6.5L14 15" />
    <path d="m4 10 1.5 2L4 14" />
    <path d="m7 21 3-6-1.5-3" />
    <path d="m7 3 3 6h4" />
  </svg>
);
