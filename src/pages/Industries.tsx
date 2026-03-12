import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingBag,
  WalletCards,
  Building,
  Hotel,
  CheckCircle2,
  Smartphone,
  Gauge,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { PageSEO } from "@/components/seo/PageSEO";

const industryCards = [
  {
    icon: ShoppingBag,
    title: "E-commerce and Retail",
    challenge:
      "Retail brands often depend on social media chats that break order flow, stock visibility, and payment confidence.",
    outcome:
      "We build storefronts with product catalogs, mobile checkout, M-Pesa collection, and delivery status tracking.",
    tools: ["Catalog and variant systems", "M-Pesa + card checkout", "Inventory sync", "Logistics dashboards"],
  },
  {
    icon: WalletCards,
    title: "Fintech and SME Operations",
    challenge:
      "SMEs and fintech operators need compliant, reliable systems while growing transaction volume and product complexity.",
    outcome:
      "We design secure portals, lending dashboards, sacco systems, and SME automation platforms that scale cleanly.",
    tools: ["Role-based admin", "Transaction reporting", "Tax and accounting workflows", "Embedded finance APIs"],
  },
  {
    icon: Building,
    title: "Professional Services",
    challenge:
      "Agencies, legal practices, real estate firms, and consultants lose leads when websites lack credibility and booking flow.",
    outcome:
      "We deliver premium service websites with conversion-focused pages, CRM capture, and appointment scheduling.",
    tools: ["Authority pages", "Lead qualification forms", "Calendars and bookings", "Client document portals"],
  },
  {
    icon: Hotel,
    title: "Hospitality and Health",
    challenge:
      "Hotels, clinics, gyms, and tour businesses need always-on digital access to serve modern clients at any time.",
    outcome:
      "We implement reservation and telehealth systems with reminders, digital payments, and operational visibility.",
    tools: ["Booking engines", "Telehealth and consult portals", "Class membership systems", "Reminder automations"],
  },
];

export default function Industries() {
  return (
    <Layout>
      <PageSEO
        title="Industries We Serve in Kenya"
        description="Destinykers builds websites and AI-driven systems for e-commerce, fintech, professional services, hospitality and health businesses in Kenya."
        path="/industries"
        keywords={[
          "ecommerce website kenya",
          "fintech software kenya",
          "health and hospitality booking systems",
          "professional service websites nairobi",
        ]}
      />
      <HeroSection
        label="Industry Expertise"
        title={
          <>
            Solutions mapped to <span className="text-gradient">real Kenyan business models</span>
          </>
        }
        description="We focus on sectors with strong digital demand and clear ROI from websites, payment workflows, and custom systems."
        backgroundImage="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1800&q=80"
      >
        <Button className="gradient-bg text-white rounded-full px-8 h-12 hover:opacity-90" asChild>
          <Link to="/contact">Discuss Your Sector</Link>
        </Button>
      </HeroSection>

      <section className="reveal-on-scroll py-20 md:py-24 section-fade">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {industryCards.map((industry) => (
              <article key={industry.title} className="surface-panel p-7">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-white mb-3">{industry.title}</h2>
                <p className="text-slate-300 mb-3">{industry.challenge}</p>
                <p className="text-slate-100 mb-5">{industry.outcome}</p>
                <ul className="space-y-2">
                  {industry.tools.map((tool) => (
                    <li key={tool} className="flex items-center gap-3 text-slate-100 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="surface-panel p-7">
              <Smartphone className="h-6 w-6 text-secondary mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Mobile-First by Default</h3>
              <p className="text-slate-300 text-sm">
                We design for fast mobile usage first, then extend for desktop operations and reporting.
              </p>
            </div>
            <div className="surface-panel p-7">
              <WalletCards className="h-6 w-6 text-secondary mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">M-Pesa Ready Flows</h3>
              <p className="text-slate-300 text-sm">
                Daraja-powered collection and status handling integrated directly into core user journeys.
              </p>
            </div>
            <div className="surface-panel p-7">
              <Gauge className="h-6 w-6 text-secondary mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">ROI and Efficiency Focus</h3>
              <p className="text-slate-300 text-sm">
                Every build includes metrics planning so you can track leads, orders, and operational savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-20 md:py-24 bg-slate-950 border-y border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a platform tailored to your sector?</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            We can map your current process and recommend a practical rollout with quick wins in under one sprint.
          </p>
          <Button size="lg" className="gradient-bg text-white rounded-full px-8 h-12 hover:opacity-90" asChild>
            <Link to="/contact">
              Request a Discovery Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
