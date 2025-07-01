import { Footer } from "@/components/footer";
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
    <div className="w-full h-full container mx-auto">
      <section className="py-10 px-2">
        <hgroup>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Samples</h1>
          <h2 className="text-lg md:text-xl text-muted-foreground font-normal mb-4">
            We&apos;ve worked with a wide range of artists, from all over the world.
          </h2>
        </hgroup>

        <Separator className="my-4" />

        <div className="flex flex-col gap-8">
          {samples.map((sample) => (
            <div key={sample.title} className="relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background-primary/80 backdrop-blur-sm rounded-xl z-0 border">
                <div className="text-center">
                  <h3 className="font-medium">{sample.title}</h3>
                  <p className="text-sm text-muted-foreground">{sample.artist}</p>
                </div>
              </div>
              <div className="relative z10">
                <iframe
                  style={{ borderRadius: "12px" }}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  className="z-10"
                  src={sample.src}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
