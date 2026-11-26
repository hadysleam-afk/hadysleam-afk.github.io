import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Stack from "@/components/sections/Stack";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Statusbar from "@/components/sections/Statusbar";
import Background from "@/components/Background";
import Behavior from "@/components/Behavior";

export default function Page() {
  return (
    <>
      <div id="prog" aria-hidden="true" />
      <Background />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Stack />
        <Services />
        <Contact />
      </main>
      <Statusbar />
      <Behavior />
    </>
  );
}
