import Link from "next/link";
import { APP_NAME, ROUTES } from "@/lib/constants";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";

const CONTACT = {
  email: "myselfxdeveloper@gmail.com",
  phone: "+923441586424",
  location: "Multan, Punjab, Pakistan",
};

const quickLinks = [
  { name: "Home", href: ROUTES.HOME },
  { name: "Dashboard", href: ROUTES.DASHBOARD },
  { name: "AI Chat", href: ROUTES.CHAT },
  { name: "Leave a Message", href: ROUTES.REGISTER },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-ink-900 text-mist">
      <div className="container mx-auto px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href={ROUTES.HOME} className="flex items-center gap-2 font-bold text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-amber-500 text-ink-900">
                <Sparkles className="h-4 w-4" />
              </span>
              {APP_NAME}
            </Link>
            <p className="mt-3 max-w-xs text-sm text-mist/70">
              A real-time AI assistant platform with streaming chat, secure
              authentication, and conversation persistence.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-mist/80">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-mist/80">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 hover:text-gold transition-colors break-all"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                {CONTACT.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-mist/10 pt-6 text-center text-xs text-mist/60">
          © {new Date().getFullYear()} {APP_NAME} · Built by Moeen Ul Qadir
        </div>
      </div>
    </footer>
  );
}