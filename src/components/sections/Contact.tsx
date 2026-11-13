import type { ReactNode } from "react";
import { ChatIcon, ClockIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactChannels } from "@/content/home";
import { ContactForm } from "@/features/contact/ContactForm";

type ContactItemProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function ContactItem({ icon, title, children }: ContactItemProps) {
  return (
    <li className="flex items-start gap-4 rounded-xl bg-cream p-5">
      <span
        aria-hidden="true"
        className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary"
      >
        {icon}
      </span>
      <span className="text-sm leading-6">
        <span className="block font-medium text-ink">{title}</span>
        <span className="mt-1 block text-subtle">{children}</span>
      </span>
    </li>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      tone="white"
      aria-labelledby="contact-title"
      containerClassName="grid items-center gap-10 lg:grid-cols-[minmax(0,480px)_minmax(0,540px)] lg:justify-between lg:gap-[60px]"
    >
      <div className="reveal">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Get in touch"
          description="Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you."
        />
        <ul className="mt-8 flex flex-col gap-4 lg:mt-10">
          <ContactItem icon={<ChatIcon />} title="Email">
            <a
              href={`mailto:${contactChannels.email}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {contactChannels.email}
            </a>
          </ContactItem>
          <ContactItem icon={<ClockIcon />} title="Response Time">
            {contactChannels.responseTime}
          </ContactItem>
        </ul>
      </div>

      <div className="reveal rounded-[20px] border border-line bg-white p-5 shadow-card sm:p-8 lg:p-10">
        <h3 className="font-display text-[1.375rem] leading-8 font-semibold tracking-[-0.01em] text-ink">
          Contact us
        </h3>
        <p className="mt-2 text-sm leading-6 text-subtle">
          Fill out the fields and we will get in touch.
        </p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
