import { Link } from "react-router-dom";
import { ArrowRight, Code, Globe, Smartphone, Zap, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { HeroSection } from "@/components/ui/hero-section";

const services = [
  {
    icon: Code,
    title: "Custom Software Systems",
    description: "Build powerful business management systems, enterprise tools, and industry-specific platforms tailored to your needs.",
    features: ["Business management", "Enterprise tools", "Industry platforms"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Create stunning, SEO-optimized websites that convert visitors into customers with modern, responsive designs.",
    features: ["Corporate websites", "Landing pages", "Admin dashboards"],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Develop user-focused Android & iOS apps with seamless backend integration and beautiful UI/UX.",
    features: ["Android & iOS", "Cross-platform", "API integration"],
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Implement intelligent workflows and automation that streamline operations and boost efficiency.",
    features: ["Process automation", "AI-powered CRM", "Data systems"],
  },
];

const testimonials = [
  {
    quote: "Destinykers Technologies transformed our business operations with their custom software solution. The team was professional, responsive, and delivered beyond our expectations.",
    author: "James Okonkwo",
    role: "CEO",
    company: "FitLife Gyms",
    rating: 5,
  },
  {
    quote: "Their AI automation solution reduced our manual processes by 70%. The ROI was visible within the first month. Highly recommend their services.",
    author: "Sarah Adeyemi",
    role: "Operations Director",
    company: "Swift Logistics",
    rating: 5,
  },
  {
    quote: "The mobile app they built for us has received amazing feedback from our users. Clean design, smooth performance, and excellent support throughout.",
    author: "Michael Chen",
    role: "Product Manager",
    company: "EduTech Solutions",
    rating: 5,
  },
];

const portfolioPreview = [
  {
    title: "FitPro Gym Management System",
    category: "Custom Software",
    description: "Complete gym management platform with member tracking, billing, and scheduling features.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Swift Logistics Platform",
    category: "Web Application",
    description: "Real-time delivery tracking and fleet management system for logistics companies.",
    technologies: ["Next.js", "Python", "AWS"],
  },
  {
    title: "EduLearn Mobile App",
    category: "Mobile App",
    description: "Cross-platform educational app with interactive courses and progress tracking.",
    technologies: ["React Native", "Firebase", "AI"],
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with Background */}
      <HeroSection
        label="🚀 Innovative Digital Solutions"
        title={
          <>
            Building Digital Solutions That{" "}
            <span className="text-secondary">Drive Growth</span>
          </>
        }
        description="Custom software systems, websites, mobile applications, and AI-powered automations for businesses across Africa and beyond."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-12" asChild>
            <Link to="/contact">
              Book a Demo
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-12 border-white/30 text-white hover:bg-white/10" asChild>
            <Link to="/services">
              Get a Quote
            </Link>
          </Button>
        </div>
      </HeroSection>

      {/* Products/Services Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-lg uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              From custom software to AI automation. Use them together or choose what fits your business.
            </p>
          </div>

          {/* Service Cards - Alternating layout */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs font-medium rounded-full uppercase tracking-wider mb-4">
                    {service.features[0]}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
                    <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* increments stats on scroll */}
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold text-lg uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary/90 mt-3 mb-6">
                Your Trusted Technology Partner
              </h2>
              <p className="text-secondary mb-8">
                We combine technical expertise with a deep understanding of business needs to deliver solutions that truly make a difference.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom-tailored solutions for your specific needs",
                  "Experienced team with proven track record",
                  "Scalable architecture for future growth",
                  "Ongoing support and maintenance",
                  "Transparent communication throughout",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-primary hover:bg-primary/90 rounded-full px-6">
                  <Link to="/why-us">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-2xl p-8 border border-border">
                <div className="bg-card rounded-xl p-8 shadow-lg">
                  <div className="w-20 h-20 rounded-2xl bg-secondary mx-auto mb-6 flex items-center justify-center">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground text-center mb-2">Innovation First</h3>
                  <p className="text-muted-foreground text-center text-sm">
                    We leverage cutting-edge technologies to build future-proof solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-lg uppercase tracking-wider">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary/90 mt-3 mb-4">
              Featured Projects
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Take a look at some of our recent work and see how we've helped businesses achieve their goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioPreview.map((project, index) => (
              <PortfolioCard
                key={index}
                title={project.title}
                category={project.category}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8" asChild>
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-lg uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary/90 mt-3 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link to="/testimonials">
                Read More Reviews
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how we can help you achieve your goals with custom digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12" asChild>
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 h-12 border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
