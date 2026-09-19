import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { Bot } from "lucide-react";
import { SiteFooter } from "@/components/layout";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center justify-center">
          <Link href={ROUTES.HOME} className="flex items-center gap-2 font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-amber-500">
              <Bot className="h-5 w-5 text-ink-900" />
            </span>
            MyselfX AI
          </Link>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}