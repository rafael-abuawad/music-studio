import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[82vh] flex items-center justify-center overflow-hidden rounded-2xl border border-primary/15 bg-muted/40 p-0 md:p-8 shadow-[0_30px_80px_-24px_color-mix(in_oklch,var(--foreground)_18%,transparent)]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/studio.jpg"
          alt="Hero background"
          fill
          className="h-full w-full object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0 bg-black/55 dark:bg-black/45"
          aria-hidden
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 w-full max-w-3xl mx-auto">
        <h1 className="hero-motion-in font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance text-white mb-4 drop-shadow-[0_2px_24px_color-mix(in_oklch,var(--background)_45%,transparent)] md:leading-[1.08]">
          {title}
        </h1>
        <p className="hero-motion-in hero-motion-delay-1 text-lg md:text-xl text-white/88 mb-8 font-medium leading-relaxed max-w-2xl [text-shadow:0_1px_18px_color-mix(in_oklch,var(--background)_35%,transparent)]">
          {subtitle}
        </p>
        <div className="hero-motion-in hero-motion-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="shadow-lg shadow-primary/20">
            <Link href="#contact">Book a Session</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/samples">Listen to Samples</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
