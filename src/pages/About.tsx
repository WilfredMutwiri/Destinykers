import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Compass, ShieldCheck, Handshake, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { PageSEO } from "@/components/seo/PageSEO";

const values = [
  {
    icon: Compass,
    title: "Practical Innovation",
    description: "We choose tools that fit your business reality, not hype.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Engineering",
    description: "Clean architecture, secure integrations, and production-ready delivery.",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    description: "We collaborate closely with founders and teams beyond launch.",
  },
  {
    icon: Layers3,
    title: "Scalable Foundation",
    description: "Everything is structured for growth, automation, and future expansion.",
  },
];

export default function About() {
  return (
    <Layout>
      <PageSEO
        title="About Destinykers Technologies"
        description="Meet Destinykers Technologies, a Kenyan digital solutions company focused on websites, AI automation, chatbots, SEO and business systems."
        path="/about"
        keywords={[
          "about destinykers technologies",
          "kenyan web and ai company",
          "digital solutions nairobi",
        ]}
      />
      <HeroSection
        label="About Destinykers"
        title={
          <>
            Building digital systems for <span className="text-gradient">ambitious Kenyan businesses</span>
          </>
        }
        description="We are a startup technology team focused on websites and software systems that drive measurable business performance."
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="reveal-on-scroll py-20 md:py-24 section-fade">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-wider text-sm">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">A delivery partner focused on outcomes</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Destinykers Technologies helps businesses move from fragmented digital presence to structured, high-performance
                  online systems.
                </p>
                <p>
                  Our strongest work sits at the intersection of conversion-focused website design, payment integration,
                  and custom operational tools for scaling teams.
                </p>
                <p>
                  We support businesses in retail, fintech, professional services, hospitality, and health with technology
                  that creates immediate practical value.
                </p>
              </div>
            </div>
            <div className="surface-panel p-7">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "6+", label: "Live showcases" },
                  { value: "4", label: "Priority sectors" },
                  { value: "1", label: "Dedicated partner" },
                  { value: "24hrs", label: "Client response" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                    <p className="text-sm text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="surface-panel p-8">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Mission</h3>
              <p className="text-slate-300">
                Deliver websites and digital systems that increase revenue, improve operational efficiency, and strengthen
                customer trust.
              </p>
            </div>
            <div className="surface-panel p-8">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Vision</h3>
              <p className="text-slate-300">
                Become East Africa's trusted partner for practical digital transformation in growth-stage and enterprise-ready businesses.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <article key={value.title} className="surface-panel p-6">
                <value.icon className="h-6 w-6 text-secondary mb-3" />
                <h4 className="font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-sm text-slate-300">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-20 md:py-24 bg-slate-950 border-y border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work with a focused technology partner</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            If you need a team that understands both code quality and business growth, we are ready to collaborate.
          </p>
          <Button size="lg" className="gradient-bg text-white rounded-full px-8 h-12 hover:opacity-90" asChild>
            <Link to="/contact">
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
