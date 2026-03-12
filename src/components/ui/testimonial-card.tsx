import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "reveal-on-scroll p-6 md:p-8 rounded-2xl bg-card border border-border",
        "hover:border-primary/50 transition-colors duration-300",
        className
      )}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-primary text-primary"
          />
        ))}
      </div>
      <blockquote className="text-foreground text-lg leading-relaxed mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
          <span className="text-primary-foreground font-semibold text-lg">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}
