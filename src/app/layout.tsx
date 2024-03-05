import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <header>
          <h1>DevSites</h1>
          <div>Technologies and services related to PHP development</div>
        </header>
        <main>
          { children }
        </main>
      </body>
    </html>
  )
}
