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
          "summer-button",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
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
        disabled={disabled || loading}
        className={cn(
          buttonVariants({ variant, size, iconPosition, className }),
          {
            "cursor-not-allowed": loading,
            "justify-center": iconPosition === "only",
            "relative [&_.button-children]:invisible [&_.spinner]:visible": loading,
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
                "size-5": size === "lg",
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

// Add mobile-specific button styling for better touch targets
const mobileButtonStyles = `
  @media (max-width: 768px) {
    .summer-button {
      padding: 0.75rem 1.5rem;
      min-height: 44px;
      font-size: 1rem;
    }
    
    button {
      padding: 0.75rem 1.5rem;
      min-height: 44px;
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .summer-button {
      padding: 0.75rem 1.25rem;
      min-height: 42px;
      font-size: 1rem;
    }
    
    button {
      padding: 0.75rem 1.25rem;
      min-height: 42px;
      font-size: 1rem;
    }
  }
`;

// Inject mobile button styles
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.textContent = mobileButtonStyles;
  document.head.appendChild(style);
}

export { Button, buttonVariants };