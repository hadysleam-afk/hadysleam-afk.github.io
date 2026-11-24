import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, ArrowUpRight, Database, Server, LayoutDashboard, Menu, X, Globe, Send, Layers, Plug, MonitorSmartphone } from 'lucide-react';
import { siteConfig } from './config/site';

type L = 'en' | 'ar';
type Project = { title: string; tag: string; text: string; note: string; image: string; link?: string; featured?: boolean; gallery?: string[] };

const T = {
  en: {
    nav: [['about','About'],['skills','Skills'],['projects','Projects'],['services','Services'],['contact','Contact']],
    badge: 'Backend Developer',
    hi: "Hi, I'm ",
    lead: 'I build web applications where the interface is backed by real services and a database. Third-year Physics and Computer Science student at the Faculty of Science, focused on backend development.',
    viewProjects: 'View projects', touch: 'Get in touch', lang: 'العربية',
    about: 'About', aboutTitle: 'Clean interfaces, working backends',
    about1: 'I study Physics and Computer Science at the Faculty of Science, and I build full-stack projects on the side. My interest is the backend: APIs, databases and the services that make a dashboard show real data instead of mockups.',
    about2: 'My most complete project is SolarMind, a solar monitoring and inspection demo with a database, API documentation and a dashboard on top. I also build interface-focused projects such as business sites and dashboards.',
    facts: [['Focus','Backend development, with full-stack delivery'],['Studying','Physics and Computer Science, third year'],['Based in','Egypt']],
    skills: 'Skills', skillsTitle: 'What I work with',
    projects: 'Projects', projectsTitle: 'Selected work', github: 'View on GitHub',
    services: 'Services', servicesTitle: 'How I can help',
    contact: 'Contact', contactTitle: "Let's talk about your project",
    contactLead: 'Need a backend, a dashboard or a full web app? Tell me what you are building and which part you need help with.',
    form: { name: 'Your name', email: 'Your email', subject: 'Subject', msg: 'Message', send: 'Send message', hint: 'Opens your email app with the message ready to send.' },
    skillGroups: [['Backend',['Node.js','Express','PHP','Laravel','REST APIs']],['Data',['SQL databases','Schema design','API and database integration']],['Frontend',['HTML','CSS','JavaScript','TypeScript','React']],['Workflow',['Git','GitHub']]],
    serviceItems: [['Landing pages and business websites','Clear, responsive sites for a business or product.'],['Dashboard interfaces','Data views, summary cards and tables for admin and monitoring screens.'],['Backend features and APIs','Application logic, endpoints and database-backed features.'],['Connecting frontend to backend','Wiring an existing interface to services and a database.']],
    scope: 'Features, deliverables, timeline and revision scope are agreed before work begins.',
  },
  ar: {
    nav: [['about','عني'],['skills','المهارات'],['projects','المشاريع'],['services','الخدمات'],['contact','تواصل']],
    badge: 'مطور باك إند',
    hi: 'أهلاً، أنا ',
    lead: 'أبني تطبيقات ويب تعتمد واجهاتها على خدمات حقيقية وقاعدة بيانات. طالب في الفرقة الثالثة بكلية العلوم، قسم الفيزياء وعلوم الحاسب، وتركيزي على تطوير الباك إند.',
    viewProjects: 'شاهد المشاريع', touch: 'تواصل معي', lang: 'English',
    about: 'عني', aboutTitle: 'واجهات نظيفة وباك إند شغال',
    about1: 'أدرس الفيزياء وعلوم الحاسب بكلية العلوم، وأبني مشاريع ويب متكاملة. اهتمامي الأساسي بالباك إند: الـ APIs وقواعد البيانات والخدمات التي تجعل لوحة التحكم تعرض بيانات حقيقية بدل الشكل فقط.',
    about2: 'أكمل مشاريعي هو SolarMind، عرض تجريبي لمراقبة وفحص الألواح الشمسية، فيه قاعدة بيانات وتوثيق للـ API ولوحة تحكم. وأعمل أيضاً على مشاريع تركز على الواجهات مثل مواقع الأعمال ولوحات التحكم.',
    facts: [['التركيز','تطوير الباك إند مع تنفيذ متكامل'],['الدراسة','الفيزياء وعلوم الحاسب، الفرقة الثالثة'],['المكان','مصر']],
    skills: 'المهارات', skillsTitle: 'التقنيات التي أعمل بها',
    projects: 'المشاريع', projectsTitle: 'أعمال مختارة', github: 'عرض على GitHub',
    services: 'الخدمات', servicesTitle: 'كيف أقدر أساعدك',
    contact: 'تواصل', contactTitle: 'خلّينا نتكلم عن مشروعك',
    contactLead: 'محتاج باك إند أو لوحة تحكم أو تطبيق ويب كامل؟ احكيلي إيه اللي بتبنيه وأي جزء محتاج فيه مساعدة.',
    form: { name: 'اسمك', email: 'بريدك الإلكتروني', subject: 'الموضوع', msg: 'الرسالة', send: 'إرسال الرسالة', hint: 'هيفتح تطبيق البريد عندك والرسالة جاهزة للإرسال.' },
    skillGroups: [['الباك إند',['Node.js','Express','PHP','Laravel','REST APIs']],['البيانات',['قواعد بيانات SQL','تصميم الجداول','ربط الـ API بقاعدة البيانات']],['الواجهات',['HTML','CSS','JavaScript','TypeScript','React']],['أدوات العمل',['Git','GitHub']]],
    serviceItems: [['صفحات الهبوط ومواقع الأعمال','مواقع واضحة ومتجاوبة لنشاط أو منتج.'],['واجهات لوحات التحكم','عرض البيانات وبطاقات الملخص والجداول لشاشات الإدارة والمراقبة.'],['ميزات الباك إند والـ APIs','منطق التطبيق ونقاط الاتصال وميزات مدعومة بقاعدة بيانات.'],['ربط الواجهة بالباك إند','توصيل واجهة موجودة بالخدمات وقاعدة البيانات.']],
    scope: 'نتفق على الميزات والمخرجات والمدة وعدد التعديلات قبل بدء العمل.',
  },
};

