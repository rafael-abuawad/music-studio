"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Label } from "./ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="py-10 px-2 flex flex-col items-center">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="font-semibold text-2xl md:text-4xl md:leading-tight">
            Contact us
          </h2>
          <p className="mt-1 text-muted-foreground">
            Whatever your goal - we will get you there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="name" className="text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email" className="text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="phone" className="text-muted-foreground">
                    Phone
                  </Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="country" className="text-muted-foreground">
                    Country
                  </Label>
                  <Input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message" className="text-muted-foreground">
                    Message
                  </Label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project"
                  />
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xs text-muted-foreground">
                  All fields are required
                </p>

                <div className="mt-5">
                  <Button type="submit">
                    Submit
                    <Send className="shrink-0 size-4 transition" />
                  </Button>
                </div>
              </div>
            </form>
          </div>

          <div className="space-y-7">
            <Card className="bg-transparent">
              <CardContent className="flex gap-x-5">
                <MapPin className="shrink-0 size-6 text-muted-foreground" />
                <div className="grow">
                  <h4 className="font-semibold">Our address:</h4>
                  <address className="mt-1 text-neutral-400 text-sm not-italic">
                    300 Bath Street, Tay House
                    <br />
                    Glasgow G2 4JR, United Kingdom
                  </address>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-transparent">
              <CardContent className="flex gap-x-5">
                <Mail className="shrink-0 size-6 text-muted-foreground" />
                <div className="grow">
                  <h4 className="font-semibold">Email us:</h4>
                  <a
                    className="mt-1 text-muted-foreground text-sm hover:text-neutral-200 focus:outline-hidden focus:text-neutral-200"
                    href="mailto:hello@example.so"
                  >
                    hello@example.so
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
