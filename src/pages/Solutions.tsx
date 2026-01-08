import { Link } from "react-router-dom";
import { ArrowRight, Building2, GraduationCap, Truck, Dumbbell, ShoppingCart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";

const solutions = [
  {
    icon: Dumbbell,
    title: "Gym Management System",
    industry: "Fitness & Wellness",
    description: "Complete gym management platform with member tracking, billing, scheduling, and workout management. Streamline your gym operations and enhance member experience.",
    features: [
      "Member registration and management",
      "Subscription and billing automation",
      "Class scheduling and booking",
      "Trainer and equipment management",
      "Progress tracking and reports",
      "Mobile app for members",
    ],
    problem: "Manual member management, missed payments, scheduling conflicts, and lack of member engagement.",
    solution: "Automated workflows, integrated payments, real-time scheduling, and member engagement tools.",
  },
  {
    icon: GraduationCap,
    title: "Education Management Platform",
    industry: "Education",
    description: "Comprehensive school management system for schools, colleges, and training centers. Manage students, staff, courses, and administration from a single platform.",
    features: [
      "Student information system",
      "Course and curriculum management",
      "Online learning integration",
      "Fee management and invoicing",
      "Attendance and grade tracking",
      "Parent portal and communication",
    ],
    problem: "Paper-based records, fragmented systems, poor parent communication, and administrative burden.",
    solution: "Centralized digital platform, automated processes, real-time communication, and detailed analytics.",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery Platform",
    industry: "Logistics",
    description: "Real-time delivery tracking and fleet management system for logistics companies. Optimize routes, track shipments, and improve delivery efficiency.",
    features: [
      "Real-time shipment tracking",
      "Route optimization",
      "Fleet management",
      "Driver mobile app",
      "Customer notifications",
      "Analytics and reporting",
    ],
    problem: "Inefficient routing, lost packages, poor visibility, and customer complaints.",
    solution: "Smart routing algorithms, GPS tracking, automated notifications, and performance insights.",
  },
  {
    icon: Users,
    title: "HR & Workforce Management",
    industry: "Human Resources",
    description: "Complete HR management solution for businesses of all sizes. Manage employees, payroll, leave, and performance from one integrated platform.",
    features: [
      "Employee database and profiles",
      "Payroll processing",
      "Leave management",
      "Performance reviews",
      "Recruitment pipeline",
      "Time and attendance",
    ],
    problem: "Manual payroll errors, compliance issues, scattered employee data, and inefficient processes.",
    solution: "Automated calculations, compliance-ready reports, centralized data, and streamlined workflows.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    industry: "Retail",
    description: "Custom e-commerce platforms designed to grow with your business. From simple online stores to complex multi-vendor marketplaces.",
    features: [
      "Product catalog management",
      "Shopping cart and checkout",
      "Payment gateway integration",
      "Order and inventory management",
      "Customer accounts and loyalty",
      "Analytics and insights",
    ],
    problem: "Limited online presence, manual order processing, inventory mismatches, and lost sales.",
    solution: "Professional online store, automated inventory, seamless payments, and data-driven decisions.",
  },
  {
    icon: Building2,
    title: "Enterprise Business Systems",
    industry: "Enterprise",
    description: "Custom enterprise solutions designed to handle complex business operations. Integrate multiple departments and processes into a unified system.",
    features: [
      "Custom workflow automation",
      "Multi-department integration",
      "Role-based access control",
      "Document management",
      "Business intelligence",
      "API integrations",
    ],
    problem: "Siloed departments, manual processes, data inconsistencies, and scaling challenges.",
    solution: "Unified platform, automated workflows, single source of truth, and scalable architecture.",
  },
];

export default function Solutions() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        label="Our Solutions"
        title={
          <>
            Industry-Specific{" "}
            <span className="text-secondary">Solutions</span>
          </>
        }
        description="Discover our proven solutions designed to solve real business problems across various industries. Each solution is customizable to fit your specific needs."
      />

      {/* Solutions Grid */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Built for Your Industry
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've developed solutions for various industries, each designed to address specific challenges and drive results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                  <solution.icon className="h-7 w-7 text-white" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium mb-3">
                  {solution.industry}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {solution.description}
                </p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full" asChild>
                  <Link to="/contact">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solution Detail */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">Featured Solution</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Gym Management System
              </h2>
              <p className="text-muted-foreground mb-8">
                Our most popular solution, designed specifically for fitness centers, gyms, and wellness studios.
              </p>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-2">The Problem</h4>
                  <p className="text-muted-foreground">
                    {solutions[0].problem}
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                  <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                  <p className="text-muted-foreground">
                    {solutions[0].solution}
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-primary hover:bg-primary/90 rounded-full px-6">
                  <Link to="/contact">
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Key Features</h3>
              <div className="grid gap-4">
                {solutions[0].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Don't see exactly what you need? We specialize in building custom solutions 
            tailored to your specific requirements.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8" asChild>
            <Link to="/contact">
              Discuss Your Requirements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
