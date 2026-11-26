const B = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// Content: Hady Sleam portfolio (EN/AR via data-en / data-ar attributes, swapped by <Behavior />)
export default function Work() {
  return (
    <>
<section id="work" style={{ paddingTop: 40 }}>
  <div className="wrap">
    <div className="label rv" data-en="Selected Work" data-ar="أعمال مختارة">Selected Work</div>
    <h2 className="rv" data-en="The builds." data-ar="المشاريع.">The builds.</h2>
    <p className="sec-sub rv" data-en="Selected projects. Public code links to GitHub. Anything that is a demo, or uses demo data, says so." data-ar="مشاريع مختارة. اللي كوده منشور عليه لينك GitHub. وأي حاجة ديمو أو بتستخدم بيانات تجريبية مكتوب عليها كده بوضوح.">Selected projects. Public code links to GitHub. Anything that is a demo, or uses demo data, says so.</p>

    <article className="proj rv">
      <div className="proj-media slider" id="slider">
        <div className="bar" dir="ltr"><span /><span /><span /><em id="slideCap">SolarMind &middot; analytics</em></div>
        <div className="slides">
          <img className="on" src={`${B}/images/solarmind-analytics.jpg`} alt="SolarMind analytics dashboard" data-cap="SolarMind · analytics" width="1120" height="668" />
          <img src={`${B}/images/solarmind-physics.jpg`} alt="SolarMind physics lab" data-cap="SolarMind · physics lab" width="1150" height="655" loading="lazy" />
          <img src={`${B}/images/solarmind-studio.jpg`} alt="SolarMind studio view" data-cap="SolarMind · AI inspection" width="1096" height="674" loading="lazy" />
        </div>
        <div className="dots" id="dots"><button aria-label="1" className="on" /><button aria-label="2" /><button aria-label="3" /></div>
      </div>
      <div className="proj-body">
        <span className="tag" data-en="Full-stack demo · Flagship" data-ar="فل ستاك ديمو · المشروع الرئيسي">Full-stack demo &middot; Flagship</span>
        <h3>SolarMind</h3>
        <p data-en="Solar-panel monitoring and inspection platform: AI surface-defect classification, panel-condition charts, inspection summaries, service health and full API documentation, backed by a real database." data-ar="منصة لمتابعة وفحص الألواح الشمسية: تصنيف عيوب السطح بالذكاء الاصطناعي، رسوم بيانية لحالة الألواح، ملخصات فحص، صحة الخدمات وتوثيق API كامل، مبنية على قاعدة بيانات حقيقية.">Solar-panel monitoring and inspection platform: AI surface-defect classification, panel-condition charts, inspection summaries, service health and full API documentation, backed by a real database.</p>
        <div className="note" data-en="DEMO DATA: telemetry is simulated. The AI vision pipeline is real PyTorch (ResNet-50 / EfficientNet); when model weights are absent it runs in a clearly labeled mock mode." data-ar="بيانات تجريبية: القراءات محاكاة. خط الذكاء الاصطناعي حقيقي بـPyTorch (ResNet-50 / EfficientNet)، ولما أوزان الموديل مش موجودة بيشتغل في وضع تجريبي معلّن.">DEMO DATA: telemetry is simulated. The AI vision pipeline is real PyTorch (ResNet-50 / EfficientNet); when model weights are absent it runs in a clearly labeled mock mode.</div>
        <div className="stack"><span>Full-stack</span><span>Database</span><span>REST API</span><span>Dashboard</span></div>
        <a className="proj-link" href="https://github.com/hadysleam-afk/SolarMind" target="_blank" rel="noopener" data-en="View on GitHub →" data-ar="شوفه على GitHub ←">View on GitHub &rarr;</a>
      </div>
    </article>

    <div className="flow-wrap rv"><div className="label" data-en="What SolarMind includes" data-ar="إيه اللي في SolarMind">What SolarMind includes</div><ol className="flow"><li className="rv" style={{ "--k": "0" } as React.CSSProperties}><b data-en="Data" data-ar="بيانات">Data</b><h4 data-en="Simulated telemetry" data-ar="تليمتري محاكى">Simulated telemetry</h4><p data-en="Demo data. The panel readings are simulated, and the page says so." data-ar="بيانات ديمو. قراءات الألواح محاكاة، والصفحة بتقول كده.">Demo data. The panel readings are simulated, and the page says so.</p></li><li className="rv" style={{ "--k": "1" } as React.CSSProperties}><b data-en="Backend" data-ar="باك إند">Backend</b><h4 data-en="Database and API" data-ar="قاعدة بيانات وAPI">Database and API</h4><p data-en="A real database behind a documented REST API." data-ar="قاعدة بيانات حقيقية ورا REST API متوثّق.">A real database behind a documented REST API.</p></li><li className="rv" style={{ "--k": "2" } as React.CSSProperties}><b data-en="AI" data-ar="ذكاء اصطناعي">AI</b><h4 data-en="Defect classification" data-ar="تصنيف العيوب">Defect classification</h4><p data-en="Surface-defect classification in PyTorch (ResNet-50 / EfficientNet). Without model weights it runs in a labeled mock mode." data-ar="تصنيف عيوب السطح بـPyTorch (ResNet-50 / EfficientNet). من غير أوزان الموديل بيشتغل في وضع mock متعلّم.">Surface-defect classification in PyTorch (ResNet-50 / EfficientNet). Without model weights it runs in a labeled mock mode.</p></li><li className="rv" style={{ "--k": "3" } as React.CSSProperties}><b data-en="Interface" data-ar="واجهة">Interface</b><h4 data-en="Dashboard" data-ar="داشبورد">Dashboard</h4><p data-en="Panel-condition charts, inspection summaries and service health on top." data-ar="رسوم حالة الألواح وملخصات الفحص وحالة الخدمات.">Panel-condition charts, inspection summaries and service health on top.</p></li></ol></div>
    <article className="proj rv">
      <div className="proj-media framed"><div className="shot" style={{ "--ar": "1280/720" } as React.CSSProperties}><div className="bar" dir="ltr"><span /><span /><span /><em>whatsapp-store-assistant &middot; demo</em></div><img src={`${B}/images/whatsapp-bot.jpg`} alt="WhatsApp store assistant demo chat" width="1280" height="720" loading="lazy" /></div></div>
      <div className="proj-body">
        <span className="tag" data-en="Backend · Demo" data-ar="باك إند · ديمو">Backend &middot; Demo</span>
        <h3 data-en="WhatsApp Store Assistant" data-ar="مساعد متجر على واتساب">WhatsApp Store Assistant</h3>
        <p data-en="Arabic WhatsApp bot for online stores: it answers greetings, lists products and prices, builds an order, takes the delivery address, confirms with an order number and tracks order status." data-ar="بوت واتساب بالعربي لمتاجر الإنترنت: بيرد على التحية، يعرض المنتجات والأسعار، يبني الطلب ويأخذ العنوان ويأكده برقم طلب ويتتبع حالته.">Arabic WhatsApp bot for online stores: it answers greetings, lists products and prices, builds an order, takes the delivery address, confirms with an order number and tracks order status.</p>
        <div className="note" data-en="DEMO: the chat runs on a simulated WhatsApp channel with sample products. The Meta WhatsApp Cloud API adapter is written but not connected to a live account." data-ar="ديمو: المحادثة بتشتغل على قناة واتساب محاكاة ببيانات منتجات تجريبية. كود الربط مع Meta WhatsApp Cloud API مكتوب لكنه مش موصول بحساب حقيقي.">DEMO: the chat runs on a simulated WhatsApp channel with sample products. The Meta WhatsApp Cloud API adapter is written but not connected to a live account.</div>
        <div className="stack"><span>Node.js</span><span>Express</span><span>WhatsApp Cloud API</span></div>
        <a className="proj-link" href="https://github.com/hadysleam-afk/whatsapp-store-assistant" target="_blank" rel="noopener" data-en="View on GitHub →" data-ar="شوفه على GitHub ←">View on GitHub &rarr;</a>
        <a className="proj-link" href="https://youtu.be/zXpx02oorpI" target="_blank" rel="noopener" data-en="Watch the demo video →" data-ar="شوف فيديو الديمو ←">Watch the demo video &rarr;</a>
      </div>
    </article>
    <article className="proj rv">
      <div className="proj-media framed"><div className="shot" style={{ "--ar": "833/528" } as React.CSSProperties}><div className="bar" dir="ltr"><span /><span /><span /><em>community-platform &middot; local demo</em></div><img src={`${B}/images/reddit-home.jpg`} alt="Reddit-style community app" width="833" height="528" loading="lazy" /></div></div>
      <div className="proj-body">
        <span className="tag" data-en="Full-stack web app" data-ar="تطبيق ويب فل ستاك">Full-stack web app</span>
        <h3 data-en="Community Platform" data-ar="منصة مجتمعات">Community Platform</h3>
        <p data-en="A Reddit-style community application with authentication, communities, text and image posts, comments, likes and user profiles, built on Laravel with policy-based authorization." data-ar="تطبيق مجتمعات بأسلوب Reddit فيه تسجيل دخول ومجتمعات وبوستات نصية وبالصور وتعليقات ولايكات وبروفايلات، مبني بـLaravel مع صلاحيات مبنية على policies.">A Reddit-style community application with authentication, communities, text and image posts, comments, likes and user profiles, built on Laravel with policy-based authorization.</p>
        <div className="note" data-en="PUBLIC REPO: the code is on GitHub. The app itself is a local demo, not deployed." data-ar="ريبو عام: الكود متاح على GitHub. التطبيق نفسه ديمو محلي مش منشور.">PUBLIC REPO: the code is on GitHub. The app itself is a local demo, not deployed.</div>
        <div className="stack"><span>PHP</span><span>Laravel</span><span>Blade</span><span>SQL</span></div>
        <a className="proj-link" href="https://github.com/hadysleam-afk/mini-reddit" target="_blank" rel="noopener" data-en="View on GitHub →" data-ar="شوفه على GitHub ←">View on GitHub &rarr;</a>
      </div>
    </article>

    <div className="mini-grid">
      <article className="mini rv">
        <div className="mini-media" style={{ "--bg": `url(${B}/images/coffee.jpg)`, "--ar": "1269/936" } as React.CSSProperties}><img src={`${B}/images/coffee.jpg`} alt="Coffee website" width="1269" height="936" loading="lazy" /></div>
        <div className="mini-in">
          <span className="tag" data-en="UI project" data-ar="مشروع واجهة">UI project</span>
          <h4 data-en="Coffee Website" data-ar="موقع قهوة">Coffee Website</h4>
          <p data-en="A coffee business site built around clear product presentation and a warm visual style." data-ar="موقع لبراند قهوة مبني على عرض واضح للمنتج وستايل دافي.">A coffee business site built around clear product presentation and a warm visual style.</p>
          <div className="stack"><span>HTML</span><span>CSS</span><span>JS</span></div>
        </div>
      </article>
      <article className="mini rv">
        <div className="mini-media" style={{ "--bg": `url(${B}/images/student.jpg)`, "--ar": "1400/717" } as React.CSSProperties}><img src={`${B}/images/student.jpg`} alt="Student dashboard" width="1400" height="717" loading="lazy" /></div>
        <div className="mini-in">
          <span className="tag" data-en="UI project · Sample data" data-ar="مشروع واجهة · بيانات تجريبية">UI project &middot; Sample data</span>
          <h4 data-en="Student Dashboard" data-ar="لوحة إدارة طلاب">Student Dashboard</h4>
          <p data-en="A student-management dashboard interface with summary cards and data views." data-ar="واجهة لوحة تحكم لإدارة الطلاب فيها كروت ملخصات وعروض بيانات.">A student-management dashboard interface with summary cards and data views.</p>
          <div className="stack"><span>HTML</span><span>CSS</span><span>JS</span></div>
        </div>
      </article>
      <article className="mini rv">
        <div className="mini-media" style={{ "--bg": `url(${B}/images/pharmacy.jpg)`, "--ar": "1205/884" } as React.CSSProperties}><img src={`${B}/images/pharmacy.jpg`} alt="Pharmacy inventory interface" width="1205" height="884" loading="lazy" /></div>
        <div className="mini-in">
          <span className="tag" data-en="UI project" data-ar="مشروع واجهة">UI project</span>
          <h4 data-en="Pharmacy Inventory" data-ar="مخزون صيدلية">Pharmacy Inventory</h4>
          <p data-en="An inventory management interface for a pharmacy: stock tables and item details." data-ar="واجهة إدارة مخزون لصيدلية: جداول أصناف وتفاصيل المنتجات.">An inventory management interface for a pharmacy: stock tables and item details.</p>
          <div className="stack"><span>HTML</span><span>CSS</span><span>JS</span></div>
        </div>
      </article>
    </div>
  </div>
</section>


    </>
  );
}
