"use client";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const token = true;
  const currentRoute = usePathname();

  const publicRoutes = ["/", "/signIn"];

  const isPublicRoutes = publicRoutes.includes(currentRoute);

  useEffect(() => {
    if (!token && !isPublicRoutes && currentRoute !== "/") {
      router.push("/");
    }
  }, [token, isPublicRoutes, currentRoute]);

  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        {isPublicRoutes && children}
        {!token && isPublicRoutes && children}
        {token && children}
      </body>
    </html>
  );
}
