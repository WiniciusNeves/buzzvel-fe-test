import type { ImageAsset } from "@/types/media";

export const learnerAvatars = [
  { src: "/images/avatars/avatar-1.jpg", alt: "Smiling learner with her hair tied up" },
  { src: "/images/avatars/avatar-2.jpg", alt: "Learner with short dark hair smiling" },
  { src: "/images/avatars/avatar-3.jpg", alt: "Learner in a dark suit" },
] as const satisfies readonly ImageAsset[];

export const communityAvatars = [
  ...learnerAvatars,
  { src: "/images/avatars/avatar-4.jpg", alt: "Learner with long dark hair" },
] as const satisfies readonly ImageAsset[];

export type Category = {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
};

export const categories = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: "#featured-course",
  },
  {
    number: "02",
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
    href: "#featured-course",
  },
  {
    number: "03",
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
    href: "#featured-course",
  },
  {
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: "#featured-course",
  },
] as const satisfies readonly Category[];

export const featuredCourse = {
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: { name: "Maya Chen", role: "Senior Product Designer" },
  facts: ["8 lessons", "2h 40min", "Intermediate"],
  image: {
    src: "/images/featured-course.jpg",
    alt: "Designer arranging colourful material samples and prototypes on a worktable",
  },
} as const;

export type StepVisual = "focus" | "experience" | "practice";

export type Step = {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly visual: StepVisual;
};

export const steps = [
  {
    number: "01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    visual: "focus",
  },
  {
    number: "02",
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
    visual: "experience",
  },
  {
    number: "03",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    visual: "practice",
  },
] as const satisfies readonly Step[];

export const testimonial = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  author: {
    name: "Alex Morgan",
    role: "Product Manager",
    avatar: { src: "/images/avatars/alex-morgan.jpg", alt: "Alex Morgan" },
  },
} as const;

export type Stat = {
  readonly value: string;
  readonly label: string;
};

export const stats = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
] as const satisfies readonly Stat[];

export type CollagePhoto = {
  readonly src: string;
  readonly alt: string;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
};

export const collageFrame = { width: 530, height: 522 } as const;

export const collagePhotos = [
  {
    src: "/images/people/student-waving.jpg",
    alt: "Student waving during an online class",
    x: 35,
    y: 106,
    width: 103,
    height: 154,
  },
  {
    src: "/images/people/study-group.jpg",
    alt: "Group of students working together around a laptop",
    x: 0,
    y: 273,
    width: 138,
    height: 207,
  },
  {
    src: "/images/people/student-reading.jpg",
    alt: "Student in a hoodie reading a book",
    x: 154,
    y: 26,
    width: 103,
    height: 170,
  },
  {
    src: "/images/people/music-lesson.jpg",
    alt: "Teacher and student singing together during a music lesson",
    x: 154,
    y: 209,
    width: 103,
    height: 172,
  },
  {
    src: "/images/people/student-notes.jpg",
    alt: "Student taking notes next to a tablet",
    x: 154,
    y: 394,
    width: 103,
    height: 128,
  },
  {
    src: "/images/people/graduate.jpg",
    alt: "Graduate in cap and gown holding a diploma",
    x: 273,
    y: 34,
    width: 103,
    height: 137,
  },
  {
    src: "/images/people/home-office.jpg",
    alt: "Learner studying at a desk at home",
    x: 273,
    y: 184,
    width: 103,
    height: 138,
  },
  {
    src: "/images/people/video-call.jpg",
    alt: "Teacher giving a lesson over a video call",
    x: 273,
    y: 335,
    width: 103,
    height: 154,
  },
  {
    src: "/images/people/student-campus.jpg",
    alt: "Student holding folders on campus",
    x: 391,
    y: 86,
    width: 128,
    height: 205,
  },
  {
    src: "/images/people/student-hijab.jpg",
    alt: "Student with a coffee cup and a book",
    x: 391,
    y: 304,
    width: 103,
    height: 132,
  },
] as const satisfies readonly CollagePhoto[];

export const contactChannels = {
  email: "contact@luma.com",
  responseTime: "Up to 24 hours on business days",
} as const;
