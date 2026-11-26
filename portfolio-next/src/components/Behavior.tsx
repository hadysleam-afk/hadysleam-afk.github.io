"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { motionReduced, motionChoice } from "../lib/motion";

gsap.registerPlugin(ScrollTrigger, SplitText);

const $ = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) => c.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) => Array.from(c.querySelectorAll<T>(s));

export default function Behavior() {
  useEffect(() => {
    const reduce = motionReduced();
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let lang: "en" | "ar" = "en";
    const cleanups: Array<() => void> = [];
    const on = <K extends keyof WindowEventMap>(t: Window | Element | Document, e: string, f: EventListenerOrEventListenerObject, o?: AddEventListenerOptions) => {
      t.addEventListener(e, f, o);
      cleanups.push(() => t.removeEventListener(e, f));
    };

    /* ---------- always on: language, copy, menu, slider, lightbox ---------- */
    const langBtn = $("#langBtn")!;
    const copyBtn = $("#copyBtn")!;
    let splits: SplitText[] = [];

    on(langBtn, "click", () => {
      lang = lang === "en" ? "ar" : "en";
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      splits.forEach((s) => s.revert());
      splits = [];
      $$("[data-en]").forEach((el) => {
        const v = el.getAttribute("data-" + lang);
        if (v !== null) el.innerHTML = v;
      });
      langBtn.textContent = lang === "ar" ? "EN" : "عربي";
      if (!reduce) requestAnimationFrame(() => { splitHeadings(true); ScrollTrigger.refresh(); });
    });

    on(copyBtn, "click", () => {
      const done = () => {
        copyBtn.textContent = lang === "ar" ? "تم النسخ ✓" : "Copied ✓";
        setTimeout(() => (copyBtn.textContent = copyBtn.getAttribute("data-" + lang)), 1800);
      };
      if (navigator.clipboard?.writeText) navigator.clipboard.writeText("hadysleam@gmail.com").then(done).catch(done);
      else done();
    });

    const mBtn = $("#motionBtn");
    if (mBtn) {
      mBtn.setAttribute("aria-pressed", String(!reduce));
      on(mBtn, "click", () => {
        try { localStorage.setItem("motion", reduce ? "on" : "off"); } catch {}
        location.reload();
      });
    }

    const nav = $("#nav")!;
    on($("#burger")!, "click", () => nav.classList.toggle("nav-open"));
    $$("#nav .nav-links a").forEach((a) => on(a, "click", () => nav.classList.remove("nav-open")));

    // slider (SolarMind): first image is visible without JS, JS only rotates it
    const sl = $("#slider");
    if (sl) {
      const imgs = $$("img", $(".slides", sl)!);
      const dots = $$("button", $(".dots", sl)!);
      const cap = $("#slideCap");
      let cur = 0;
      let tm: ReturnType<typeof setTimeout>;
      const DUR = 3600;
      sl.style.setProperty("--dur", DUR + "ms");
      const go = (n: number) => {
        cur = (n + imgs.length) % imgs.length;
        imgs.forEach((im, i) => { im.classList.remove("on"); if (i === cur) { void im.offsetWidth; im.classList.add("on"); } });
        dots.forEach((d, i) => { d.classList.remove("on"); if (i === cur) { void d.offsetWidth; d.classList.add("on"); } });
        if (cap) cap.textContent = imgs[cur].getAttribute("data-cap");
        clearTimeout(tm);
        if (!reduce) tm = setTimeout(() => go(cur + 1), DUR);
      };
      dots.forEach((d, i) => on(d, "click", () => go(i)));
      const io = new IntersectionObserver((es) => { if (es[0].isIntersecting && !reduce) go(cur); else clearTimeout(tm); }, { threshold: 0.25 });
      io.observe(sl);
      cleanups.push(() => { io.disconnect(); clearTimeout(tm); });
    }

    const lb = document.createElement("div");
    lb.className = "lb";
    lb.innerHTML = "<img alt=''>";
    document.body.appendChild(lb);
    cleanups.push(() => lb.remove());
    const lbi = $<HTMLImageElement>("img", lb)!;
    $$<HTMLImageElement>(".slides img,.shot img,.mini-media img").forEach((im) =>
      on(im, "click", () => { lbi.src = im.currentSrc || im.src; lbi.alt = im.alt; lb.classList.add("open"); }),
    );
    on(lb, "click", () => lb.classList.remove("open"));
    on(window, "keydown", ((e: KeyboardEvent) => { if (e.key === "Escape") lb.classList.remove("open"); }) as EventListener);

    // pointer spotlight on cards
    if (fine) {
      $$(".proj,.mini,.cell").forEach((el) =>
        on(el, "pointermove", ((e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--mx", e.clientX - r.left + "px");
          el.style.setProperty("--my", e.clientY - r.top + "px");
        }) as EventListener, { passive: true }),
      );
    }

    // pause looping CSS animations while their section is off screen
    const heroEl = $("#top"), mqEl = $(".marquee");
    const vio = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.target === heroEl) document.body.classList.toggle("hero-off", !e.isIntersecting);
      else document.body.classList.toggle("mq-off", !e.isIntersecting);
    }));
    if (heroEl) vio.observe(heroEl);
    if (mqEl) vio.observe(mqEl);
    cleanups.push(() => vio.disconnect());

    /* ---------- motion (skipped entirely with reduced motion; content is visible without it) ---------- */
    const headings = () => $$("section h2, .contact h2");
    function splitHeadings(instant = false) {
      headings().forEach((h) => {
        const sp = new SplitText(h, { type: "words", mask: "words", wordsClass: "sw" });
        splits.push(sp);
        const tween = gsap.from(sp.words, { yPercent: 110, rotate: 4, duration: 0.9, ease: "power4.out", stagger: 0.06, paused: true });
        if (instant) tween.play();
        else ScrollTrigger.create({ trigger: h, start: "top 88%", once: true, onEnter: () => tween.play() });
      });
    }

    let lenis: Lenis | null = null;
    let ctx: gsap.Context | null = null;
    let tickerFn: ((t: number) => void) | null = null;

    if (!reduce) {
      lenis = new Lenis({ lerp: 0.09, smoothWheel: true, anchors: { offset: -64 } });
      lenis.on("scroll", ScrollTrigger.update);
      tickerFn = (t) => lenis!.raf(t * 1000);
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);

      ctx = gsap.context(() => {
        // hero intro (elements are visible in CSS; from() hides them only while animating)
        const tl = gsap.timeline({ defaults: { ease: "power3.out" }, paused: true });
        tl.from(".mega span", { clipPath: "inset(0 100% 0 0)", duration: 1.2, ease: "power3.inOut" })
          .from(".hello", { y: 26, opacity: 0, duration: 0.7 }, "-=0.7")
          .from(".name", { scale: 0.9, opacity: 0, duration: 0.7 }, "-=0.55")
          .from(".role,.hero-desc,.hero-cta", { y: 24, opacity: 0, duration: 0.7, stagger: 0.12 }, "-=0.45")
          .from(".hero-right", { y: 40, opacity: 0, duration: 0.9 }, "-=0.9")
          .from(".stats .stat", { y: 24, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4");

        // cinematic intro curtain (added by JS only, so content is visible if scripts fail)
        const cur = document.createElement("div");
        cur.className = "curtain";
        cur.setAttribute("aria-hidden", "true");
        cur.innerHTML = '<div class="cur-l">HADY.</div><div class="cur-n">0</div><div class="cur-bar"><i></i></div>';
        document.body.appendChild(cur);
        cleanups.push(() => cur.remove());
        const cn = $(".cur-n", cur)!, cb = $<HTMLElement>(".cur-bar i", cur)!, cl = $(".cur-l", cur)!;
        const co = { v: 0 };
        let started = false;
        const go = () => { if (started) return; started = true; tl.play(); };
        const safety = setTimeout(() => { go(); cur.remove(); }, 4200);
        cleanups.push(() => clearTimeout(safety));
        gsap.timeline({ onComplete: () => { cur.remove(); clearTimeout(safety); } })
          .from(cl, { yPercent: 110, duration: 0.7, ease: "power4.out" })
          .to(co, { v: 100, duration: 0.9, ease: "power2.inOut", onUpdate: () => { cn.textContent = String(Math.round(co.v)); cb.style.transform = "scaleX(" + co.v / 100 + ")"; } }, 0.15)
          .to(cl, { scale: 1.08, duration: 0.35, ease: "power2.in" })
          .to(cur, { clipPath: "inset(0 0 100% 0)", duration: 0.85, ease: "power4.inOut", onStart: go }, "-=0.1");

        // scroll reveals
        $$(".rv:not(.stat)").forEach((el) => {
          gsap.from(el, { y: 64, opacity: 0, scale: 0.97, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 92%", once: true } });
        });
        $$(".matrix li").forEach((el, i) => {
          gsap.from(el, { x: -16, opacity: 0, duration: 0.5, delay: (i % 6) * 0.06, scrollTrigger: { trigger: el, start: "top 94%", once: true } });
        });

        // count-up
        $$("[data-count]").forEach((el) => {
          const end = Number(el.dataset.count);
          const suf = el.dataset.suf ?? "";
          const o = { v: 0 };
          gsap.to(o, { v: end, duration: 1.4, ease: "power2.out", onUpdate: () => (el.textContent = Math.round(o.v) + suf), scrollTrigger: { trigger: el, start: "top 92%", once: true } });
        });

        // headline parallax + progress bar + nav hide
        gsap.to(".mega", { yPercent: 22, xPercent: -3, ease: "none", scrollTrigger: { trigger: "#top", start: "top top", end: "bottom top", scrub: true } });
        gsap.to("#prog", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.2 } });
        ScrollTrigger.create({
          start: 0, end: "max",
          onUpdate: (self) => { nav.classList.toggle("hide", self.direction === 1 && self.scroll() > 140 && !nav.classList.contains("nav-open")); },
        });
        // image reveal (wipe) + visible parallax, works with touch scrolling
        $$(".proj-media, .about-photo, .portrait-card").forEach((el) => {
          gsap.from(el, { clipPath: "inset(0 0 100% 0)", duration: 1.1, ease: "power3.inOut", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
        });
        // scroll-scrubbed card entrance: tied to the finger/wheel, so it is visible on touch too
        $$(".proj, .mini").forEach((el) => {
          gsap.fromTo(el, { y: 90, scale: 0.9, rotateX: 10, transformPerspective: 900, opacity: 0.2 },
            { y: 0, scale: 1, rotateX: 0, opacity: 1, ease: "none", scrollTrigger: { trigger: el, start: "top 105%", end: "top 55%", scrub: 0.6 } });
        });
        $$(".cell").forEach((el, i) => {
          gsap.from(el, { x: i % 2 ? 40 : -40, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 94%", once: true } });
        });
        // marquee reacts to scroll speed (transform only)
        const mq = $(".marquee");
        if (mq) {
          let skew = 0;
          const setSk = gsap.quickTo(mq, "skewX", { duration: 0.4, ease: "power3.out" });
          lenis!.on("scroll", (l: { velocity: number }) => { const v = Math.max(-6, Math.min(6, l.velocity * 0.35)); if (Math.abs(v - skew) > 0.2) { skew = v; setSk(-v); } });
          ScrollTrigger.create({ trigger: mq, start: "top bottom", end: "bottom top", onLeave: () => setSk(0), onLeaveBack: () => setSk(0) });
        }
        // floating portrait (cheap loop, paused off-screen by the hero observer)
        gsap.to(".hero-right", { y: -10, duration: 2.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
        // gentle section depth on images
        $$(".proj-media img.fit, .about-photo img").forEach((im) => {
          gsap.fromTo(im, { scale: 1.04 }, { scale: 1, ease: "none", scrollTrigger: { trigger: im, start: "top bottom", end: "bottom top", scrub: true } });
        });
      });
      splitHeadings();

      // portrait tilt
      const tilt = $("#tilt");
      if (tilt && fine) {
        const rx = gsap.quickTo(tilt, "--rx", { duration: 0.5, ease: "power3.out" });
        const ry = gsap.quickTo(tilt, "--ry", { duration: 0.5, ease: "power3.out" });
        const mv = (e: PointerEvent) => {
          const r = tilt.getBoundingClientRect();
          ry(((e.clientX - r.left) / r.width - 0.5) * 12);
          rx(-((e.clientY - r.top) / r.height - 0.5) * 10);
        };
        const lv = () => { rx(0); ry(0); };
        on(tilt, "pointermove", mv as EventListener);
        on(tilt, "pointerleave", lv);
      }

      // terminal typing
      const body = $("#termBody");
      if (body) {
        const nodes: Text[] = [];
        (function collect(el: Node) { el.childNodes.forEach((n) => (n.nodeType === 3 ? nodes.push(n as Text) : collect(n))); })(body);
        const orig = nodes.map((n) => n.textContent ?? "");
        nodes.forEach((n) => (n.textContent = ""));
        const cursor = document.createElement("span");
        cursor.className = "t-cursor";
        let ni = 0, ci = 0;
        let to: ReturnType<typeof setTimeout>;
        const step = () => {
          if (ni >= nodes.length) { to = setTimeout(() => cursor.remove(), 2600); return; }
          const full = orig[ni];
          if (ci < full.length) {
            ci++;
            nodes[ni].textContent = full.slice(0, ci);
            nodes[ni].parentNode!.insertBefore(cursor, nodes[ni].nextSibling);
            to = setTimeout(step, full.charAt(ci - 1) === " " ? 8 : 24);
          } else { ni++; ci = 0; step(); }
        };
        to = setTimeout(step, 1150);
        cleanups.push(() => { clearTimeout(to); nodes.forEach((n, i) => (n.textContent = orig[i])); cursor.remove(); });
      }
    }

    return () => {
      cleanups.forEach((f) => f());
      splits.forEach((s) => s.revert());
      ctx?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (tickerFn) gsap.ticker.remove(tickerFn);
      lenis?.destroy();
    };
  }, []);

  return null;
          }
