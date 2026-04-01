import { SectionHeader } from "@/components/section-header";
import {
  Card,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { TimerIcon, RotateCcwIcon, BitcoinIcon } from "lucide-react";

const extras = [
  {
    icon: <TimerIcon className="w-7 h-7 text-primary" />,
    title: "Fast Delivery (48h): +$30",
    description: "",
  },
  {
    icon: <RotateCcwIcon className="w-7 h-7 text-primary" />,
    title: "Extra Revisions (after 2): +$15 each",
    description: "",
  },
  {
    icon: <BitcoinIcon className="w-7 h-7 text-primary" />,
    title: "Accepts USDT crypto payments",
    description: "",
  },
];

export function ExtrasPayments() {
  return (
    <section className="landing-section-reveal animate-in fade-in slide-in-from-bottom-4 py-10 px-2 duration-700">
      <SectionHeader title="Extras & Payments" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {extras.map((item, idx) => (
          <Card
            key={idx}
            className="flex flex-row items-center gap-4 border px-6 py-8 transition-[box-shadow,border-color] duration-300 dark:border-primary/10 hover:border-primary/25 hover:shadow-md"
          >
            <div>{item.icon}</div>
            <div>
              <CardTitle className="text-lg font-semibold">
                {item.title}
              </CardTitle>
              {item.description && (
                <CardDescription>{item.description}</CardDescription>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
