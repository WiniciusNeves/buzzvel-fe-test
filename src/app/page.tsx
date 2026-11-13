import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Categories } from "@/components/sections/Categories";
import { Contact } from "@/components/sections/Contact";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { People } from "@/components/sections/People";
import { Testimonial } from "@/components/sections/Testimonial";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <People />
        <Contact />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
