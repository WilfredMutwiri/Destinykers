import {
  ExternalLink,
  LucideIcon,
  Code,
  Globe,
  Smartphone,
  ShoppingCart,
  Building2,
  Cloud,
  Cpu,
  Plane,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Map categories to icons
const categoryIcons: Record<string, LucideIcon> = {
  "Custom Software": Code,
  "Web Application": Globe,
  "Mobile App": Smartphone,
  "E-commerce": ShoppingCart,
  "Enterprise Software": Building2,
  "SaaS Product": Cloud,
  "IoT Solution": Cpu,
  "Travel": Plane,
};

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  projectUrl?: string;
  className?: string;
}

export function PortfolioCard({
  title,
  category,
  description,
  technologies,
  image,
  projectUrl,
  className,
}: PortfolioCardProps) {
  const CategoryIcon = categoryIcons[category] || Code;

  return (
    <article
      className={cn(
        "reveal-on-scroll group relative overflow-hidden rounded-2xl bg-card border border-border",
        "hover:border-secondary/50 transition-all duration-300",
        className
      )}
    >
      {/* Image/Icon Area */}
      <div className="aspect-video bg-primary relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <CategoryIcon className="w-10 h-10 text-white" />
            </div>
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary text-white text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        {projectUrl ? (
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-5 hover:text-secondary transition-colors"
          >
            View Live Project
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : null}
      </div>

      {/* Hover Overlay */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <ExternalLink className="w-5 h-5 text-white" />
        </div>
      </div>
    </article>
  );
}