const projectsData: Record<L, Project[]> = {
  en: [
    { title: 'SolarMind', tag: 'Full-stack demo', text: 'Solar-panel monitoring and inspection platform with backend and database features. The dashboard shows panel-condition charts, inspection summaries, service health and API documentation.', note: 'Runs on demonstration data with simulated telemetry. The AI component is in mock mode, not production inference.', image: '/images/work/solarmind-analytics.jpg', gallery: ['/images/work/solarmind-physics.jpg','/images/work/solarmind-studio.jpg'], link: siteConfig.solarmind, featured: true },
    { title: 'Reddit-style community app', tag: 'Full-stack web app', text: 'A community web application with backend and database features, text and image posts, community pages, user profiles and light and dark themes. The demo includes post and community creation forms.', note: 'Local demo build.', image: '/images/work/reddit-home.jpg' },
    { title: 'Coffee website', tag: 'Frontend', text: 'A coffee business website built around a clear product presentation and a warm visual style.', note: 'Interface project. The illustration is a sample asset.', image: '/images/work/coffee.jpg' },
    { title: 'Student dashboard', tag: 'Frontend', text: 'A student-management dashboard interface with summary cards and data views.', note: 'Figures shown are sample data.', image: '/images/work/student.jpg' },
    { title: 'Pharmacy inventory', tag: 'Frontend', text: 'An inventory management interface for a pharmacy, built around stock tables and item details.', note: 'Interface project.', image: '/images/work/pharmacy.jpg' },
  ],
  ar: [
    { title: 'SolarMind', tag: 'عرض تجريبي متكامل', text: 'منصة لمراقبة وفحص الألواح الشمسية بميزات باك إند وقاعدة بيانات. تعرض لوحة التحكم رسوماً لحالة الألواح وملخصات الفحص وحالة الخدمات وتوثيق الـ API.', note: 'تعمل ببيانات تجريبية وقياسات محاكاة. مكوّن الذكاء الاصطناعي في وضع تجريبي وليس استدلالاً إنتاجياً.', image: '/images/work/solarmind-analytics.jpg', gallery: ['/images/work/solarmind-physics.jpg','/images/work/solarmind-studio.jpg'], link: siteConfig.solarmind, featured: true },
    { title: 'تطبيق مجتمعي بأسلوب Reddit', tag: 'تطبيق ويب متكامل', text: 'تطبيق ويب مجتمعي بميزات باك إند وقاعدة بيانات، ومنشورات نصية وصور، وصفحات مجتمعات وملفات مستخدمين ووضع فاتح وداكن. يتضمن العرض نماذج إنشاء المنشورات والمجتمعات.', note: 'نسخة عرض محلية.', image: '/images/work/reddit-home.jpg' },
    { title: 'موقع قهوة', tag: 'واجهات', text: 'موقع لنشاط قهوة مبني على عرض واضح للمنتج وأسلوب بصري دافئ.', note: 'مشروع واجهات. الرسم التوضيحي مادة عينة.', image: '/images/work/coffee.jpg' },
    { title: 'لوحة تحكم الطلاب', tag: 'واجهات', text: 'واجهة لوحة تحكم لإدارة الطلاب ببطاقات ملخص وعرض بيانات.', note: 'الأرقام المعروضة بيانات تجريبية.', image: '/images/work/student.jpg' },
    { title: 'مخزون الصيدلية', tag: 'واجهات', text: 'واجهة لإدارة مخزون صيدلية مبنية على جداول المخزون وتفاصيل الأصناف.', note: 'مشروع واجهات.', image: '/images/work/pharmacy.jpg' },
  ],
};

