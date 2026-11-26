// Motion preference: explicit user choice (localStorage "motion" = "on" | "off") wins,
// otherwise the OS prefers-reduced-motion setting decides.
export function motionChoice() {
  try { const v = localStorage.getItem("motion"); return v === "on" || v === "off" ? v : null; } catch { return null; }
}
export function osReduced() {
  return typeof window !== "undefined" && (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
}
export function motionReduced() {
  const c = motionChoice();
  return c ? c === "off" : osReduced();
}
