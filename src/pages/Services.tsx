import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingCart,
  WalletCards,
  CalendarDays,
  Boxes,
  LayoutDashboard,
  Smartphone,
  Bot,
  Cpu,
  Search,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";

const services = [
  {
    icon: ShoppingCart,
    title: "E-commerce Website Development",
    description:
      "High-conversion online stores designed for Kenyan buying behavior, mobile browsing, and trust-first checkout.",
    deliverables: [
      "Product catalog and category architecture",
      "M-Pesa, card, and payment gateway integration",
      "Order workflow and customer notifications",
      "Delivery zones and logistics tracking setup",
    ],
  },
  {
    icon: WalletCards,
    title: "M-Pesa and Payment Automation",
    description:
      "Custom payment workflows using Safaricom Daraja APIs for collection, confirmation, and reconciliation.",
    deliverables: [
      "STK push integration",
      "Transaction status handling",
      "Automated receipts and references",
      "Back-office transaction dashboard",
    ],
  },
  {
    icon: CalendarDays,
    title: "Booking and Reservation Systems",
    description:
      "Practical booking flows for clinics, legal consults, gyms, tours, and service businesses.",
    deliverables: [
      "Real-time availability calendar",
      "Appointment confirmation workflows",
      "SMS and email reminders",
      "Admin booking management panel",
    ],
  },
  {
    icon: Boxes,
    title: "Inventory and Operations Tools",
    description:
      "Custom software to reduce manual work in stock control, order fulfillment, and internal reporting.",
    deliverables: [
      "Inventory movement tracking",
      "Low-stock and reorder alerts",
      "Supplier and purchase logs",
      "Audit-friendly export reporting",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "SME Dashboards and Portals",
    description:
      "Internal systems for saccos, lending teams, and service firms that need visibility and control.",
    deliverables: [
      "Role-based access and workflows",
      "KPI reporting modules",
      "Document and client record management",
      "Custom forms and process automation",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Business Websites",
    description:
      "Premium websites with strong copy, speed optimization, and lead-focused page structure.",
    deliverables: [
      "Conversion-ready landing sections",
      "SEO and local discovery setup",
      "Analytics instrumentation",
      "CMS or edit-friendly content flows",
    ],
  },
  {
    icon: Bot,
    title: "AI Agents and Chatbot Development",
    description:
      "Custom AI assistants for lead qualification, support, and customer interactions on web, WhatsApp, or internal portals.",
    deliverables: [
      "Website and WhatsApp chatbot setup",
      "Knowledge base and FAQ training",
      "Lead capture and qualification logic",
      "Human handoff and conversation analytics",
    ],
  },
  {
    icon: Cpu,
    title: "Business Automation with AI",
    description:
      "AI-powered workflows that reduce manual repetitive work and accelerate operations across sales, support, and admin.",
    deliverables: [
      "Automated document and email workflows",
      "Smart task routing and follow-ups",
      "CRM and back-office automation",
      "Operational reporting and alerts",
    ],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Technical and on-page SEO improvements to increase visibility, drive qualified traffic, and improve local discoverability.",
    deliverables: [
      "Technical SEO audit and fixes",
      "Keyword mapping and on-page optimization",
      "Schema, metadata, and internal linking",
      "Performance and Core Web Vitals tuning",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <HeroSection
        label="Services"
        title={
          <>
            Digital products engineered for <span className="text-gradient">measurable business ROI</span>
          </>
        }
        description="From websites to AI agents and SEO, every service is built to improve conversion, speed operations, and support growth."
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=80"
      >
        <Button className="gradient-bg text-white rounded-full px-8 h-12 hover:opacity-90" asChild>
          <Link to="/contact">Get Custom Proposal</Link>
        </Button>
      </HeroSection>

      <section className="reveal-on-scroll py-20 md:py-24 section-fade">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <article key={service.title} className="surface-panel p-7">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-white mb-3">{service.title}</h2>
                <p className="text-slate-300 mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-100">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-20 md:py-24 bg-slate-950 border-y border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need the right stack for your business type?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            We can combine website, payment, and operations features into one delivery plan based on your budget and timeline.
          </p>
          <Button size="lg" className="gradient-bg text-white rounded-full px-8 h-12 hover:opacity-90" asChild>
            <Link to="/contact">
              Talk to the Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
