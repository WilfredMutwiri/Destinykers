import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock3, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@destinykers.co.ke",
    link: "mailto:info@destinykers.co.ke",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+254 11 5651 863",
    link: "tel:+254115651863",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Moi Avenue, Nairobi, Kenya",
    link: null,
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Fri, 8:30 AM - 6:00 PM",
    link: null,
  },
];

const services = [
  "E-commerce Website",
  "M-Pesa Integration",
  "Booking System",
  "Inventory Dashboard",
  "SME/Fintech Portal",
  "AI Agents and Chatbots",
  "Business Automation with AI",
  "SEO Optimization",
  "General Consultation",
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Project Inquiry: ${formData.service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Company: ${formData.company}\n` +
        `Service: ${formData.service}\n` +
        `Budget: ${formData.budget}\n\n` +
        `Project Details:\n${formData.message}`
    );

    window.location.href = `mailto:info@destinykers.co.ke?subject=${subject}&body=${body}`;

    toast({
      title: "Opening email app",
      description: "Your details were prepared for sending to our team.",
    });

    setIsSubmitting(false);
  };

  return (
    <Layout>
      <HeroSection
        label="Contact"
        title={
          <>
            Let's build your <span className="text-gradient">next growth platform</span>
          </>
        }
        description="Share your business goals and we will propose a practical website or system roadmap."
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="reveal-on-scroll py-20 md:py-24 section-fade">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Talk to us about your project</h2>
                <p className="text-slate-300">
                  Whether you need a complete website rebuild, a payment integration, or a custom system, we can help
                  you move fast with clarity.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <article key={info.title} className="surface-panel p-5 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-slate-300 hover:text-white transition-colors text-sm">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-300 text-sm">{info.value}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <div className="surface-panel p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquareText className="h-5 w-5 text-secondary" />
                  <h3 className="font-semibold text-white">Quick note on response time</h3>
                </div>
                <p className="text-slate-300 text-sm">
                  We normally respond within 24 hours on business days and can schedule a discovery call immediately.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="surface-panel p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Project Brief</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+254..."
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Brand</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your business name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Estimated Budget</Label>
                      <Input
                        id="budget"
                        name="budget"
                        placeholder="KES 150,000 - 400,000"
                        value={formData.budget}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what you want to launch, improve, or automate."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-bg text-white rounded-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Preparing..."
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
