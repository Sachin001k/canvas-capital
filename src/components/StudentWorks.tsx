import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { blackAndWhiteWorks, colourWorks, type StudentWork } from "@/data/studentWorks";

function Grid({ works, mono = false }: { works: StudentWork[]; mono?: boolean }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
      {works.map((w, i) => (
        <Reveal key={w.artist} delay={(i % 5) * 0.04}>
          <figure>
            <a
              href={w.file}
              target="_blank"
              rel="noreferrer"
              className="zoom-wrap relative block aspect-[2/3] overflow-hidden bg-secondary/40"
              aria-label={`Open full-size artwork by ${w.artist}`}
            >
              <img
                src={w.file}
                alt={`${mono ? "Charcoal drawing" : "Oil pastel drawing"} by ${w.artist}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </a>
            <figcaption className="mt-3 font-[family-name:var(--font-display)] italic text-base leading-tight">
              {w.artist}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export function StudentWorks() {
  return (
    <>
      <div id="black-and-white">
        <Section
          eyebrow="Black & white"
          title={
            <>
              Charcoal, by{" "}
              <span className="italic-serif" style={{ color: "var(--forest)" }}>
                other hands.
              </span>
            </>
          }
        >
          <Grid works={blackAndWhiteWorks} mono />
        </Section>
      </div>

      <div id="in-colour">
        <Section
          eyebrow="In colour"
          title={
            <>
              Oil pastels, by{" "}
              <span className="italic-serif" style={{ color: "var(--burgundy)" }}>
                other hands.
              </span>
            </>
          }
        >
          <Grid works={colourWorks} />
        </Section>
      </div>
    </>
  );
}
