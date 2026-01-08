import { Link } from "react-router-dom";
import { Code, Globe, Smartphone, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";

const services = [
  {
    id: "software",
    icon: Code,
    title: "Custom Software Systems",
    description: "We design and build custom software solutions tailored to your unique business requirements. Our systems are built to scale, integrate seamlessly with your existing tools, and drive operational efficiency.",
    benefits: [
      "Business management systems tailored to your workflow",
      "Enterprise tools for internal operations",
      "Industry-specific platforms (gyms, education, HR, logistics)",
      "Integration with existing systems and third-party APIs",
      "Scalable architecture for future growth",
    ],
    useCases: [
      "Gym & Fitness Center Management",
      "HR & Payroll Systems",
      "Inventory & Warehouse Management",
      "Customer Relationship Management (CRM)",
      "School Management Systems",
    ],
  },
  {
    id: "web",
    icon: Globe,
    title: "Website Design & Development",
    description: "Create a powerful online presence with our professional web development services. We build fast, responsive, and SEO-optimized websites that convert visitors into customers.",
    benefits: [
      "Corporate and business websites",
      "Landing pages and marketing sites",
      "Admin dashboards and portals",
      "SEO-optimized, responsive designs",
      "Modern UI/UX with engaging animations",
    ],
    useCases: [
      "Company Portfolio Websites",
      "E-commerce Platforms",
      "SaaS Landing Pages",
      "Admin Dashboards",
      "Booking & Reservation Systems",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Application Development",
    description: "Reach your customers wherever they are with powerful mobile applications. We build native and cross-platform apps that deliver exceptional user experiences.",
    benefits: [
      "Android & iOS native development",
      "Cross-platform apps (React Native, Flutter)",
      "User-focused UI/UX design",
      "Backend and API integration",
      "Push notifications and real-time features",
    ],
    useCases: [
      "E-commerce Mobile Apps",
      "Service Booking Apps",
      "Social & Community Apps",
      "Fitness & Health Apps",
      "Educational Apps",
    ],
  },
  {
    id: "ai",
    icon: Zap,
    title: "AI Automation & Intelligent Workflows",
    description: "Harness the power of artificial intelligence to automate processes, gain insights from data, and make smarter business decisions. Our AI solutions are designed to integrate seamlessly with your operations.",
    benefits: [
      "Business process automation",
      "AI-powered email and CRM automation",
      "Intelligent workflow optimization",
      "Data-driven decision systems",
      "Integration with existing tools and platforms",
    ],
    useCases: [
      "Customer Support Automation",
      "Lead Qualification & Scoring",
      "Document Processing & Analysis",
      "Predictive Analytics",
      "Smart Scheduling & Routing",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        label="Our Services"
        title={
          <>
            Comprehensive{" "}
            <span className="text-secondary">Digital Solutions</span>
          </>
        }
        description="From custom software to AI automation, we provide end-to-end technology solutions that help businesses thrive in the digital age."
      />

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-32 ${index % 2 === 1 ? "bg-muted/30" : ""}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {service.title}
                  </h2>
                </div>
                <p className="text-black text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-4">What We Offer</h3>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-primary hover:bg-primary/90 rounded-full px-6">
                  <Link to="/contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Use Cases</h3>
                  <div className="space-y-3">
                    {service.useCases.map((useCase, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-secondary/30 transition-colors"
                      >
                        <span className="text-foreground">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with our comprehensive digital solutions.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8" asChild>
            <Link to="/contact">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
