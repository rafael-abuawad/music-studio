import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "./ui/card";

export function OurTeam() {
  return (
    <section className="landing-section-reveal animate-in fade-in slide-in-from-bottom-4 py-10 px-2 duration-700">
      <SectionHeader title="Our Team" />
      <div className="flex flex-col md:flex-row gap-8">
        <Card className="flex flex-1 flex-col items-center transition-[box-shadow,border-color] duration-300 hover:border-primary/20 hover:shadow-md">
          <CardContent>
            <div className="w-56 h-56 relative mb-4 rounded-xl overflow-hidden">
              <Image
                src="/images/pfps/mirovil.jpeg"
                alt="Mirovil"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold ">
                Mike Blake{" "}
                <span className="font-normal text-muted-foreground">
                  (MIROVIL)
                </span>
              </div>
              <div className="text-muted-foreground flex flex-col mt-2 gap-1 text-sm">
                <p>Mirovil is a music producer and DJ who fuses electronic, urban, and alternative rhythms with an identity marked by honesty and emotional intensity. As Mike, the creator behind the project, he combines his experience in mixing and mastering to create unique sound experiences that deeply connect with the audience.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-1 flex-col items-center transition-[box-shadow,border-color] duration-300 hover:border-primary/20 hover:shadow-md">
          <CardContent>
            <div className="w-56 h-56 relative mb-4 rounded-xl overflow-hidden">
              <Image
                src="/images/pfps/percoxerg.jpeg"
                alt="PercoXerg"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold ">
                Sergio Bedregal{" "}
                <span className="font-normal text-muted-foreground">
                  (PercoXerg)
                </span>
              </div>
              <div className="text-muted-foreground mt-2 text-sm">
                <p>Percoxerg is an audio producer and editor specialized in creating dense and deep atmospheres. With experience as a voice-over artist and technical training in audio, his work is characterized by dark and melancholic sounds, bringing a unique identity to each project through carefully structured musical arrangements.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
