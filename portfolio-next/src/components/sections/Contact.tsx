// Content: Hady Sleam portfolio (EN/AR via data-en / data-ar attributes, swapped by <Behavior />)
export default function Contact() {
  return (
    <>
<section className="contact" id="contact">
  <div className="wrap">
    <div className="label rv" style={{ textAlign: "center" }} data-en="Direct Connect" data-ar="تواصل مباشر">Direct Connect</div>
    <h2 className="rv" data-en="Let's build something <span class=&quot;r&quot;>real.</span>" data-ar='يلا نبني حاجة <span class="r">حقيقية.</span>'>Let&apos;s build something <span className="r">real.</span></h2>
    <p className="sec-sub rv" data-en="Available for freelance projects and backend work. Send me the idea and I'll reply with a clear plan." data-ar="متاح لمشاريع الفري لانس وشغل الباك إند. ابعتلي فكرتك وهرد عليك بخطة واضحة.">Available for freelance projects and backend work. Send me the idea and I&apos;ll reply with a clear plan.</p>
    <div className="mail-row rv">
      <span className="mail" id="mailTxt">hadysleam@gmail.com</span>
      <button className="btn" id="copyBtn" data-en="Copy email" data-ar="انسخ الإيميل">Copy email</button>
      <a className="btn" href="mailto:hadysleam@gmail.com?subject=Project%20inquiry" data-en="Email me" data-ar="ابعتلي إيميل">Email me</a>
      <a className="btn ghost" href="https://wa.me/201008236359" target="_blank" rel="noopener" data-en="WhatsApp" data-ar="واتساب">WhatsApp</a>
    </div>
    <div className="socials rv">
      <a className="soc" href="https://github.com/hadysleam-afk" target="_blank" rel="noopener">GitHub</a>
      <a className="soc" href="https://www.linkedin.com/in/hady-sleam/" target="_blank" rel="noopener">LinkedIn</a>
      <a className="soc" href="https://www.upwork.com/freelancers/~01c9da43528178eab2" target="_blank" rel="noopener">Upwork</a>
      <a className="soc" href="https://nafezly.com/u/Hady_sleam" target="_blank" rel="noopener">Nafezly</a>
    </div>
  </div>
</section>
    </>
  );
}
