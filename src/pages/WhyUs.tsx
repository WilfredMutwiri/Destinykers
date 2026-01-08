import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Zap, HeadphonesIcon, Code, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { FeatureCard } from "@/components/ui/feature-card";
import { HeroSection } from "@/components/ui/hero-section";

const reasons = [
  {
    icon: Code,
    title: "Technical Expertise",
    description: "Our team brings years of experience across multiple technologies and platforms. We stay current with the latest trends and best practices to deliver cutting-edge solutions.",
    details: [
      "Full-stack development expertise",
      "Multiple programming languages and frameworks",
      "Cloud-native architecture knowledge",
      "AI and machine learning capabilities",
    ],
  },
  {
    icon: Users,
    title: "Custom Solutions",
    description: "We don't believe in one-size-fits-all. Every solution we build is tailored to your specific business needs, workflow, and goals.",
    details: [
      "Thorough requirements analysis",
      "Solution design workshops",
      "Iterative development approach",
      "Continuous feedback integration",
    ],
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Our solutions are built to grow with your business. We design for scalability from day one, ensuring your systems can handle increased demand.",
    details: [
      "Microservices architecture",
      "Cloud-ready deployments",
      "Performance optimization",
      "Load handling capabilities",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "We're not just developers – we're partners. Our relationship doesn't end at launch. We provide ongoing support, maintenance, and enhancements.",
    details: [
      "24/7 support options",
      "Regular maintenance updates",
      "Performance monitoring",
      "Continuous improvement",
    ],
  },
];

const additionalBenefits = [
  {
    icon: Shield,
    title: "Security First",
    description: "We implement industry-standard security practices to protect your data and users.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile methodology ensures rapid development cycles and quick time-to-market.",
  },
  {
    icon: Users,
    title: "Transparent Process",
    description: "Regular updates, clear communication, and full visibility into project progress.",
  },
  {
    icon: TrendingUp,
    title: "ROI Focused",
    description: "Every solution is designed to deliver measurable business value and return on investment.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business, challenges, and goals through in-depth consultations.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Our team designs a comprehensive solution architecture and project roadmap.",
  },
  {
    step: "03",
    title: "Development",
    description: "We build your solution using agile methodology with regular demos and feedback cycles.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support and maintenance.",
  },
];

export default function WhyUs() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        label="Why Choose Us"
        title={
          <>
            Your Trusted{" "}
            <span className="text-secondary">Technology Partner</span>
          </>
        }
        description="We combine technical excellence with a deep understanding of business needs to deliver solutions that truly make a difference."
      />

      {/* Main Reasons */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Strengths</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's why businesses choose Destinykers Technologies as their technology partner.
            </p>
          </div>
          <div className="space-y-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <reason.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{reason.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">{reason.description}</p>
                  <ul className="space-y-3">
                    {reason.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] rounded-2xl bg-primary flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center">
                      <reason.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">More Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Additional Reasons to Work With Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A transparent, collaborative approach that ensures project success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-card border border-border"
              >
                <span className="text-5xl font-bold text-secondary/20">
                  {step.step}
                </span>
                <h4 className="text-xl font-semibold text-foreground mt-2 mb-2">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8" asChild>
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
