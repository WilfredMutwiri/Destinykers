import { Link } from "react-router-dom";
import { ArrowRight, Search, PenTool, Code2, Rocket, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { PageSEO } from "@/components/seo/PageSEO";

const phases = [
  {
    icon: Search,
    title: "Discovery and Strategy",
    time: "Week 1",
    description:
      "We map your goals, ideal customer journey, and operational bottlenecks before writing implementation specs.",
    outputs: ["Project scope", "Feature priorities", "ROI targets", "Technical architecture"],
  },
  {
    icon: PenTool,
    title: "UX and Conversion Design",
    time: "Week 1 - 2",
    description:
      "Your pages and flows are designed for action: purchase, inquiry, booking, or payment completion.",
    outputs: ["Mobile wireframes", "Brand-consistent UI", "Copy direction", "Lead funnel map"],
  },
  {
    icon: Code2,
    title: "Build and Integration",
    time: "Week 2 - 5",
    description:
      "Development covers frontend, backend logic, API integrations, and business automation modules.",
    outputs: ["M-Pesa or payment setup", "Booking/inventory tools", "Admin dashboard", "QA test cycles"],
  },
  {
    icon: Rocket,
    title: "Launch and Training",
    time: "Week 5+",
    description:
      "We deploy your project securely and onboard your team to operate it with confidence from day one.",
    outputs: ["Production deployment", "Team training", "Documentation", "Performance baseline"],
  },
  {
    icon: BarChart3,
    title: "Optimization and Support",
    time: "Ongoing",
    description:
      "After launch, we track conversion and operational metrics to guide iteration and expansion.",
    outputs: ["Monthly improvements", "Feature upgrades", "Support SLAs", "Data insights"],
  },
];

export default function Process() {
  return (
    <Layout>
      <PageSEO
        title="Delivery Process for Website and AI Projects"
        description="Learn Destinykers project process from discovery to launch and optimization for website development, AI automation, and SEO campaigns."
        path="/process"
        keywords={[
          "website development process kenya",
          "ai automation project delivery",
          "seo implementation process",
        ]}
      />
      <HeroSection
        label="Delivery Process"
        title={
          <>
            A clear build process that protects <span className="text-gradient">time, budget, and outcomes</span>
          </>
        }
        description="You get structured execution from discovery to post-launch optimization, with transparent milestones throughout."
        backgroundImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=80"
      >
        <Button className="gradient-bg text-white rounded-full px-8 h-12 hover:opacity-90" asChild>
          <Link to="/contact">Start Discovery</Link>
        </Button>
      </HeroSection>

      <section className="reveal-on-scroll py-20 md:py-24 section-fade">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wider text-sm">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">Transparent execution in every phase</h2>
            <p className="text-slate-300">
              Our workflow is built for startups and SMEs that need speed without sacrificing technical quality.
            </p>
          </div>

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <article key={phase.title} className="surface-panel p-7">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <phase.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-2xl font-semibold text-white">
                        {String(index + 1).padStart(2, "0")}. {phase.title}
                      </h3>
                      <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">
                        {phase.time}
                      </span>
                    </div>
                    <p className="text-slate-300 mb-4">{phase.description}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.outputs.map((output) => (
                        <div key={output} className="flex items-center gap-2 text-sm text-slate-100">
                          <CheckCircle2 className="h-4 w-4 text-secondary" />
                          {output}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="surface-panel p-8 md:p-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want delivery you can trust?</h2>
            <p className="text-lg text-slate-300 mb-8">
              We keep communication tight, milestones concrete, and technical decisions aligned with business ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-bg text-white rounded-full px-8 h-12 hover:opacity-90" asChild>
                <Link to="/contact">
                  Book Project Kickoff
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 h-12 border-slate-500 text-slate-100 hover:bg-white/10"
                asChild
              >
                <Link to="/portfolio">Review Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
