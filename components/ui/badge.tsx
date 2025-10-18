import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md hover:shadow-lg hover:scale-105",
        secondary:
          "border-transparent bg-gradient-to-r from-secondary to-accent text-secondary-foreground shadow-md hover:shadow-lg hover:scale-105",
        success:
          "border-transparent bg-success/90 text-white shadow-md hover:bg-success hover:scale-105",
        warning:
          "border-transparent bg-warning/90 text-white shadow-md hover:bg-warning hover:scale-105",
        outline: "text-foreground/80 border-primary/30 hover:border-primary hover:bg-primary/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
