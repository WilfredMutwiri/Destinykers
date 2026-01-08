import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { HeroSection } from "@/components/ui/hero-section";

const testimonials = [
  {
    quote: "Destinykers Technologies transformed our business operations with their custom software solution. The team was professional, responsive, and delivered beyond our expectations. Our gym now runs more efficiently than ever.",
    author: "James Okonkwo",
    role: "CEO",
    company: "FitLife Gyms",
    rating: 5,
  },
  {
    quote: "Their AI automation solution reduced our manual processes by 70%. The ROI was visible within the first month. The team took time to understand our workflows and delivered exactly what we needed.",
    author: "Sarah Adeyemi",
    role: "Operations Director",
    company: "Swift Logistics",
    rating: 5,
  },
  {
    quote: "The mobile app they built for us has received amazing feedback from our users. Clean design, smooth performance, and excellent support throughout the development process. Highly recommend!",
    author: "Michael Chen",
    role: "Product Manager",
    company: "EduTech Solutions",
    rating: 5,
  },
  {
    quote: "Working with Destinykers was a game-changer for our hospital. The management system they built handles everything from patient records to pharmacy management seamlessly. Their attention to detail is impressive.",
    author: "Dr. Amina Hassan",
    role: "Medical Director",
    company: "MediCare Hospital",
    rating: 5,
  },
  {
    quote: "We needed a complex e-commerce platform that could handle multiple vendors and they delivered perfectly. The team was always available for questions and made the whole process smooth.",
    author: "David Mensah",
    role: "Founder",
    company: "RetailHub Marketplace",
    rating: 5,
  },
  {
    quote: "Their HR management platform has simplified our entire payroll and leave management process. What used to take days now takes hours. The ongoing support is excellent too.",
    author: "Patricia Nwosu",
    role: "HR Manager",
    company: "TechVentures Inc.",
    rating: 5,
  },
  {
    quote: "The real estate platform they built for us includes features we didn't even know we needed. Virtual tours, lead generation, and a beautiful user interface. Our sales have increased significantly.",
    author: "Emmanuel Kojo",
    role: "Director",
    company: "PropertyPro Realtors",
    rating: 5,
  },
  {
    quote: "From concept to launch, the Destinykers team was professional and delivered on time. Our travel booking app is now used by thousands of customers. They really understand user experience.",
    author: "Linda Obi",
    role: "Co-founder",
    company: "TravelEase",
    rating: 5,
  },
  {
    quote: "The IoT dashboard they created for our farm has revolutionized how we monitor crops. Real-time data, smart irrigation controls, and predictive analytics. Technology meeting agriculture at its best.",
    author: "John Akinwale",
    role: "Farm Owner",
    company: "SmartFarm Agritech",
    rating: 5,
  },
];

const clientLogos = [
  "FitLife Gyms",
  "Swift Logistics",
  "EduTech Solutions",
  "MediCare Hospital",
  "RetailHub",
  "TechVentures",
  "PropertyPro",
  "TravelEase",
];

export default function Testimonials() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        label="Client Reviews"
        title={
          <>
            What Our Clients{" "}
            <span className="text-secondary">Say About Us</span>
          </>
        }
        description="Don't just take our word for it. Here's what our clients have to say about their experience working with Destinykers Technologies."
      />

      {/* Featured Testimonial */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-card border border-border relative">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-secondary/20" />
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 pl-8">
              "Destinykers Technologies has been instrumental in our digital transformation journey. 
              Their team didn't just build us software – they became true partners in understanding 
              our business and delivering solutions that actually solve our problems."
            </blockquote>
            <div className="flex items-center gap-4 pl-8">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-semibold text-xl">J</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg">James Okonkwo</p>
                <p className="text-muted-foreground">CEO, FitLife Gyms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Client Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read what our clients have to say about their experience working with us.
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
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Clients</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Trusted By Leading Businesses
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border flex items-center justify-center hover:border-secondary/30 transition-colors"
              >
                <span className="text-lg font-semibold text-muted-foreground">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Growing List of Happy Clients
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Ready to experience the Destinykers difference? Let's discuss your project.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8" asChild>
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
