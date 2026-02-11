import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Spinner } from "@/components/ui/spinner";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        christmas: "christmas-button",
        summer:
          "summer-button rounded-xl font-semibold text-white transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-summer-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-lg gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-11 rounded-xl px-6 has-[>svg]:px-4 text-base",
        xl: "h-12 rounded-xl px-8 text-lg",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        "touch": "min-h-[44px] min-w-[44px] px-5 py-3 text-base",
      },
      iconPosition: {
        left: "flex-row-reverse",
        right: "flex-row",
        only: "",
      },
    },
    compoundVariants: [
      {
        iconPosition: ["left", "right"],
        class: "[&_.button-content]:hidden sm:[&_.button-content]:inline-flex",
      },
      {
        variant: "summer",
        size: "lg",
        class: "rounded-2xl",
      },
      {
        variant: "summer",
        size: "xl",
        class: "rounded-2xl",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      iconPosition: "right",
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  iconPosition?: "left" | "right" | "only";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      iconPosition,
      asChild = false,
      loading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const showSpinner = loading || props["aria-busy"] === "true";

    return (
      <Comp
        ref={ref}
        data-slot="button"
        data-variant={variant}
        disabled={disabled || loading}
        className={cn(
          buttonVariants({ variant, size, iconPosition, className }),
          {
            "cursor-not-allowed": loading,
            "justify-center": iconPosition === "only",
            "relative [&_.button-children]:invisible [&_.spinner]:visible": loading,
            "touch-manipulation": variant === "summer",
          }
        )}
        {...props}
      >
        {showSpinner && (
          <Spinner
            className={cn(
              "spinner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              {
                "relative left-0 top-0 translate-x-0 translate-y-0":
                  iconPosition === "left" || iconPosition === "right",
                "mx-auto": !children,
                "size-4": size === "sm",
                "size-5": size === "lg" || size === "xl" || size === "touch",
              }
            )}
            aria-hidden="true"
          />
        )}
        <span className="button-children inline-flex items-center gap-2">
          {children}
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

// Enhanced mobile-specific button styling for summer theme with better touch targets and effects
const mobileButtonStyles = `
  /* Summer Button Enhancements - Rounded Corners & Hover Effects */
  .summer-button {
    border-radius: 12px;
    font-weight: 600;
    letter-spacing: 0.01em;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-select: none;
  }
  
  .summer-button:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      0 8px 25px rgba(255, 215, 0, 0.35),
      0 4px 15px rgba(255, 105, 180, 0.25),
      0 0 30px rgba(135, 206, 235, 0.2);
  }
  
  .summer-button:active {
    transform: translateY(0) scale(0.98);
    transition-duration: 0.1s;
  }
  
  .summer-button:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(135, 206, 235, 0.5),
      0 4px 15px rgba(255, 215, 0, 0.3),
      0 0 20px rgba(255, 105, 180, 0.2);
  }
  
  /* Mobile Touch-Friendly Styles */
  @media (max-width: 768px) {
    .summer-button {
      padding: 0.875rem 1.5rem;
      min-height: 48px;
      min-width: 48px;
      font-size: 1rem;
      border-radius: 14px;
      gap: 0.5rem;
    }
    
    .summer-button.lg,
    .summer-button[data-size="lg"] {
      padding: 1rem 2rem;
      min-height: 52px;
      font-size: 1.125rem;
      border-radius: 16px;
    }
    
    button {
      min-height: 44px;
    }
  }
  
  @media (max-width: 480px) {
    .summer-button {
      padding: 0.75rem 1.25rem;
      min-height: 44px;
      min-width: 44px;
      font-size: 0.9375rem;
      border-radius: 12px;
    }
    
    .summer-button.lg,
    .summer-button[data-size="lg"] {
      padding: 0.875rem 1.5rem;
      min-height: 48px;
      font-size: 1rem;
      border-radius: 14px;
    }
    
    button {
      min-height: 44px;
      font-size: 1rem;
    }
  }
  
  /* Extra small screens */
  @media (max-width: 360px) {
    .summer-button {
      padding: 0.625rem 1rem;
      font-size: 0.875rem;
    }
  }
  
  /* Touch Device Optimizations */
  @media (hover: none) and (pointer: coarse) {
    .summer-button {
      -webkit-tap-highlight-color: rgba(255, 215, 0, 0.2);
      min-height: 48px;
      min-width: 48px;
      padding: 0.875rem 1.5rem;
    }
    
    .summer-button:hover {
      transform: none;
      box-shadow: inherit;
    }
    
    .summer-button:active {
      transform: scale(0.96);
      background: linear-gradient(135deg, #FFA500, #FFD700, #FF69B4);
      -webkit-tap-highlight-color: transparent;
    }
    
    button,
    [role="button"] {
      min-height: 48px;
      min-width: 48px;
    }
  }
  
  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .summer-button {
      transition: none;
    }
    
    .summer-button:hover,
    .summer-button:active {
      transform: none;
    }
  }
  
  /* High Contrast Mode */
  @media (prefers-contrast: high) {
    .summer-button {
      border-width: 3px;
      border-color: currentColor;
    }
  }
`;

// Inject mobile button styles safely
if (typeof window !== "undefined") {
  const existingStyle = document.getElementById('summer-button-styles');
  if (!existingStyle) {
    const style = document.createElement("style");
    style.id = 'summer-button-styles';
    style.textContent = mobileButtonStyles;
    document.head.appendChild(style);
  }
}

export { Button, buttonVariants };