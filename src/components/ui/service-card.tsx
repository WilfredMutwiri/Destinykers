import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative p-6 md:p-8 rounded-2xl bg-card border border-border",
        "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
        "transition-all duration-300",
        className
      )}
    >
      <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-7 w-7 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
