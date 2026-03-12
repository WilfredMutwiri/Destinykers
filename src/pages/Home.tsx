import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingCart,
  Landmark,
  Briefcase,
  HeartPulse,
  Smartphone,
  Bot,
  Cpu,
  Search,
  Wallet,
  CalendarClock,
  Boxes,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const sectors = [
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    insight: "Professional e-commerce experiences often outperform social-only selling with stronger conversion and trust.",
    focus: ["Product catalogs", "M-Pesa checkout", "Delivery tracking", "Stock sync"],
  },
  {
    icon: Landmark,
    title: "Fintech & SME Tools",
    insight: "Kenya's fintech wave creates demand for secure, scalable software and smooth embedded payment flows.",
    focus: ["Sacco portals", "Lending dashboards", "Tax automation", "Merchant tools"],
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    insight: "Most clients search online first, so authority websites and lead systems directly affect pipeline quality.",
    focus: ["Portfolio sites", "Lead capture CRM", "Appointment booking", "Client portals"],
  },
  {
    icon: HeartPulse,
    title: "Hospitality & Health",
    insight: "24/7 digital access is now expected across tourism, fitness, clinics, and modern wellness operations.",
    focus: ["Online reservations", "Telehealth journeys", "Membership management", "Automated reminders"],
  },
];

const capabilities = [
  {
    icon: Smartphone,
    title: "Mobile-First UX",
    description: "Built for Kenyan users where most traffic is mobile and decision speed matters.",
  },
  {
    icon: Wallet,
    title: "M-Pesa & Daraja API",
    description: "Secure collection, payouts, and real-time payment status inside your website or business system.",
  },
  {
    icon: CalendarClock,
    title: "Booking Workflows",
    description: "Appointments, consultations, reservations, and class scheduling from one streamlined flow.",
  },
  {
    icon: Boxes,
    title: "Inventory & Ops Tools",
    description: "Custom dashboards for stock, reporting, tax tracking, and operational automation.",
  },
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    description: "Conversational assistants for support, lead capture, and customer engagement.",
  },
  {
    icon: Cpu,
    title: "AI Business Automation",
    description: "Workflow automation that removes repetitive tasks and improves team productivity.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Technical and content SEO to increase visibility and attract high-intent traffic.",
  },
];

const featuredProjects = [
  {
    title: "Debsploit Solutions",
    category: "Corporate Website",
    description: "Professional technology website focused on trust, service clarity, and conversion-oriented structure.",
    technologies: ["Responsive UI", "SEO", "Lead Funnels"],
    projectUrl: "https://debsploitsolutions.com/",
    image:
      "https://wilfredmutwiri.vercel.app/assets/debsploit-VLnBhaOw.png",
  },
  {
    title: "Wake and Shine",
    category: "Service Brand Site",
    description: "Modern marketing website with clear service journeys and mobile-first engagement design.",
    technologies: ["Brand Story", "Landing UX", "Fast Load"],
    projectUrl: "https://wakeandshine.co.ke/",
    image:
      "https://wilfredmutwiri.vercel.app/assets/wakeandshine-WoUwzMHo.png",
  },
  {
    title: "FitHub KE",
    category: "Fitness Platform",
    description: "Member-facing fitness experience with accessible navigation and onboarding flow.",
    technologies: ["Fitness UX", "Onboarding", "Interactive Content"],
    projectUrl: "https://fithubke.vercel.app/welcome",
    image:
      "https://wilfredmutwiri.vercel.app/assets/fithub-S7j5Pcfz.png",
  },
  {
    title: "Beach Life Fitness",
    category: "Gym Website",
  description:
      "Gym website with clear service presentation, strong conversion focus, and vibrant brand expression.",
    technologies: ["Conversion Design", "Brand Content", "Mobile UI"],
    projectUrl: "https://beachlifefitness.co.ke/",
    image:
      "https://wilfredmutwiri.vercel.app/assets/beachlife-ByS6qUF6.png",
  },
  {
    title: "Kamuganka Portfolio",
    category: "Self-Help_Group Business Website",
    description: "Personal brand site for professional visibility, authority positioning, and client conversion.",
    technologies: ["Portfolio UX", "Clean Layout", "CTA Strategy"],
    projectUrl: "https://kamuganka.vercel.app/",
    image:
      "https://wilfredmutwiri.vercel.app/assets/Kamuganka-2Si7ERHa.png",
  },
  {
    title: "Squidlight",
    category: "Solar Business Website",
    description:
      "Solar company website with creative design, brand-aligned visuals, and engaging user experience.",
    technologies: ["Creative Direction", "Visual Identity", "Web Design"],
    projectUrl: "https://squidlight.vercel.app/",
    image:
      "https://wilfredmutwiri.vercel.app/assets/squidlight-DF9AYzyf.png",
  },
];

