import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";
import { Separator } from "@/components/ui/separator";

const samples = [
  {
    title: "Shōgun",
    artist: "ABBANA",
    src: "https://open.spotify.com/embed/track/0vE48ZT2nTl24BbEzfSWod?utm_source=generator",
  },
  {
    title: "Una y Cuarenta",
    artist: "ABBANA",
    src: "https://open.spotify.com/embed/track/5jlKXChoawc86ulTu7Y0pl?utm_source=generator",
  },
  {
    title: "Singani",
    artist: "Mirovil, ABBANA",
    src: "https://open.spotify.com/embed/track/0YtuZNiKC1fueC2AY25Lwf?utm_source=generator",
  },
  {
    title: "Bate",
    artist: "Mirovil",
    src: "https://open.spotify.com/embed/track/2e7gScnZV7PdGZ0DHtYirp?utm_source=generator",
  },
  {
    title: "A Quien Corresponda",
    artist: "Xorevil",
    src: "https://open.spotify.com/embed/track/4vTxlHYxPad4v8GQ6uJdXU?utm_source=generator",
  },
  {
    title: "Nucleo",
    artist: "Xorevil",
    src: "https://open.spotify.com/embed/track/2upcsksPX2d92DmA2b2Kwg?utm_source=generator",
  },
];

export default function SamplesPage() {
  return (
    <div className="relative z-[1] container mx-auto h-full w-full">
      <section className="landing-section-reveal animate-in fade-in slide-in-from-bottom-4 px-2 py-10 duration-700">
        <SectionHeader
          titleAs="h1"
          title="Samples"
          lead="We&apos;ve worked with a wide range of artists, from all over the world."
        />

        <Separator className="my-4" />

        <div className="flex flex-col gap-10">
          {samples.map((sample) => (
            <div
              key={sample.title}
              className="flex flex-col gap-3 rounded-xl border border-border/60 bg-card/30 p-4 shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-primary/20 hover:shadow-md md:p-5"
            >
              <div className="text-center md:text-left">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {sample.title}
                </h3>
                <p className="text-sm text-muted-foreground">{sample.artist}</p>
              </div>
              <iframe
                style={{ borderRadius: "12px" }}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full border-0"
                src={sample.src}
                title={`${sample.title} — Spotify`}
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
