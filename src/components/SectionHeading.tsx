import { Reveal } from "./SignatureLine";

export default function SectionHeading({
  index,
  label,
  title,
  intro,
  align = "left",
}: {
  index: string;
  label: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`eyebrow flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="text-terra">//</span>
        <span>
          {index} — {label}
        </span>
      </p>
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <span
        aria-hidden
        className={`mt-5 block h-0.5 w-16 rounded-full bg-gradient-to-r from-terra via-mustard via-sage to-ocean ${align === "center" ? "mx-auto" : ""}`}
      />
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>
      )}
    </Reveal>
  );
}