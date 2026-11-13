import type { StepVisual as StepVisualName } from "@/content/home";

type StepVisualProps = {
  visual: StepVisualName;
};

export function StepVisual({ visual }: StepVisualProps) {
  switch (visual) {
    case "focus":
      return (
        <span aria-hidden="true" className="relative block size-14 rounded-full bg-primary-soft">
          <span className="absolute top-2 left-2 size-[22px] rounded-md bg-primary" />
        </span>
      );
    case "experience":
      return (
        <span
          aria-hidden="true"
          className="relative block size-14 rotate-[10deg] rounded-xl bg-peach md:-translate-x-1"
        >
          <span className="absolute top-6 left-6 size-7 -rotate-[10deg] rounded-full bg-coral" />
        </span>
      );
    case "practice":
      return (
        <span aria-hidden="true" className="relative block size-14 rounded-xl bg-sun-soft">
          <span className="absolute top-7 left-2 size-5 rounded-full bg-[#e9d659]" />
        </span>
      );
    default: {
      const unreachable: never = visual;
      return unreachable;
    }
  }
}
