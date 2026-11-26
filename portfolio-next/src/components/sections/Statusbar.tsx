// Content: Hady Sleam portfolio (EN/AR via data-en / data-ar attributes, swapped by <Behavior />)
export default function Statusbar() {
  return (
    <>
<div className="statusbar">
  <div className="wrap">
    <span><span className="ok">&#9679;</span> <span data-en="OPEN TO WORK" data-ar="متاح للعمل">OPEN TO WORK</span></span>
    <span data-en="LOCATION: EGYPT · UTC+2" data-ar="الموقع: مصر · UTC+2">LOCATION: EGYPT &middot; UTC+2</span>
    <span className="rr" data-en="BACKEND-FIRST" data-ar="باك إند أولاً">BACKEND-FIRST</span>
    <span className="sp" data-en="© 2026 HADY SLEAM · BUILT BY HAND, NO TEMPLATE" data-ar="© 2026 هادي · معمول بإيدي، مش قالب">&copy; 2026 HADY SLEAM &middot; BUILT BY HAND, NO TEMPLATE</span>
  </div>
</div>
    </>
  );
}
