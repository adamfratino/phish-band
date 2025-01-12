"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

export const LoginLink = () => {
  const pathname = usePathname();

  if (pathname !== "/" + process.env.NEXT_PUBLIC_POST_PATH!) {
    return null;
  }

  return (
    <Link
      href="/luis"
      className="p-4 fixed top-0 right-0 hover:scale-125 active:scale-105 transition-transform"
    >
      <LogoutSvg className="stroke-white size-5" />
    </Link>
  );
};

const LogoutSvg = ({ ...props }) => (
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
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);
