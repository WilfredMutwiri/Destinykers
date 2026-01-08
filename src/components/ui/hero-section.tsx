import { ReactNode } from "react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  label: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export function HeroSection({ label, title, description, children }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            {label}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
