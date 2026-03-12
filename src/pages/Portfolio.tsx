import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { HeroSection } from "@/components/ui/hero-section";

const projects = [
  {
    title: "Debsploit Solutions",
    category: "Corporate Website",
    description:
      "Structured corporate website with clear service communication and trust-building content hierarchy.",
    technologies: ["Responsive Design", "Lead Capture", "SEO Structure"],
    projectUrl: "https://debsploitsolutions.com/",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kamuganka",
    category: "Professional Portfolio",
    description:
      "Personal brand site for professional visibility, authority positioning, and client conversion.",
    technologies: ["Portfolio UX", "Brand Messaging", "Clean UI"],
    projectUrl: "https://kamuganka.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Wake and Shine",
    category: "Service Business",
    description:
      "Service-focused website with strong CTA flow and mobile-oriented interaction model.",
    technologies: ["Conversion Layout", "Mobile First", "Fast Performance"],
    projectUrl: "https://wakeandshine.co.ke/",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Squidlight",
    category: "Creative Web Presence",
    description:
      "Modern web experience with expressive visual language and compelling brand storytelling.",
    technologies: ["Creative UI", "Motion Design", "Brand Alignment"],
    projectUrl: "https://squidlight.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "FitHub KE",
    category: "Fitness Platform",
    description:
      "Fitness-focused digital experience supporting onboarding and community engagement.",
    technologies: ["Onboarding UX", "User Journey", "Web App UI"],
    projectUrl: "https://fithubke.vercel.app/welcome",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Beach Life Fitness",
    category: "Hospitality and Health",
    description:
      "Brand-forward fitness website aimed at retention, program discovery, and quick customer action.",
    technologies: ["Program Pages", "Conversion CTA", "Lifestyle Branding"],
    projectUrl: "https://beachlifefitness.co.ke/",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <HeroSection
        label="Portfolio"
        title={
          <>
            Proven websites and systems <span className="text-gradient">already delivering value</span>
          </>
        }
        description="Explore live projects we have designed and developed for businesses and professionals."
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80"
      >
        <Button className="gradient-bg text-white rounded-full px-8 h-12 hover:opacity-90" asChild>
          <Link to="/contact">Build My Project</Link>
        </Button>
      </HeroSection>

      <section className="reveal-on-scroll py-20 md:py-24 section-fade">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
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
          <div className="surface-panel p-8 md:p-10 max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">What our project delivery emphasizes</h2>
                <ul className="space-y-3">
                  {[
                    "Business-focused messaging and page hierarchy",
                    "Mobile-first performance and UX quality",
                    "Lead and payment journey optimization",
                    "Scalable structure for future features",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-100">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                {projects.slice(0, 3).map((project) => (
                  <a
                    key={project.title}
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-secondary/40 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-white">{project.title}</p>
                      <p className="text-sm text-slate-300">{project.category}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-secondary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-20 md:py-24 bg-slate-950 border-y border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to be our next case study?</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Tell us your sector, business target, and timeline. We will shape a practical roadmap for launch.
          </p>
          <Button size="lg" className="gradient-bg text-white rounded-full px-8 h-12 hover:opacity-90" asChild>
            <Link to="/contact">
              Start Your Build
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
