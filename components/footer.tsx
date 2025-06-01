import { TwitterIcon, InstagramIcon, FacebookIcon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { icon: TwitterIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
  { icon: FacebookIcon, href: "#" },
];

export function Footer() {
  return (
    <div className="w-full bg-secondary py-10 px-16 rounded-t-2xl mt-16">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <nav className="w-full flex flex-col md:flex-row justify-between max-w-xl items-center gap-6 mb-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg text-muted-foreground hover:text-primary transition-colors"
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
