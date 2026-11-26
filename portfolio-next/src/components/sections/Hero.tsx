const B = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// Content: Hady Sleam portfolio (EN/AR via data-en / data-ar attributes, swapped by <Behavior />)
import { Magnet, DecryptedText } from "../rb";

export default function Hero() {
  return (
    <>
<header className="hero" id="top">
  <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
  <div className="mega" id="mega" aria-hidden="true"><span>PORTFOLIO</span></div>
  <div className="wrap">
    <div className="hero-grid">
      <div>
        <div className="hello hi hi-1" data-en="Hello, I'm" data-ar="أهلاً، أنا">Hello, I&apos;m</div>
        <div className="name hi hi-name" data-en="HADY SLEAM." data-ar="هادي.">HADY SLEAM.</div>
        <div className="role hi hi-3">
          <span className="l-en"><DecryptedText text="Backend Developer · Node.js · PHP · SQL" animateOn="view" sequential speed={38} maxIterations={8} /></span>
          <span className="l-ar"><DecryptedText text="مطوّر باك إند · Node.js · PHP · SQL" animateOn="view" sequential speed={38} maxIterations={8} characters="ابتثجحخدذرزسشصضطظعغفقكلمنهوي" /></span>
        </div>
        <p className="hero-desc hi hi-4" data-en="I build the backend behind your product: the APIs, databases and services that make an interface show real data instead of mockups. Third-year Physics & Computer Science student, available for freelance and backend work." data-ar="ببني الباك إند اللي ورا منتجك: الـAPIs وقواعد البيانات والخدمات اللي بتخلي الواجهة تعرض بيانات حقيقية مش مجرد شكل. طالب سنة تالتة فيزياء وعلوم حاسب، ومتاح لشغل الفري لانس والباك إند.">I build the backend behind your product: the APIs, databases and services that make an interface show real data instead of mockups. Third-year Physics &amp; Computer Science student, available for freelance and backend work.</p>
        <div className="hero-cta hi hi-5">
          <Magnet wrapperClassName="mag" magnetStrength={3} padding={60}><a className="btn" href="#work" data-en="View the builds →" data-ar="شوف الشغل ←">View the builds &rarr;</a></Magnet>
          <Magnet wrapperClassName="mag" magnetStrength={3} padding={60}><a className="btn ghost" href="#about" data-en="About me" data-ar="عنّي">About me</a></Magnet>
        </div>
      </div>
      <div className="hero-right">
        <div className="term" dir="ltr" aria-hidden="true">
          <div className="t-head"><span style={{ background: "#ff5f57" }} /><span style={{ background: "#febc2e" }} /><span style={{ background: "#28c840" }} /></div>
          <div id="termBody">
          <div><span className="c">$</span> curl localhost:8000/api</div>
          <div>{"{"}</div>
          <div>&nbsp;&nbsp;<span className="k">&quot;focus&quot;</span>: <span className="s">&quot;backend&quot;</span>,</div>
          <div>&nbsp;&nbsp;<span className="k">&quot;stack&quot;</span>: [<span className="s">&quot;node&quot;</span>, <span className="s">&quot;laravel&quot;</span>, <span className="s">&quot;sql&quot;</span>],</div>
          <div>&nbsp;&nbsp;<span className="k">&quot;status&quot;</span>: <span className="r">&quot;open_to_work&quot;</span></div>
          <div>{"}"}</div>
          </div>
        </div>
        <div className="chip c1" aria-hidden="true">Node.js</div><div className="chip c2" aria-hidden="true">Laravel</div><div className="chip c3" aria-hidden="true">SQL</div><div className="chip c4" aria-hidden="true">REST API</div>
        <div className="portrait-card" id="tilt">
          <div className="pimg"><img src={`${B}/images/hady-1.jpg`} alt="Hady Sleam" id="portraitImg" width="800" height="1200" /><i className="scan" /><b className="cn tl" /><b className="cn tr" /><b className="cn bl" /><b className="cn br" /></div>
          <div className="portrait-tag" data-en="Backend · Egypt" data-ar="باك إند · مصر">Backend &middot; Egypt</div>
        </div>
      </div>
    </div>
    <div className="stats">
      <div className="stat rv"><div className="n" data-count="3" data-suf="RD">3RD</div><div className="l" data-en="Year, Physics & Computer Science" data-ar="سنة تالتة فيزياء وعلوم حاسب">Year, Physics &amp; Computer Science</div></div>
      <div className="stat rv"><div className="n" data-count="5" data-suf="">5</div><div className="l" data-en="Selected builds showcased below" data-ar="مشاريع مختارة معروضة تحت">Selected builds showcased below</div></div>
      <div className="stat rv"><div className="n">NODE</div><div className="l" data-en="Node.js, Laravel and SQL, backend first" data-ar="Node.js وLaravel وSQL، باك إند أولاً">Node.js, Laravel and SQL, backend first</div></div>
      <div className="stat rv"><div className="n">EG</div><div className="l" data-en="Based in Egypt, remote-friendly" data-ar="من مصر ومتاح للشغل عن بُعد">Based in Egypt, remote-friendly</div></div>
    </div>
  </div>
</header>
    </>
  );
}
