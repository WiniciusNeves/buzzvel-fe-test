import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StarIcon } from "@/components/ui/icons";
import { learnerAvatars } from "@/content/home";

const RATING_STARS = 5;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="overflow-x-clip bg-cream py-[60px] lg:py-[100px]"
    >
      <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,560px)_minmax(0,500px)] lg:justify-between lg:gap-[60px]">
        <div className="order-2 lg:order-1">
          <Eyebrow className="motion-safe:animate-reveal">Learn at your own pace</Eyebrow>
          <h1
            id="hero-title"
            className="mt-4 font-display text-[2.5rem] leading-[1.1] font-extrabold tracking-[-0.025em] text-ink motion-safe:animate-reveal motion-safe:[animation-delay:80ms] md:text-[3.5rem] lg:text-[4rem]"
          >
            Build skills that actually move you forward.
          </h1>
          <p className="mt-6 max-w-[480px] text-base leading-[1.625rem] text-muted motion-safe:animate-reveal motion-safe:[animation-delay:160ms] lg:text-lg lg:leading-7">
            Practical courses taught by people who do the work every day. Learn design, technology,
            business and more — one focused lesson at a time.
          </p>
          <div className="mt-10 flex flex-col gap-3 motion-safe:animate-reveal motion-safe:[animation-delay:240ms] sm:flex-row">
            <ButtonLink href="#categories">Explore courses</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              See how it works
            </ButtonLink>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 sm:justify-start">
            <AvatarStack avatars={learnerAvatars} size={32} />
            <p className="text-[0.9375rem] text-muted">
              <strong className="font-semibold text-ink">Trusted by 24,000+</strong> learners
            </p>
          </div>
        </div>

        <div className="relative order-1 mx-2 lg:order-2 lg:mx-0">
          <div
            aria-hidden="true"
            className="absolute top-6 -right-[18px] bottom-4 w-[89px] rounded-2xl bg-peach lg:top-6 lg:-right-[39px] lg:bottom-7"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-2 -left-4 size-[72px] rounded-full bg-primary-soft lg:bottom-[11px] lg:-left-[45px] lg:size-[106px]"
          />
          <div className="relative aspect-[346/380] overflow-hidden rounded-[20px] md:aspect-[4/3] lg:aspect-[500/520] lg:rounded-3xl">
            <Image
              src="/images/hero-learner.webp"
              alt="Smiling learner with glasses following a lesson on her laptop"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 500px, (min-width: 768px) 672px, calc(100vw - 56px)"
              className="object-cover"
            />
          </div>
          <p className="absolute top-1.5 -left-2 flex items-center gap-3 rounded-xl bg-white py-3 pr-4 pl-4 text-sm text-ink shadow-card lg:top-4 lg:-left-[22px]">
            <span className="rounded-lg bg-primary-soft px-1 py-1 font-display font-bold text-primary">
              120+
            </span>
            expert-led courses
          </p>
          <p className="absolute -right-2 bottom-9 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-ink shadow-card lg:-right-[57px] lg:bottom-9">
            <span className="flex gap-0.5 text-sun" aria-hidden="true">
              {Array.from({ length: RATING_STARS }, (_, index) => (
                <StarIcon key={index} width={14} height={14} />
              ))}
            </span>
            <span>
              <span className="sr-only">Rated </span>4.9 avg rating
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}
