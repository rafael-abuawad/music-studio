import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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
    <section className="py-10 px-2">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Client Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, idx) => (
          <Card key={idx} className="flex flex-col items-center p-6">
            <img
              src={item.image}
              alt={item.author}
              className="w-48 h-48 object-cover rounded-lg mb-6 shadow-md"
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