const skillIcons = [<Server size={20} />, <Database size={20} />, <LayoutDashboard size={20} />, <Github size={20} />];
const serviceIcons = [<MonitorSmartphone size={22} />, <LayoutDashboard size={22} />, <Layers size={22} />, <Plug size={22} />];

export const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<L>(() => (localStorage.getItem('lang') === 'ar' ? 'ar' : 'en'));
  const [form, setForm] = useState({ name: '', email: '', subject: '', msg: '' });
  const t = T[lang];
  const projects = projectsData[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = lang === 'ar' ? 'هادي سليم | مطور باك إند' : 'Hady Sleam | Backend Developer';
    localStorage.setItem('lang', lang);
  }, [lang]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${form.msg}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="brand">{lang === 'ar' ? 'هادي سليم' : 'Hady Sleam'}</a>
          <nav className={open ? 'links open' : 'links'}>
            {t.nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <button className="lang" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}><Globe size={16} /> {t.lang}</button>
          </nav>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      <main id="top">
        <section className="hero">
          <div className="wrap hero-in">
            <div className="hero-copy">
              <span className="pill">{t.badge}</span>
              <h1>{t.hi}<span className="grad">{lang === 'ar' ? 'هادي سليم' : 'Hady Sleam'}</span></h1>
              <p className="lead">{t.lead}</p>
              <div className="cta">
                <a className="btn primary" href="#projects">{t.viewProjects} <ArrowRight size={18} className="flip" /></a>
                <a className="btn" href="#contact"><Mail size={18} /> {t.touch}</a>
              </div>
              <div className="social">
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href={`mailto:${siteConfig.email}`} aria-label="Email"><Mail size={20} /></a>
              </div>
            </div>
            <div className="portrait">
              <img src="/images/hady-1.jpg" alt="Hady Sleam" width={800} height={1200} />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="wrap about">
            <img className="about-img" src="/images/hady-2.jpg" alt="Hady Sleam" width={800} height={1200} />
            <div>
              <span className="eyebrow">{t.about}</span>
              <h2>{t.aboutTitle}</h2>
              <p>{t.about1}</p>
              <p>{t.about2}</p>
              <ul className="facts">
                {t.facts.map(([k, v]) => <li key={k}><strong>{k}</strong> {v}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="wrap">
            <span className="eyebrow">{t.skills}</span>
            <h2>{t.skillsTitle}</h2>
            <div className="skills">
              {t.skillGroups.map(([title, items], i) => (
                <div className="card skill" key={title as string}>
                  <div className="ico">{skillIcons[i]}</div>
                  <h3>{title as string}</h3>
                  <div className="chips">{(items as string[]).map((x) => <span key={x}>{x}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="wrap">
            <span className="eyebrow">{t.projects}</span>
            <h2>{t.projectsTitle}</h2>
            <div className="projects">
              {projects.map((p) => (
                <article className={p.featured ? 'card project featured' : 'card project'} key={p.image}>
                  <div className="shot"><img src={p.image} alt={p.title} /></div>
                  <div className="body">
                    <span className="tag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <p className="note">{p.note}</p>
                    {p.gallery && <div className="thumbs">{p.gallery.map((g) => <img key={g} src={g} alt={p.title} />)}</div>}
                    {p.link && <a className="more" href={p.link} target="_blank" rel="noopener noreferrer">{t.github} <ArrowUpRight size={16} /></a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section alt">
          <div className="wrap">
            <span className="eyebrow">{t.services}</span>
            <h2>{t.servicesTitle}</h2>
            <div className="skills">
              {t.serviceItems.map(([title, text], i) => (
                <div className="card skill" key={title}>
                  <div className="ico">{serviceIcons[i]}</div>
                  <h3>{title}</h3>
                  <p className="svc">{text}</p>
                </div>
              ))}
            </div>
            <p className="scope">{t.scope}</p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="wrap contact">
            <span className="eyebrow">{t.contact}</span>
            <h2>{t.contactTitle}</h2>
            <p className="lead">{t.contactLead}</p>
            <form className="card form" onSubmit={submit}>
              <div className="row">
                <input required placeholder={t.form.name} value={form.name} onChange={set('name')} />
                <input required type="email" placeholder={t.form.email} value={form.email} onChange={set('email')} />
              </div>
              <input required placeholder={t.form.subject} value={form.subject} onChange={set('subject')} />
              <textarea required rows={5} placeholder={t.form.msg} value={form.msg} onChange={set('msg')} />
              <button className="btn primary" type="submit"><Send size={18} /> {t.form.send}</button>
              <small>{t.form.hint}</small>
            </form>
            <div className="social center">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href={`mailto:${siteConfig.email}`} aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="foot"><div className="wrap">© {new Date().getFullYear()} {lang === 'ar' ? 'هادي سليم' : 'Hady Sleam'}</div></footer>
    </>
  );
};

export default App;
