import Nav from "@/components/Nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Cerne",
  description: "Criador de exames",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-[#E8EAEC]">
        <TooltipProvider delayDuration={0}>
          <Nav />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
