import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export function OurTeam() {
  return (
    <section className="py-10 px-2">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Team</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <Card className="flex-1 flex flex-col items-center">
          <CardContent>
            <div className="w-56 h-56 relative mb-4 rounded-xl overflow-hidden">
              <Image
                src="/team-ethan.jpg"
                alt="Ethan Bennett"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold ">
                Ethan Bennett{" "}
                <span className="font-normal text-muted-foreground">
                  (MIROVIL)
                </span>
              </div>
              <div className="text-muted-foreground mt-2 text-sm">
                Empowering artists with high-end production and creative depth.
                Over a decade of experience collaborating globally.
                International work with artists from Austria, Cuba, Brazil,
                Chile, and other countries.
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 flex flex-col items-center">
          <CardContent>
            <div className="w-56 h-56 relative mb-4 rounded-xl overflow-hidden">
              <Image
                src="/team-lucas.jpg"
                alt="Lucas Carter"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold ">
                Lucas Carter{" "}
                <span className="font-normal text-muted-foreground">
                  (PercoXerg)
                </span>
              </div>
              <div className="text-muted-foreground mt-2 text-sm">
                Empowering artists with high-end production and creative depth.
                Over a decade of experience collaborating globally.
                International work with artists from Austria, Cuba, Brazil,
                Chile, and other countries.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
