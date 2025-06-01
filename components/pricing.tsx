import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const pricingTabs = [
  {
    value: "mixing",
    label: "Mixing",
    items: [
      {
        title: "1-5 stems",
        price: "$120",
        image: "/images/abstract/dddepth-301.jpg",
      },
      {
        title: "6-10 stems",
        price: "$240",
        image: "/images/abstract/dddepth-322.jpg",
      },
      {
        title: "10-15 stems",
        price: "$360",
        image: "/images/abstract/dddepth-323.jpg",
      },
    ],
  },
  {
    value: "mastering",
    label: "Mastering",
    items: [
      {
        title: "Single Track",
        price: "$60",
        image: "/images/abstract/dddepth-324.jpg",
      },
      {
        title: "EP (up to 5 tracks)",
        price: "$250",
        image: "/images/abstract/dddepth-329.jpg",
      },
      {
        title: "Album (up to 12 tracks)",
        price: "$500",
        image: "/images/abstract/dddepth-333.jpg",
      },
    ],
  },
  {
    value: "bundles",
    label: "Mix & Master Bundles",
    items: [
      {
        title: "Single Track Bundle",
        price: "$160",
        image: "/images/abstract/dddepth-338.jpg",
      },
      {
        title: "EP Bundle",
        price: "$600",
        image: "/images/abstract/dddepth-337.jpg",
      },
    ],
  },
  {
    value: "beat-production",
    label: "Custom Beat Production",
    items: [
      {
        title: "Custom Beat",
        price: "$300",
        image: "/images/abstract/dddepth-340.jpg",
      },
    ],
  },
  {
    value: "beat-mix-package",
    label: "Beat + Mix Package",
    items: [
      {
        title: "Beat + Mix",
        price: "$400",
        image: "/images/abstract/dddepth-344.jpg",
      },
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-10 px-2">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Pricing</h2>
      <Tabs defaultValue={pricingTabs[0].value} className="w-full">
        <TabsList className="mb-6 hidden md:flex">
          {pricingTabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsList className="mb-6 flex flex-wrap justify-start md:hidden max-w-screen h-auto gap-2 p-2">
          {pricingTabs.map((tab) => (
            <div key={tab.value}>
              <TabsTrigger
                value={tab.value}
                className="rounded-full px-4 py-2 text-sm font-semibold border border-muted-foreground/20 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary transition-colors"
              >
                {tab.label}
              </TabsTrigger>
            </div>
          ))}
        </TabsList>
        {pricingTabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="flex flex-col gap-6">
              {tab.items.map((item, idx) => (
                <Card key={idx} className="overflow-hidden py-0">
                  <div
                    className="h-48 w-full bg-cover bg-center flex items-end"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="p-6 h-full w-full bg-gradient-to-t from-black/60 to-black/0">
                      <div className="flex flex-col h-full justify-end">
                        <CardTitle className="text-xl mb-1 text-white">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-white">
                          {item.price}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <p className="text-xs text-muted-foreground mt-4">
        All stems included. Mix optimized for streaming. 100% remote.
      </p>
    </section>
  );
}