const testimonials = [
  {
    quote:
      "Destinykers helped us move from social-only selling to a real online store with smooth mobile checkout. Orders became easier to track immediately.",
    author: "Mercy N.",
    role: "Founder",
    company: "Nairobi Retail Brand",
    rating: 5,
  },
  {
    quote:
      "The booking portal and reminders reduced missed appointments and made operations predictable. Their process was clear from day one.",
    author: "Dr. Brian K.",
    role: "Clinic Director",
    company: "Kiambu Health Practice",
    rating: 5,
  },
  {
    quote:
      "They built the exact SME dashboard we needed for inventory and reports. We now make decisions from data instead of guesswork.",
    author: "Pauline W.",
    role: "Operations Lead",
    company: "SME Distributor",
    rating: 5,
  },
];

export default function Home() {
  return (
    <Layout>
      <HeroSection
        label="Engineering Reliable Digital Solutions"
        title={
          <>
            Websites and systems that turn <span className="text-gradient">traffic into revenue</span>
          </>
        }
        description="We build high-conversion websites, M-Pesa integrated platforms, and custom operational systems for growth-stage Kenyan businesses."
        backgroundImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full px-8 h-12 gradient-bg text-white hover:opacity-90" asChild>
            <Link to="/contact">Book a Strategy Call</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 h-12 border-white/30 text-white hover:bg-white/10"
            asChild
          >
            <Link to="/portfolio">See Live Projects</Link>
          </Button>
        </div>
      </HeroSection>

      <section className="reveal-on-scroll py-12 border-y border-white/10 bg-slate-900/55">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "25%+", label: "Higher conversion with professional sites" },
              { value: "70%", label: "Clients who search online first" },
              { value: "6+", label: "Live projects showcased" },
              { value: "24hrs", label: "Typical first response time" },
            ].map((stat) => (
              <div key={stat.label} className="surface-panel p-5">
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-slate-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-20 md:py-24 section-fade">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wider text-sm">Priority Sectors</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">Built around fast digital adoption in Kenya</h2>
            <p className="text-slate-300">
              We focus where digital tools create immediate revenue, efficiency, and trust: e-commerce, fintech-driven SMEs,
              professional services, and hospitality/health businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sectors.map((sector) => (
              <article key={sector.title} className="surface-panel p-7">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                  <sector.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{sector.title}</h3>
                <p className="text-slate-300 mb-5">{sector.insight}</p>
                <ul className="space-y-2">
                  {sector.focus.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-100">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Button variant="outline" className="border-slate-500 text-slate-100 hover:bg-white/10 rounded-full px-6" asChild>
              <Link to="/industries">
                Explore Sector Playbooks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wider text-sm">What You Get</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">Conversion-driven systems, not just pretty pages</h2>
            <p className="text-slate-300">
              Every build is designed around measurable business outcomes: more leads, faster payment cycles,
              and lower admin overhead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((capability) => (
              <div key={capability.title} className="surface-panel p-6">
                <capability.icon className="h-6 w-6 text-secondary mb-4" />
                <h3 className="font-semibold text-lg text-white mb-2">{capability.title}</h3>
                <p className="text-sm text-slate-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-20 md:py-24 section-fade">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <p className="text-secondary font-semibold uppercase tracking-wider text-sm">Selected Work</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">Websites and systems already live</h2>
              <p className="text-slate-300">A sample of projects delivered across business, fitness, and service categories.</p>
            </div>
            <Button className="rounded-full gradient-bg text-white hover:opacity-90" asChild>
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <PortfolioCard
                key={project.title}
                title={project.title}
                category={project.category}
                description={project.description}
                technologies={project.technologies}
                projectUrl={project.projectUrl}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wider text-sm">Client Confidence</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">Why clients keep referring us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-20 md:py-24 bg-slate-950 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="h-9 w-9 text-secondary mx-auto mb-5 animate-drift" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to scale your digital presence?</h2>
            <p className="text-lg text-slate-300 mb-9">
              We will map your business goals, recommend the right stack, and ship a solution that pays for itself quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg rounded-full px-8 h-12 text-white hover:opacity-90" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 border-slate-500 text-slate-100 hover:bg-white/10"
                asChild
              >
                <Link to="/process">See How We Deliver</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
