import { AvatarStack } from "@/components/ui/AvatarStack";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { communityAvatars } from "@/content/home";

function Decorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
      <span className="absolute top-4 left-[22px] size-[108px] rounded-full border-2 border-peach" />
      <span className="absolute top-[373px] left-14 size-[120px] rounded-full bg-peach" />
      <span className="absolute top-[43px] left-[328px] size-[60px] rotate-12 rounded-xl border-2 border-peach" />
      <span className="absolute top-[230px] -left-3 size-[56px] rotate-12 rounded-xl bg-peach" />
      <span className="absolute top-[214px] left-[141px] size-7 rounded-full rounded-bl-none bg-peach" />
      <span className="absolute top-[384px] left-[300px] h-[46px] w-[30px] rotate-[18deg] rounded-l-md rounded-r-full bg-peach" />
      <span className="absolute top-[43px] left-[877px] size-8 rounded-full border-2 border-peach" />
      <span className="absolute -top-6 -right-[24px] size-[110px] rotate-[8deg] rounded-2xl bg-peach" />
      <span className="absolute top-[429px] right-[40px] size-8 rounded-full border-2 border-peach" />
      <svg
        className="absolute top-[90px] right-[205px] text-peach"
        width="56"
        height="48"
        viewBox="0 0 56 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M28 4v8M10 12l6 6M46 12l-6 6M4 34h10M42 34h10" />
        <path d="M28 22c4 5 6 8 6 12a6 6 0 0 1-12 0c0-4 2-7 6-12z" fill="currentColor" />
      </svg>
      <svg
        className="absolute top-[230px] right-[90px] text-peach"
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      >
        <path d="M31 4l26 14v26L31 58 5 44V18L31 4z" />
        <path d="M5 18l26 14 26-14M31 32v26" />
      </svg>
      <svg
        className="absolute top-[390px] right-[234px] text-peach"
        width="42"
        height="30"
        viewBox="0 0 42 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="1" y="1" width="40" height="28" rx="2" />
        <path d="M14 1v28M28 1v28M20 10v10M22 10v10" />
      </svg>
    </div>
  );
}

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-sun-soft py-[60px] lg:py-[100px]"
    >
      <Decorations />
      <Container className="relative flex reveal flex-col items-center text-center">
        <AvatarStack avatars={communityAvatars} size={40} ringClassName="ring-sun" />
        <h2
          id="final-cta-title"
          className="mt-0 font-display text-[2.5rem] leading-[1.4] font-extrabold tracking-[-0.025em] text-ink lg:mt-2 lg:text-[3.5rem] lg:leading-[4rem]"
        >
          What will you learn next?
        </h2>
        <p className="mt-2 text-base leading-6 text-muted lg:text-lg lg:leading-7">
          Start with one course. Build from there.
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href="#categories">Explore all courses</ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Join Luma
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
