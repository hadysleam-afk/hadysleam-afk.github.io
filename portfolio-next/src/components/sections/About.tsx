const B = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// Content: Hady Sleam portfolio (EN/AR via data-en / data-ar attributes, swapped by <Behavior />)
export default function About() {
  return (
    <>
<section id="about">
  <div className="wrap">
    <div className="label rv" data-en="Background & Philosophy" data-ar="الخلفية والفلسفة">Background &amp; Philosophy</div>
    <h2 className="rv" data-en="Real backends. Honest demos." data-ar="باك إند حقيقي. ووضوح كامل.">Real backends. Honest demos.</h2>
    <div className="about-grid">
      <div className="about-txt rv">
        <p data-en="I study Physics and Computer Science at the Faculty of Science, and I build web applications on the side. Physics taught me to model how things actually behave; computer science gave me the tools to build those models into working software." data-ar="بادرس فيزياء وعلوم حاسب في كلية العلوم، وببني تطبيقات ويب جنب الدراسة. الفيزياء علمتني أفهم الحاجة بتحصل إزاي فعلاً، وعلوم الحاسب ادتني الأدوات إن أحوّل الفهم ده لسوفتوير شغال.">I study Physics and Computer Science at the Faculty of Science, and I build web applications on the side. Physics taught me to model how things actually behave; computer science gave me the tools to build those models into working software.</p>
        <p data-en="My interest is the backend: APIs, databases and the services behind the screen. A dashboard that shows real data is engineering. A dashboard that only looks like it does is decoration. I build the first kind, and I say clearly when something is a demo." data-ar="اهتمامي الأساسي هو الباك إند: الـAPIs وقواعد البيانات والخدمات اللي ورا الشاشة. لوحة تحكم بتعرض بيانات حقيقية دي هندسة. لوحة شكلها بس كده دي ديكور. أنا ببني النوع الأول، وبقول بوضوح لما حاجة تكون ديمو.">My interest is the backend: APIs, databases and the services behind the screen. A dashboard that shows real data is engineering. A dashboard that only looks like it does is decoration. I build the first kind, and I say clearly when something is a demo.</p>
        <blockquote data-en='"A good interface earns attention. A good backend earns trust."' data-ar="«الواجهة الكويسة بتجذب الانتباه. الباك إند الكويس بيكسب الثقة.»">&quot;A good interface earns attention. A good backend earns trust.&quot;</blockquote>
        <p data-en="My most complete project is SolarMind, a solar monitoring and inspection platform with a database, API documentation and a dashboard on top. Alongside it I build interfaces: business sites, dashboards and management systems." data-ar="أكمل مشروع عندي هو SolarMind، منصة لمتابعة وفحص الألواح الشمسية فيها قاعدة بيانات وتوثيق API ولوحة تحكم. ومعاه ببني واجهات: مواقع شركات ولوحات تحكم وأنظمة إدارة.">My most complete project is SolarMind, a solar monitoring and inspection platform with a database, API documentation and a dashboard on top. Alongside it I build interfaces: business sites, dashboards and management systems.</p>
      </div>
      <div className="rv">
        <div className="about-facts">
          <div className="fact"><span className="fk" data-en="Focus" data-ar="التركيز">Focus</span><span className="fv" data-en="Backend development" data-ar="تطوير الباك إند">Backend development</span></div>
          <div className="fact"><span className="fk" data-en="Studying" data-ar="الدراسة">Studying</span><span className="fv" data-en="Physics & CS, 3rd year" data-ar="فيزياء وعلوم حاسب، سنة تالتة">Physics &amp; CS, 3rd year</span></div>
          <div className="fact"><span className="fk" data-en="Based in" data-ar="مقيم في">Based in</span><span className="fv" data-en="Egypt" data-ar="مصر">Egypt</span></div>
          <div className="fact"><span className="fk" data-en="Open to" data-ar="متاح لـ">Open to</span><span className="fv" data-en="Freelance & backend roles" data-ar="الفري لانس ووظائف الباك إند">Freelance &amp; backend roles</span></div>
        </div>
        <div className="about-photo"><img src={`${B}/images/hady-2.jpg`} alt="Hady Sleam portrait" /></div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
