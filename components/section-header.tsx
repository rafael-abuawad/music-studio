import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAs?: "h1" | "h2" | "h3";
  titleClassName?: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleAs = "h2",
  titleClassName,
  lead,
  align = "left",
  className,
}: SectionHeaderProps) {
  const Heading = titleAs;

  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "font-display text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.6rem] lg:leading-tight",
          titleClassName,
        )}
      >
        {title}
      </Heading>
      {lead ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
