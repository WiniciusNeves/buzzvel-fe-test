import { SiteHeader } from "@/components/layout/SiteHeader";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const previewAvatars = [
  { src: "/images/avatars/avatar-1.webp", alt: "" },
  { src: "/images/avatars/avatar-2.webp", alt: "" },
  { src: "/images/avatars/avatar-3.webp", alt: "" },
] as const;

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Section tone="cream">
          <SectionHeading
            level={1}
            eyebrow="Learn at your own pace"
            title="Build skills that actually move you forward."
            description="Base components preview. Sections are implemented in the next step."
            className="max-w-[560px]"
          />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#categories">Explore courses</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              See how it works
            </ButtonLink>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <AvatarStack avatars={previewAvatars} size={32} />
            <p className="text-[0.9375rem] text-muted">
              <strong className="font-semibold text-ink">Trusted by 24,000+</strong> learners
            </p>
          </div>
        </Section>
        <Section tone="primary">
          <SectionHeading
            tone="inverse"
            eyebrow="Most popular this month"
            title="Designing products people understand."
            className="max-w-[536px]"
          />
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <ButtonLink href="#categories" variant="sun">
              View course
            </ButtonLink>
            <ArrowLink href="#categories">Browse all courses</ArrowLink>
          </div>
        </Section>
      </main>
    </>
  );
}
