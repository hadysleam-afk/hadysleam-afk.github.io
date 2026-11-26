// Content: Hady Sleam portfolio (EN/AR via data-en / data-ar attributes, swapped by <Behavior />)
export default function Stack() {
  return (
    <>
<section id="stack" style={{ paddingTop: 40 }}>
  <div className="wrap">
    <div className="label rv" data-en="The Systems Matrix" data-ar="مصفوفة التقنيات">The Systems Matrix</div>
    <h2 className="rv" data-en="What I work with." data-ar="الأدوات اللي بشتغل بيها.">What I work with.</h2>
    <p className="sec-sub rv" data-en="The backend is home. The frontend is fluent." data-ar="الباك إند هو البيت. والفرونت إند بطاقة كاملة.">The backend is home. The frontend is fluent.</p>
    <div className="matrix rv">
      <div className="cell">
        <div className="idx">01 /</div>
        <h4 data-en="Backend" data-ar="الباك إند">Backend</h4>
        <ul><li>Node.js</li><li>Express</li><li>PHP</li><li>Laravel</li><li>REST APIs</li></ul>
      </div>
      <div className="cell">
        <div className="idx">02 /</div>
        <h4 data-en="Data" data-ar="البيانات">Data</h4>
        <ul><li>SQL databases</li><li data-en="Schema design" data-ar="تصميم قواعد البيانات">Schema design</li><li data-en="API ↔ DB integration" data-ar="ربط الـAPI بقاعدة البيانات">API &harr; DB integration</li></ul>
      </div>
      <div className="cell">
        <div className="idx">03 /</div>
        <h4 data-en="Frontend" data-ar="الفرونت إند">Frontend</h4>
        <ul><li>HTML &middot; CSS</li><li>JavaScript</li><li>TypeScript</li><li>React</li></ul>
      </div>
      <div className="cell">
        <div className="idx">04 /</div>
        <h4 data-en="Workflow" data-ar="أسلوب العمل">Workflow</h4>
        <ul><li>Git</li><li>GitHub</li><li data-en="API documentation" data-ar="توثيق الـAPI">API documentation</li></ul>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
