import * as React from "react";

export interface UseMobileOptions<T extends boolean | string> {
  /**
   * The breakpoint in pixels for mobile detection (default: 768)
   */
  breakpoint?: number;
  /**
   * Custom device detection function
   */
  detectDevice?: () => T;
  /**
   * Initial value for SSR compatibility (default: false)
   */
  fallback?: T;
  /**
   * When true, performs user agent detection in addition to viewport check
   */
  useUserAgent?: boolean;
  /**
   * Debounce delay for resize events (default: 100ms)
   */
  debounceDelay?: number;
  /**
   * Enable smoother transitions for summer theme animations
   */
  enableSmoothTransitions?: boolean;
  /**
   * Adjust font sizes for mobile devices (default: true)
   */
  adjustFontSizes?: boolean;
  /**
   * Adjust spacing for mobile devices (default: true)
   */
  adjustSpacing?: boolean;
  /**
   * Adjust touch targets for mobile devices (default: true)
   */
  adjustTouchTargets?: boolean;
}

const MOBILE_BREAKPOINT = 768;
const MOBILE_USER_AGENTS = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
];

/**
 * Enhanced mobile detection hook with TypeScript generics and summer theme optimizations
 * @template T - Return type (boolean by default)
 * @param options - Customization options
 * @returns Device detection result
 */
export function useMobile<T extends boolean | string = boolean>(
  options?: UseMobileOptions<T>
): T {
  const {
    breakpoint = MOBILE_BREAKPOINT,
    detectDevice,
    fallback = false as T,
    useUserAgent = false,
    debounceDelay = 100,
    enableSmoothTransitions = true,
    adjustFontSizes = true,
    adjustSpacing = true,
    adjustTouchTargets = true
  } = options || {};

  const [state, setState] = React.useState<T>(fallback);

  // Debounced resize handler for better performance
  const debouncedHandleResize = React.useCallback(
    debounce((handleResize: () => void) => {
      handleResize();
    }, debounceDelay),
    [debounceDelay]
  );

  const isMobileViewport = React.useCallback(() => {
    return window.innerWidth < breakpoint;
  }, [breakpoint]);

  const isMobileUserAgent = React.useCallback(() => {
    const ua = navigator.userAgent;
    return MOBILE_USER_AGENTS.some(pattern => pattern.test(ua));
  }, []);

  const getDeviceType = React.useCallback((): T => {
    if (detectDevice) return detectDevice();
    
    const viewportMatch = isMobileViewport();
    const userAgentMatch = useUserAgent ? isMobileUserAgent() : false;
    
    return (viewportMatch || userAgentMatch) as T;
  }, [detectDevice, isMobileViewport, isMobileUserAgent, useUserAgent]);

  React.useEffect(() => {
    const handleResize = () => {
      debouncedHandleResize(() => {
        setState(getDeviceType());
      });
    };

    // Initial detection
    setState(getDeviceType());

    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    mql.addEventListener("change", handleResize);

    return () => {
      mql.removeEventListener("change", handleResize);
    };
  }, [breakpoint, getDeviceType, debouncedHandleResize]);

  // Adjust font sizes for mobile devices
  React.useEffect(() => {
    if (adjustFontSizes && state) {
      const elements = document.querySelectorAll(
        ".summer-text, .summer-button, .summer-badge, .summer-card .text-xl, .summer-card .text-lg"
      );
      elements.forEach(element => {
        const currentFontSize = parseFloat(getComputedStyle(element).fontSize);
        element.style.fontSize = `${currentFontSize * 0.9}px`;
      });
    }
  }, [state, adjustFontSizes]);

  // Adjust spacing for mobile devices
  React.useEffect(() => {
    if (adjustSpacing && state) {
      const elements = document.querySelectorAll(
        ".summer-card, .summer-button, .summer-badge, .container"
      );
      elements.forEach(element => {
        const currentPadding = parseFloat(getComputedStyle(element).padding);
        element.style.padding = `${currentPadding * 0.8}px`;
      });
    }
  }, [state, adjustSpacing]);

  // Adjust touch targets for mobile devices
  React.useEffect(() => {
    if (adjustTouchTargets && state) {
      const elements = document.querySelectorAll(
        ".summer-button, .summer-badge, .summer-card, button, [role='button']"
      );
      elements.forEach(element => {
        const currentHeight = element.getBoundingClientRect().height;
        const currentWidth = element.getBoundingClientRect().width;
        
        if (currentHeight < 44) {
          element.style.minHeight = "44px";
        }
        if (currentWidth < 44) {
          element.style.minWidth = "44px";
        }
        
        // Ensure proper touch target spacing
        if (getComputedStyle(element).display === "inline-block") {
          element.style.margin = "8px";
        }
      });
    }
  }, [state, adjustTouchTargets]);

  // Smooth transitions for summer theme animations
  React.useEffect(() => {
    if (enableSmoothTransitions) {
      const elements = document.querySelectorAll(
        ".summer-button, .summer-card, .summer-badge, .summer-header"
      );
      elements.forEach(element => {
        element.style.transition = "all 0.3s ease-in-out";
      });
    }
  }, [enableSmoothTransitions]);

  return state;
}

/**
 * Simple debounce utility for better resize performance
 */
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
) {
  let timeout: number;
  return (...args: Parameters<T>): ReturnType<T> => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait) as any;
    return func(...args);
  };
}