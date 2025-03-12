import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/styles/globals.css";
import { Comfortaa } from "next/font/google";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Cerne",
  description: "Criador de exames",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const dosis = Comfortaa({ subsets: ["latin"], weight: "600" });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${dosis.className}`}>
      <body className="bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            <Nav />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
