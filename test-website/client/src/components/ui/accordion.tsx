import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root 
      data-slot="accordion" 
      className={cn("space-y-2 sm:space-y-3", className)}
      {...props} 
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border-b-0 rounded-xl overflow-hidden",
        "bg-white/95 backdrop-blur-sm",
        "border border-summer-blue/20",
        "shadow-sm hover:shadow-md transition-shadow duration-300",
        "data-[state=open]:shadow-md",
        "summer-accordion-item",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4",
          "px-4 sm:px-5 md:px-6 py-4 sm:py-5",
          "text-left text-sm sm:text-base font-medium",
          "rounded-xl",
          "transition-all duration-300 ease-out",
          "outline-none",
          "hover:bg-summer-blue/5 hover:text-summer-orange",
          "focus-visible:ring-2 focus-visible:ring-summer-blue/50 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "[&[data-state=open]>svg]:rotate-180",
          "[&[data-state=open]]:bg-summer-yellow/5",
          "group",
          "min-h-[48px] sm:min-h-[44px]",
          "touch-manipulation",
          "summer-accordion-trigger",
          className
        )}
        {...props}
      >
        <span className="flex-1 transition-colors duration-200 group-hover:text-summer-orange">
          {children}
        </span>
        <ChevronDownIcon 
          className={cn(
            "pointer-events-none size-5 sm:size-4 shrink-0",
            "text-summer-blue/60",
            "transition-all duration-300 ease-out",
            "group-hover:text-summer-orange group-hover:scale-110",
            "[&[data-state=open]]:text-summer-orange"
          )} 
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        "transition-all duration-300 ease-out",
        "summer-accordion-content"
      )}
      {...props}
    >
      <div 
        className={cn(
          "px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 pt-0",
          "text-sm sm:text-base text-muted-foreground",
          "border-t border-summer-blue/10",
          "bg-gradient-to-b from-transparent to-summer-green/5",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

// Summer-themed accordion with card styling
function SummerAccordion({ 
  className,
  ...props 
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root 
      data-slot="summer-accordion" 
      className={cn(
        "rounded-2xl overflow-hidden",
        "bg-gradient-to-br from-white/98 via-summer-green/5 to-summer-pink/5",
        "border-2 border-summer-blue/30",
        "shadow-lg",
        "p-2 sm:p-3",
        className
      )}
      {...props} 
    />
  );
}

function SummerAccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="summer-accordion-item"
      className={cn(
        "rounded-xl overflow-hidden mb-2 last:mb-0",
        "bg-white/90 backdrop-blur-sm",
        "border border-summer-blue/20",
        "shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:shadow-md hover:border-summer-blue/30",
        "data-[state=open]:shadow-lg data-[state=open]:border-summer-orange/30",
        "summer-accordion-item",
        className
      )}
      {...props}
    />
  );
}

function SummerAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="summer-accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4",
          "px-5 sm:px-6 py-4 sm:py-5",
          "text-left font-semibold",
          "rounded-xl",
          "transition-all duration-300 ease-out",
          "outline-none",
          "hover:bg-gradient-to-r hover:from-summer-yellow/10 hover:to-summer-orange/10",
          "focus-visible:ring-2 focus-visible:ring-summer-blue focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "[&[data-state=open]>svg]:rotate-180",
          "[&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-summer-yellow/15 [&[data-state=open]]:to-summer-orange/15",
          "group",
          "min-h-[52px] sm:min-h-[48px]",
          "touch-manipulation",
          "-webkit-tap-highlight-color: transparent",
          className
        )}
        {...props}
      >
        <span className="flex-1 transition-all duration-200 group-hover:translate-x-1">
          {children}
        </span>
        <div className={cn(
          "flex items-center justify-center",
          "size-8 sm:size-7 rounded-full",
          "bg-summer-blue/10 group-hover:bg-summer-orange/20",
          "transition-all duration-300"
        )}>
          <ChevronDownIcon 
            className={cn(
              "pointer-events-none size-5 shrink-0",
              "text-summer-blue group-hover:text-summer-orange",
              "transition-all duration-300 ease-out",
              "group-hover:scale-110"
            )} 
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function SummerAccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="summer-accordion-content"
      className={cn(
        "overflow-hidden",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        "transition-all duration-300 ease-out"
      )}
      {...props}
    >
      <div 
        className={cn(
          "px-5 sm:px-6 pb-5 sm:pb-6 pt-4",
          "text-muted-foreground",
          "border-t border-summer-blue/10",
          "bg-gradient-to-b from-summer-yellow/5 via-summer-green/5 to-transparent",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

// Enhanced mobile-specific accordion styling for summer theme
const mobileAccordionStyles = `
  /* Summer Accordion Enhancements - Rounded Corners & Smooth Transitions */
  .summer-accordion-item {
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .summer-accordion-trigger {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-select: none;
  }
  
  .summer-accordion-trigger:hover {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(255, 165, 0, 0.08));
  }
  
  .summer-accordion-trigger[data-state="open"] {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.12), rgba(255, 165, 0, 0.12));
  }
  
  .summer-accordion-content {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Mobile Responsive Styles - Tablet (768px) */
  @media (max-width: 768px) {
    .summer-accordion-item {
      border-radius: 10px;
      margin-bottom: 8px;
    }
    
    .summer-accordion-trigger {
      padding: 1rem 1.25rem;
      min-height: 48px;
      font-size: 0.9375rem;
    }
    
    .summer-accordion-content > div {
      padding: 0 1.25rem 1.25rem;
    }
  }
  
  /* Mobile Responsive Styles - Small (480px) */
  @media (max-width: 480px) {
    .summer-accordion-item {
      border-radius: 8px;
      margin-bottom: 6px;
    }
    
    .summer-accordion-trigger {
      padding: 0.875rem 1rem;
      min-height: 44px;
      font-size: 0.875rem;
      gap: 0.75rem;
    }
    
    .summer-accordion-content > div {
      padding: 0 1rem 1rem;
      font-size: 0.875rem;
    }
  }
  
  /* Extra Small Screens (360px) */
  @media (max-width: 360px) {
    .summer-accordion-item {
      border-radius: 6px;
      margin-bottom: 4px;
    }
    
    .summer-accordion-trigger {
      padding: 0.75rem 0.875rem;
      min-height: 44px;
    }
    
    .summer-accordion-content > div {
      padding: 0 0.875rem 0.875rem;
    }
  }
  
  /* Touch Device Optimizations */
  @media (hover: none) and (pointer: coarse) {
    .summer-accordion-trigger {
      min-height: 48px;
      min-width: 48px;
    }
    
    .summer-accordion-trigger:hover {
      background: inherit;
    }
    
    .summer-accordion-trigger:active {
      transform: scale(0.995);
      -webkit-tap-highlight-color: transparent;
    }
    
    .summer-accordion-item {
      -webkit-tap-highlight-color: rgba(135, 206, 235, 0.1);
    }
  }
  
  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .summer-accordion-item,
    .summer-accordion-trigger,
    .summer-accordion-content {
      transition: none;
    }
    
    .summer-accordion-trigger:active {
      transform: none;
    }
  }
  
  /* High Contrast Mode */
  @media (prefers-contrast: high) {
    .summer-accordion-item {
      border-width: 2px;
      border-color: currentColor;
    }
  }
  
  /* Animation keyframes */
  @keyframes accordion-down {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
      opacity: 1;
    }
  }
  
  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height);
      opacity: 1;
    }
    to {
      height: 0;
      opacity: 0;
    }
  }
  
  .animate-accordion-down {
    animation: accordion-down 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .animate-accordion-up {
    animation: accordion-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .summer-accordion-item {
      background: rgba(30, 41, 59, 0.95);
      border-color: rgba(135, 206, 235, 0.2);
    }
    
    .summer-accordion-trigger:hover {
      background: rgba(255, 215, 0, 0.08);
    }
  }
`;

// Inject mobile accordion styles safely
if (typeof window !== "undefined") {
  const existingStyle = document.getElementById('summer-accordion-styles');
  if (!existingStyle) {
    const style = document.createElement("style");
    style.id = 'summer-accordion-styles';
    style.textContent = mobileAccordionStyles;
    document.head.appendChild(style);
  }
}

export { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent,
  SummerAccordion,
  SummerAccordionItem,
  SummerAccordionTrigger,
  SummerAccordionContent
};