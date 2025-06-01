import {
  Card,
  CardHeader,
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
    <section className="py-10 px-2">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Extras & Payments</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {extras.map((item, idx) => (
          <Card
            key={idx}
            className="flex flex-row items-center gap-4 px-6 py-8 border dark:border-primary/10"
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
