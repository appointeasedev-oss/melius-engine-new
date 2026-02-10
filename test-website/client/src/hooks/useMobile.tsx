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
 * Enhanced mobile detection hook with TypeScript generics
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
    useUserAgent = false
  } = options || {};

  const [state, setState] = React.useState<T>(fallback);

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
      setState(getDeviceType());
    };

    // Initial detection
    setState(getDeviceType());

    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    mql.addEventListener("change", handleResize);

    return () => {
      mql.removeEventListener("change", handleResize);
    };
  }, [breakpoint, getDeviceType]);

  return state;
}
