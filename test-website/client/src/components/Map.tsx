/**
 * GOOGLE MAPS FRONTEND INTEGRATION - ESSENTIAL GUIDE
 * 
 * (Previous documentation comments remain unchanged)
 */

/// <reference types="@types/google.maps" />

import { useEffect, useRef, useState } from "react";
import { usePersistFn } from "@/hooks/usePersistFn";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import ErrorBoundary from "@/components/ErrorBoundary";

declare global {
  interface Window {
    google?: typeof google;
  }
}

const API_KEY = import.meta.env.VITE_FRONTEND_FORGE_API_KEY;
const FORGE_BASE_URL =
  import.meta.env.VITE_FRONTEND_FORGE_API_URL ||
  "https://forge.butterfly-effect.dev";
const MAPS_PROXY_URL = `${FORGE_BASE_URL}/v1/maps/proxy`;

interface MapViewProps {
  className?: string;
  initialCenter?: google.maps.LatLngLiteral;
  initialZoom?: number;
  onMapReady?: (map: google.maps.Map) => void;
  onError?: (error: Error) => void;
  onLoading?: (isLoading: boolean) => void;
}

function loadMapScript() {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${MAPS_PROXY_URL}/maps/api/js?key=${API_KEY}&v=weekly&libraries=marker,places,geocoding,geometry`;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => {
      resolve(null);
      script.remove();
    };
    script.onerror = (error) => {
      script.remove();
      reject(new Error(`Failed to load Google Maps script: ${error}`));
    };
    document.head.appendChild(script);
  });
}

export function MapView({
  className,
  initialCenter = { lat: 37.7749, lng: -122.4194 },
  initialZoom = 12,
  onMapReady,
  onError,
  onLoading,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const handleError = (err: Error) => {
    setError(err);
    onError?.(err);
    setIsLoading(false);
  };

  const init = usePersistFn(async () => {
    try {
      setIsLoading(true);
      onLoading?.(true);
      
      await loadMapScript();

      if (!window.google) {
        throw new Error('Google Maps API not loaded');
      }

      if (!mapContainer.current) {
        throw new Error('Map container not found');
      }

      map.current = new window.google.maps.Map(mapContainer.current, {
        zoom: initialZoom,
        center: initialCenter,
        mapTypeControl: true,
        fullscreenControl: true,
        zoomControl: true,
        streetViewControl: true,
        mapId: "DEMO_MAP_ID",
      });

      onMapReady?.(map.current);
    } catch (err) {
      handleError(err instanceof Error ? err : new Error('Failed to initialize map'));
    } finally {
      setIsLoading(false);
      onLoading?.(false);
    }
  });

  useEffect(() => {
    init();
    return () => {
      if (map.current) {
        map.current.unbindAll();
      }
    };
  }, [init]);

  if (error) {
    return (
      <div className={cn("flex items-center justify-center h-[500px]", className)}>
        <div className="text-center p-4">
          <div className="text-red-500 mb-4">Error loading map</div>
          <button
            onClick={init}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className={cn("relative w-full h-[500px]", className)}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-sm flex items-center justify-center">
            <Spinner className="w-8 h-8 text-blue-500" />
          </div>
        )}
        <div ref={mapContainer} className="w-full h-full" />
      </div>
    </ErrorBoundary>
  );
}
