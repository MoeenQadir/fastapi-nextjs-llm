import Link from "next/link";
import { Button, Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import { SiteFooter } from "@/components/layout";
import { ROUTES, APP_TAGLINE, APP_DESCRIPTION } from "@/lib/constants";
import { Bot, Lock, LayoutDashboard, MessageSquare, Mail, Phone, MapPin } from "lucide-react";

const features = [
  {
    title: "AI Assistant",
    description: "Chat in real time with a streaming AI assistant powered by PydanticAI.",
    href: ROUTES.CHAT,
    cta: "Start Chat",
    icon: Bot,
  },
  {
    title: "Secure Authentication",
    description: "JWT-based accounts with refresh tokens and a production-grade auth flow.",
    href: ROUTES.LOGIN,
    cta: "Login",
    icon: Lock,
  },
  {
    title: "Dashboard",
    description: "Track your account, conversations, and platform health from one place.",
    href: ROUTES.DASHBOARD,
    cta: "Go to Dashboard",
    icon: LayoutDashboard,
  },
];

const contact = {
  email: "myselfxdeveloper@gmail.com",
  phone: "+923441586424",
  location: "Multan, Punjab, Pakistan",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href={ROUTES.HOME} className="flex items-center gap-2 font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-amber-500">
              <Bot className="h-5 w-5 text-ink-900" />
            </span>
            MyselfX AI
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="h-9">
              <Link href={ROUTES.LOGIN}>Login</Link>
            </Button>
            <Button size="sm" asChild className="h-9 bg-gradient-to-br from-gold to-amber-500 text-ink-900 hover:from-gold/90 hover:to-amber-500/90">
              <Link href={ROUTES.REGISTER}>Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy/20 via-transparent to-gold/10" />
          <div className="container relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-amber-600">
                <MessageSquare className="h-3.5 w-3.5" />
                Powered by FastAPI + Next.js
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
                Meet <span className="text-amber-500">MyselfX AI</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                {APP_TAGLINE}
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
                {APP_DESCRIPTION}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" asChild className="h-12 bg-gradient-to-br from-gold to-amber-500 px-6 text-ink-900 hover:from-gold/90 hover:to-amber-500/90">
                  <Link href={ROUTES.CHAT}>
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Try the AI Chat
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-6" asChild>
                  <Link href={ROUTES.DASHBOARD}>View Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-6xl px-4 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-amber-500">
                    <feature.icon className="h-5 w-5 text-ink-900" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="flex-1 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={feature.href}>{feature.cta}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border bg-card p-6 sm:p-8">
            <h2 className="text-lg font-semibold sm:text-xl">Get in touch</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Built by Moeen Ul Qadir. Have a project in mind or want to try out
              MyselfX AI? Reach out anytime.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-gold" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-gold" />
                {contact.phone}
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-gold" />
                {contact.location}
              </span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}