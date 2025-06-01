import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-muted/40 p-0 md:p-8">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/studio.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center w-full h-full opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 w-full max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8 font-medium drop-shadow">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/samples">Listen to Samples</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
