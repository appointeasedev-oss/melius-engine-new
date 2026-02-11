import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm summer-card",
        className
      )}
      {...props}
    />
  );
}

function ChristmasCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "christmas-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm summer-card",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

// Add mobile-specific card styling
const mobileCardStyles = `
  @media (max-width: 768px) {
    .summer-card {
      padding: 1rem;
      margin: 0.5rem 0;
      border-radius: 0.5rem;
    }
    
    .christmas-card {
      padding: 1rem;
      margin: 0.5rem 0;
      border-radius: 0.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .summer-card {
      padding: 0.75rem;
      margin: 0.5rem 0;
      border-radius: 0.5rem;
    }
    
    .christmas-card {
      padding: 0.75rem;
      margin: 0.5rem 0;
      border-radius: 0.5rem;
    }
  }
`;

// Inject mobile card styles
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.textContent = mobileCardStyles;
  document.head.appendChild(style);
}

export {
  Card,
  ChristmasCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};