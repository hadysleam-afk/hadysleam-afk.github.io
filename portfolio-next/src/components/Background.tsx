"use client";
import { useEffect, useState } from "react";
import { motionReduced } from "../lib/motion";
import { DotGrid } from "./rb";

// Fixed full-page dot field (React Bits DotGrid, WebGL).
// Low-cost fallback: a static CSS dot grid is used for reduced motion, touch/coarse pointers
// and narrow screens. The WebGL field is paused while the tab is hidden.
export default function Background() {
  const [live, setLive] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const q = () =>
      !motionReduced() &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      window.innerWidth >= 900;
    const upd = () => setLive(q());
    upd();
    const vis = () => setPaused(document.hidden);
    window.addEventListener("resize", upd);
    document.addEventListener("visibilitychange", vis);
    return () => {
      window.removeEventListener("resize", upd);
      document.removeEventListener("visibilitychange", vis);
    };
  }, []);

  return (
    <div className={live ? "fx-layer" : "fx-layer fx-static"} aria-hidden="true">
      {live && (
        <DotGrid dotSize={4} gap={26} baseColor="#2a1519" activeColor="#ff3b3b" proximity={150} swell={0.9} glow={0.5} opacity={0.9} clickShock={false} paused={paused} />
      )}
    </div>
  );
}
