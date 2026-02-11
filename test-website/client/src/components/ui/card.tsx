import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm summer-card",
        "transition-all duration-300 ease-out",
        className
      )}
      {...props}
    />
  );
}

function SummerCard({ 
  className, 
  children,
  variant = "default",
  ...props 
}: React.ComponentProps<"div"> & { 
  variant?: "default" | "elevated" | "outlined" | "glass" 
}) {
  return (
    <div
      data-slot="card"
      data-variant={variant}
      className={cn(
        "text-card-foreground flex flex-col gap-4 sm:gap-6 rounded-2xl transition-all duration-300 ease-out summer-card",
        "hover:shadow-lg hover:-translate-y-1",
        {
          "p-4 sm:p-6 md:p-8": variant === "default",
          "p-4 sm:p-6 md:p-8 shadow-md hover:shadow-xl": variant === "elevated",
          "p-4 sm:p-6 md:p-8 border-2 bg-transparent backdrop-blur-sm": variant === "outlined",
          "p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-md": variant === "glass",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function ChristmasCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "christmas-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm summer-card",
        "transition-all duration-300 ease-out",
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
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-4 sm:px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-4 sm:[.border-b]:pb-6",
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
      className={cn("leading-none font-semibold text-base sm:text-lg", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm sm:text-base", className)}
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
      className={cn("px-4 sm:px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-4 sm:px-6 [.border-t]:pt-4 sm:[.border-t]:pt-6", className)}
      {...props}
    />
  );
}

function CardImage({ 
  className, 
  alt = "",
  src,
  aspectRatio = "video",
  ...props 
}: React.ComponentProps<"div"> & { 
  alt?: string;
  src?: string;
  aspectRatio?: "square" | "video" | "wide" | "portrait";
}) {
  return (
    <div
      data-slot="card-image"
      className={cn(
        "overflow-hidden rounded-t-2xl",
        {
          "aspect-square": aspectRatio === "square",
          "aspect-video": aspectRatio === "video",
          "aspect-[21/9]": aspectRatio === "wide",
          "aspect-[3/4]": aspectRatio === "portrait",
        },
        className
      )}
      {...props}
    >
      {src && (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      )}
    </div>
  );
}

// Enhanced mobile-specific card styling for summer theme with light backgrounds and subtle shadows
const mobileCardStyles = `
  /* Summer Card Enhancements - Light Backgrounds & Subtle Shadows */
  .summer-card {
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.98) 0%, 
      rgba(255, 255, 255, 0.95) 50%,
      rgba(255, 251, 245, 0.92) 100%
    );
    border: 1.5px solid rgba(135, 206, 235, 0.25);
    border-radius: 16px;
    box-shadow: 
      0 4px 6px rgba(0, 0, 0, 0.02),
      0 8px 24px rgba(135, 206, 235, 0.08),
      0 0 0 1px rgba(255, 255, 255, 0.5) inset;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  
  /* Subtle gradient overlay for depth */
  .summer-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(152, 251, 152, 0.02) 0%,
      rgba(255, 105, 180, 0.02) 50%,
      rgba(135, 206, 235, 0.03) 100%
    );
    pointer-events: none;
    z-index: 0;
  }
  
  /* Content should be above overlay */
  .summer-card > * {
    position: relative;
    z-index: 1;
  }
  
  /* Hover effects */
  .summer-card:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 8px 12px rgba(0, 0, 0, 0.03),
      0 16px 40px rgba(135, 206, 235, 0.12),
      0 0 0 1px rgba(255, 255, 255, 0.8) inset;
    border-color: rgba(135, 206, 235, 0.35);
  }
  
  /* Focus visible for accessibility */
  .summer-card:focus-within {
    outline: none;
    box-shadow: 
      0 0 0 3px rgba(135, 206, 235, 0.4),
      0 8px 24px rgba(135, 206, 235, 0.15);
  }
  
  /* Christmas card variant */
  .christmas-card {
    background: linear-gradient(135deg, 
      rgba(255, 250, 250, 0.98) 0%, 
      rgba(255, 245, 245, 0.95) 100%
    );
    border: 1.5px solid rgba(220, 53, 69, 0.2);
    box-shadow: 
      0 4px 6px rgba(0, 0, 0, 0.02),
      0 8px 24px rgba(220, 53, 69, 0.06);
  }
  
  /* Mobile Responsive Styles - Tablet (768px) */
  @media (max-width: 768px) {
    .summer-card {
      padding: 1.25rem;
      margin: 0.5rem 0;
      border-radius: 14px;
      box-shadow: 
        0 2px 4px rgba(0, 0, 0, 0.02),
        0 6px 16px rgba(135, 206, 235, 0.06);
    }
    
    .summer-card:hover {
      transform: translateY(-2px);
    }
    
    .christmas-card {
      padding: 1.25rem;
      margin: 0.5rem 0;
      border-radius: 14px;
    }
  }
  
  /* Mobile Responsive Styles - Small (480px) */
  @media (max-width: 480px) {
    .summer-card {
      padding: 1rem;
      margin: 0.375rem 0;
      border-radius: 12px;
      border-width: 1px;
      box-shadow: 
        0 1px 3px rgba(0, 0, 0, 0.02),
        0 4px 12px rgba(135, 206, 235, 0.05);
    }
    
    .summer-card:hover {
      transform: none;
      box-shadow: 
        0 1px 3px rgba(0, 0, 0, 0.02),
        0 4px 12px rgba(135, 206, 235, 0.05);
    }
    
    .christmas-card {
      padding: 1rem;
      margin: 0.375rem 0;
      border-radius: 12px;
      border-width: 1px;
    }
  }
  
  /* Extra Small Screens (360px) */
  @media (max-width: 360px) {
    .summer-card {
      padding: 0.875rem;
      border-radius: 10px;
    }
    
    .christmas-card {
      padding: 0.875rem;
      border-radius: 10px;
    }
  }
  
  /* Touch Device Optimizations */
  @media (hover: none) and (pointer: coarse) {
    .summer-card {
      -webkit-tap-highlight-color: rgba(135, 206, 235, 0.1);
      transition: box-shadow 0.2s ease;
    }
    
    .summer-card:hover {
      transform: none;
    }
    
    .summer-card:active {
      transform: scale(0.995);
      box-shadow: 
        0 1px 2px rgba(0, 0, 0, 0.02),
        0 2px 8px rgba(135, 206, 235, 0.08);
      -webkit-tap-highlight-color: transparent;
    }
  }
  
  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .summer-card {
      transition: none;
    }
    
    .summer-card:hover,
    .summer-card:active {
      transform: none;
    }
  }
  
  /* High Contrast Mode */
  @media (prefers-contrast: high) {
    .summer-card {
      border-width: 2px;
      border-color: currentColor;
    }
    
    .christmas-card {
      border-width: 2px;
      border-color: currentColor;
    }
  }
  
  /* Dark mode support for cards */
  @media (prefers-color-scheme: dark) {
    .summer-card {
      background: linear-gradient(135deg, 
        rgba(30, 41, 59, 0.98) 0%, 
        rgba(30, 41, 59, 0.95) 50%,
        rgba(25, 35, 50, 0.92) 100%
      );
      border-color: rgba(135, 206, 235, 0.2);
    }
  }
  
  /* Card variant styles */
  .summer-card[data-variant="elevated"] {
    box-shadow: 
      0 6px 12px rgba(0, 0, 0, 0.04),
      0 12px 32px rgba(135, 206, 235, 0.1);
  }
  
  .summer-card[data-variant="glass"] {
    backdrop-filter: blur(12px);
    background: rgba(255, 255, 255, 0.75);
  }
  
  .summer-card[data-variant="outlined"] {
    background: transparent;
    box-shadow: none;
    border-width: 2px;
  }
`;

// Inject mobile card styles safely
if (typeof window !== "undefined") {
  const existingStyle = document.getElementById('summer-card-styles');
  if (!existingStyle) {
    const style = document.createElement("style");
    style.id = 'summer-card-styles';
    style.textContent = mobileCardStyles;
    document.head.appendChild(style);
  }
}

export {
  Card,
  SummerCard,
  ChristmasCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardImage,
};