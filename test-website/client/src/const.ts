export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

// Summer Theme Constants
export const SUMMER_COLORS = {
  yellow: "#FFD700",
  orange: "#FFA500",
  blue: "#87CEEB",
  green: "#98FB98",
};

export const SUMMER_ANIMATIONS = {
  sunPulse: "pulse 2s infinite",
  wave: "wave 6s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite",
  shimmer: "shimmer 3s infinite",
};

export const SUMMER_ICONS = {
  sun: "☀",
};