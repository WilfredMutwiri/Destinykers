import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { HeroSection } from "@/components/ui/hero-section";

const projects = [
  {
    title: "FitPro Gym Management System",
    category: "Custom Software",
    description: "Complete gym management platform with member tracking, subscription billing, class scheduling, and trainer management. Includes a mobile app for gym members.",
    technologies: ["React", "Node.js", "PostgreSQL", "React Native"],
  },
  {
    title: "Swift Logistics Platform",
    category: "Web Application",
    description: "Real-time delivery tracking and fleet management system serving over 500 vehicles. Features route optimization, driver apps, and customer notifications.",
    technologies: ["Next.js", "Python", "AWS", "MongoDB"],
  },
  {
    title: "EduLearn Mobile App",
    category: "Mobile App",
    description: "Cross-platform educational app with interactive courses, video lessons, quizzes, and progress tracking. Used by over 10,000 students.",
    technologies: ["React Native", "Firebase", "Node.js"],
  },
  {
    title: "MediCare Hospital System",
    category: "Enterprise Software",
    description: "Comprehensive hospital management system handling patient records, appointments, billing, and pharmacy management for a 200-bed facility.",
    technologies: ["Angular", "Java", "MySQL", "Docker"],
  },
  {
    title: "RetailHub E-commerce",
    category: "E-commerce",
    description: "Multi-vendor marketplace platform with advanced product management, payment processing, and seller analytics dashboard.",
    technologies: ["React", "Stripe", "Node.js", "Redis"],
  },
  {
    title: "PropertyPro Real Estate",
    category: "Web Application",
    description: "Real estate listing and management platform with virtual tours, property comparison, and automated lead generation.",
    technologies: ["Vue.js", "Laravel", "PostgreSQL"],
  },
  {
    title: "HR Connect Platform",
    category: "SaaS Product",
    description: "Cloud-based HR management solution with payroll processing, leave management, and employee self-service portal.",
    technologies: ["React", "Python", "AWS", "Terraform"],
  },
  {
    title: "SmartFarm IoT Dashboard",
    category: "IoT Solution",
    description: "Agricultural monitoring dashboard integrating IoT sensors for crop monitoring, irrigation control, and yield prediction.",
    technologies: ["React", "Python", "MQTT", "TensorFlow"],
  },
  {
    title: "TravelEase Booking App",
    category: "Mobile App",
    description: "Travel booking application with flight and hotel search, itinerary planning, and real-time travel updates.",
    technologies: ["Flutter", "Firebase", "Node.js"],
  },
];

const categories = ["All", "Custom Software", "Web Application", "Mobile App", "E-commerce", "Enterprise Software", "SaaS Product", "IoT Solution"];

export default function Portfolio() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        label="Our Portfolio"
        title={
          <>
            Projects That{" "}
            <span className="text-secondary">Speak Results</span>
          </>
        }
        description="Explore our portfolio of successful projects across various industries. Each project represents our commitment to quality and client success."
      />

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase our expertise across different technologies and industries.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.slice(0, 5).map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <PortfolioCard
                key={index}
                title={project.title}
                category={project.category}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "15+", label: "Industries Served" },
              { value: "98%", label: "Client Retention" },
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your project to life.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
