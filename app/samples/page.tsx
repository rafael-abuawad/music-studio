import { Separator } from "@/components/ui/separator";

const samples = [
    {
        title: "Sample 1",
        src: "https://open.spotify.com/embed/track/1IKnkAtTKion90wF8yxSgS?utm_source=generator"
    },
    {
        title: "Sample 2",
        src: "https://open.spotify.com/embed/track/1IKnkAtTKion90wF8yxSgS?utm_source=generator"
    },
    {
        title: "Sample 3",
        src: "https://open.spotify.com/embed/track/1IKnkAtTKion90wF8yxSgS?utm_source=generator"
    },
    {
        title: "Sample 4",
        src: "https://open.spotify.com/embed/track/1IKnkAtTKion90wF8yxSgS?utm_source=generator"
    },
    {
        title: "Sample 5",
        src: "https://open.spotify.com/embed/track/1IKnkAtTKion90wF8yxSgS?utm_source=generator"
    },
    {
        title: "Sample 6",
        src: "https://open.spotify.com/embed/track/1IKnkAtTKion90wF8yxSgS?utm_source=generator"
    },
]

export default function SamplesPage() {
    return (
        <div className="w-full h-full container mx-auto">
            <section className="py-10 px-2">
                <hgroup>
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Samples</h1>
                    <h2 className="text-lg md:text-xl text-muted-foreground font-normal mb-4">
                        We've worked with a wide range of artists, from all over the world.
                    </h2>
                </hgroup>

                <Separator className="my-4" />

                <div className="flex flex-col gap-8">
                    {samples.map((sample) => (
                        <iframe
                            key={sample.title}
                            style={{ borderRadius: "12px" }}
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            src={sample.src}
                        ></iframe>
                    ))}
                </div>
            </section>
        </div>
    );
}
