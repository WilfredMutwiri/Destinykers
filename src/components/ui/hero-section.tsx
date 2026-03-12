import { ReactNode } from "react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  label: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  backgroundImage?: string;
}

export function HeroSection({
  label,
  title,
  description,
  children,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="reveal-on-scroll relative overflow-hidden hero-mesh">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={backgroundImage || heroBg}
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-black/65 to-black/80" />
        <div className="absolute inset-0 hero-mesh" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold tracking-wide mb-6 border border-white/20">
            {label}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 text-balance">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
