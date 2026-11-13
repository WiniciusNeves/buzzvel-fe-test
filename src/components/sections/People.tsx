import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { collageFrame, collagePhotos } from "@/content/home";

const toPercent = (value: number, total: number) => `${(value / total) * 100}%`;

export function People() {
  return (
    <Section
      id="people"
      tone="cream"
      aria-labelledby="people-title"
      containerClassName="grid items-center gap-10 lg:grid-cols-[minmax(0,530px)_minmax(0,530px)] lg:justify-between lg:gap-[60px]"
    >
      <div className="reveal">
        <SectionHeading
          id="people-title"
          eyebrow="The people"
          title="Meet international students & teachers"
          description="Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer."
        />
        <ButtonLink href="#contact" variant="secondary" className="mt-8">
          Explore teachers and students
        </ButtonLink>
      </div>

      <div
        className="relative mx-auto w-full max-w-[530px] reveal"
        style={{ aspectRatio: `${collageFrame.width} / ${collageFrame.height}` }}
      >
        <div
          aria-hidden="true"
          className="absolute rounded-full bg-primary-soft"
          style={{ left: "2.8%", top: "2.2%", width: "94.3%", height: "95.8%" }}
        />
        <ul>
          {collagePhotos.map((photo) => (
            <li
              key={photo.src}
              className="absolute overflow-hidden rounded-md shadow-photo lg:rounded-lg"
              style={{
                left: toPercent(photo.x, collageFrame.width),
                top: toPercent(photo.y, collageFrame.height),
                width: toPercent(photo.width, collageFrame.width),
                height: toPercent(photo.height, collageFrame.height),
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={`(min-width: 1024px) ${photo.width}px, ${Math.round((photo.width / collageFrame.width) * 100)}vw`}
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
