import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { stats, testimonial } from "@/content/home";

export function Testimonial() {
  return (
    <section
      id="testimonials"
      aria-label="What learners say"
      className="bg-white py-[60px] lg:py-[100px]"
    >
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,600px)_minmax(0,401px)] lg:items-center lg:justify-between">
        <figure className="reveal">
          <span
            aria-hidden="true"
            className="block h-8 font-display text-[4rem] leading-[0.9] font-extrabold text-primary"
          >
            ”
          </span>
          <blockquote className="mt-4 font-display text-xl leading-8 font-medium tracking-[-0.02em] text-ink lg:mt-5 lg:text-[1.875rem] lg:leading-[2.75rem]">
            <p>{testimonial.quote}</p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4 lg:mt-10">
            <Image
              src={testimonial.author.avatar.src}
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-full object-cover"
            />
            <span>
              <span className="block font-display text-base leading-7 font-bold text-ink">
                {testimonial.author.name}
              </span>
              <span className="block text-sm leading-6 text-subtle">{testimonial.author.role}</span>
            </span>
          </figcaption>
        </figure>

        <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-6 lg:border-l lg:border-line lg:py-0 lg:pl-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex reveal flex-col-reverse justify-end">
              <dt className="mt-1 text-sm leading-6 text-subtle">{stat.label}</dt>
              <dd className="font-display text-[2.5rem] leading-[1.1] font-extrabold tracking-[-0.03em] text-primary lg:text-[4rem] lg:leading-[4.375rem]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
