import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";

import { supabase } from "@/utils/supabase/client";

import { LastUpdate } from "@/components/LastUpdate";
import { LoginLink } from "@/components/LoginLink";
import { GoHomeLink } from "@/components/GoHomeLink";
import { BlueskyLink } from "@/components/BlueskyLink";

import "./globals.css";

export const metadata: Metadata = {
  title: "Love & Light Motherfuckers",
  description: "Clever Crew '24",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, error } = await supabase
    .from("posts")
    .select("created_at")
    .order("id", { ascending: false })
    .limit(1);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  const { created_at } = data[0];

  return (
    <ViewTransitions>
      <html lang="en">
        <body className="antialiased py-4 px-8 bg-background h-[100dvh] w-screen flex flex-col items-center justify-center">
          {children}
          <GoHomeLink />
          <LoginLink />
          <BlueskyLink />
          <LastUpdate createdAt={created_at} />
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
