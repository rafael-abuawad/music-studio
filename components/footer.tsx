import { BirdIcon, CameraIcon, FanIcon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { icon: BirdIcon, href: "#" },
  { icon: CameraIcon, href: "#" },
  { icon: FanIcon, href: "#" },
];

export function Footer() {
  return (
    <div className="mt-16 w-full rounded-t-2xl border-t border-primary/20 bg-gradient-to-b from-primary/[0.07] to-secondary py-10 px-6 md:px-16">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <nav className="mb-2 flex w-full max-w-xl flex-col items-center justify-between gap-6 md:flex-row">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary md:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-row gap-6 mb-2">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={item.icon.displayName || "Social link"}
            >
              <item.icon className="w-7 h-7" />
            </a>
          ))}
        </div>
        <div className="text-center text-muted-foreground text-base mt-2">
          © {new Date().getFullYear()} MiddleCity Records. All rights reserved.
        </div>
      </div>
    </div>
  );
}
