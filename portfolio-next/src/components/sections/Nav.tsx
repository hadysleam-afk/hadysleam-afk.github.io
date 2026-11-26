// Content: Hady Sleam portfolio (EN/AR via data-en / data-ar attributes, swapped by <Behavior />)
export default function Nav() {
  return (
    <>
<nav id="nav">
  <div className="nav-in">
    <a className="logo" href="#top"><span className="sq">H</span><span data-en="HADY." data-ar="هادي.">HADY.</span></a>
    <div className="nav-links">
      <a href="#about" data-en="About" data-ar="عنّي">About</a>
      <a href="#work" data-en="Work" data-ar="الشغل">Work</a>
      <a href="#stack" data-en="Stack" data-ar="التقنيات">Stack</a>
      <a href="#services" data-en="Services" data-ar="الخدمات">Services</a>
      <a href="#contact" data-en="Contact" data-ar="التواصل">Contact</a>
    </div>
    <div className="avail"><span className="dot" /><span data-en="Available for work" data-ar="متاح للشغل">Available for work</span></div>
    <button className="motion-btn" id="motionBtn" type="button" aria-pressed="true" aria-label="Motion effects"><span className="lbl" data-en="Motion" data-ar="الحركة">Motion</span><span className="st" /></button>
    <button className="lang-btn" id="langBtn" aria-label="Switch language">&#1593;&#1585;&#1576;&#1610;</button>
    <a className="btn nav-cta" href="#contact" data-en="Start a project" data-ar="ابدأ مشروعك">Start a project</a>
    <button className="burger" id="burger" aria-label="Menu">&equiv;</button>
  </div>
</nav>
    </>
  );
}
