import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { HeroSection } from "@/components/ui/hero-section";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and approaches to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your success is our priority. We work closely with you to understand and meet your needs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical practices in all our dealings.",
  },
];

const differentiators = [
  {
    title: "Technical Expertise",
    description: "Our team brings deep technical knowledge across multiple platforms and technologies.",
  },
  {
    title: "Business Understanding",
    description: "We don't just code - we understand business challenges and create solutions that address them.",
  },
  {
    title: "End-to-End Service",
    description: "From initial consultation to ongoing support, we're with you every step of the way.",
  },
  {
    title: "Agile Methodology",
    description: "Our flexible approach ensures we can adapt quickly to changing requirements.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        label="About Us"
        title={
          <>
            Empowering Businesses Through{" "}
            <span className="text-secondary">Technology</span>
          </>
        }
        description="Destinykers Technologies is a technology solutions company that designs and builds custom software systems, websites, mobile applications, and AI-powered automations for businesses."
      />

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Building the Future, One Solution at a Time
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Destinykers Technologies was founded with a simple yet powerful vision: to help 
                  businesses harness the power of technology to achieve their goals. We started as 
                  a small team of passionate developers and have grown into a full-service technology 
                  partner serving clients across Africa and beyond.
                </p>
                <p>
                  Our journey has been marked by a commitment to excellence, innovation, and client 
                  satisfaction. We've helped startups launch their first products, enabled established 
                  businesses to modernize their operations, and partnered with enterprises on digital 
                  transformation initiatives.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible, leveraging cutting-edge 
                  technologies including AI and automation to deliver solutions that truly make a difference.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-primary p-8 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-secondary flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 rounded-2xl bg-primary text-white">
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                To empower businesses through innovative, reliable, and intelligent digital 
                solutions that drive growth and operational excellence.
              </p>
            </div>
            <div className="p-8 md:p-12 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become a trusted technology partner for businesses by delivering impactful 
                software solutions and AI automation across Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do and how we work with our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:border-secondary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Difference</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical excellence with business acumen to deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
              <FeatureCard
                key={index}
                icon={Award}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
