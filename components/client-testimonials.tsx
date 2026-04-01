import { SectionHeader } from "@/components/section-header";
import {
  Card,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    image: "https://placehold.co/300x300",
    text: '"MiddleCity Records transformed my raw ideas into a polished masterpiece. Their attention to detail and commitment to my vision were exceptional."',
    author: "Noah Thompson, Singer-Songwriter",
  },
  {
    image: "https://placehold.co/300x300",
    text: '"The team at MiddleCity Records truly understands the artist\'s perspective. Their expertise and collaborative approach resulted in a sound that exceeded my expectations."',
    author: "Olivia Bennett, Pop Artist",
  },
  {
    image: "https://placehold.co/300x300",
    text: '"Working with MiddleCity Records was a game-changer for my music career. Their professionalism and dedication to quality are unmatched."',
    author: "Owen Hayes, Hip-Hop Producer",
  },
];

export function ClientTestimonials() {
  return (
    <section className="landing-section-reveal animate-in fade-in slide-in-from-bottom-4 py-10 px-2 duration-700">
      <SectionHeader title="Client Testimonials" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((item, idx) => (
          <Card
            key={idx}
            className="flex flex-col items-center p-6 transition-[box-shadow,border-color] duration-300 hover:border-primary/15 hover:shadow-md"
          >
            <Image
              src={item.image}
              alt={item.author}
              className="w-48 h-48 object-cover rounded-lg mb-6 shadow-md"
              width={192}
              height={192}
            />
            <CardDescription className="text-base text-center mb-4">
              {item.text}
            </CardDescription>
            <CardTitle className="text-muted-foreground text-sm text-center font-normal">
              - {item.author}
            </CardTitle>
          </Card>
        ))}
      </div>
    </section>
  );
}
