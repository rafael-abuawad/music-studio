import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MicIcon, MicrowaveIcon, MusicIcon } from "lucide-react";
import { ReactNode } from "react";

const services: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: "Recording",
    description:
      "Capture your best performance with our state-of-the-art recording facilities and experienced engineers.",
    icon: <MicrowaveIcon className="w-6 h-6" />,
  },
  {
    title: "Mixing",
    description:
      "Achieve a polished and balanced sound with our professional mixing services, bringing clarity and impact to your tracks.",
    icon: <MicIcon className="w-6 h-6" />,
  },
  {
    title: "Mastering",
    description:
      "Finalize your music for distribution with our mastering services, ensuring optimal sound quality across all platforms.",
    icon: <MusicIcon className="w-6 h-6" />,
  },
  {
    title: "Beat Production",
    description:
      "Collaborate with our talented producers to create custom beats that perfectly complement your unique style and vision.",
    icon: <MusicIcon className="w-6 h-6" />,
  },
];

export function OurServices() {
  return (
    <section className="py-10 px-2">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Services</h2>
      <h3 className="text-3xl md:text-5xl font-extrabold mb-4 text-primary">
        Professional Music Production Services
      </h3>
      <p className="text-muted-foreground mb-10 max-w-2xl">
        MiddleCity Records offers a comprehensive suite of music production
        services tailored to meet the needs of emerging artists. From recording
        to mastering, we ensure your music sounds its best.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <span className="text-primary mb-2">{service.icon}</span>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
