import { Link } from 'react-router-dom'

const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAlQwb8GjZugUpQXfhmnlU94U8ExJ-O1jWC0CnCHGFf19d9QFXo32pLt570PZDQgWxrxsIb-Ac2Vn1uX8-P5ADJJYYaLK_F_fSiYqHTSWBCo0g8rZN6PR_21OZD1AxC2ZmwX3IK_G-YaNwVRJqJj7X-pZt6Ww1jfSLkrBkE2fyHEprPqzpLG2VIf8qDy4EiMYmuCRfxarM9b13aXIL-8e4_bOYVDsO9SEE9e75UxNhMAHSiq1ahQRkWOoOBSySuWdpZZmslQYg3A'

const services = [
  { to: '/services/auditor', label: 'Auditor Xidmətləri' },
  { to: '/services/related-auditor', label: 'Əlaqəli Auditor' },
  { to: '/services/accounting', label: 'Mühasibat' },
  { to: '/services/income-expense', label: 'Gəlir & Xərclər' },
  { to: '/services/financial-expertise', label: 'Maliyyə Ekspertizası' },
  { to: '/services/valuation', label: 'Qiymətləndirmə' },
  { to: '/services/procurement', label: 'Dövlət Satınalması' },
]

const company = [
  { to: '/about', label: 'Haqqımızda' },
  { to: '/contact', label: 'Əlaqə' },
  { to: '#', label: 'Gizlilik Siyasəti' },
  { to: '#', label: 'İstifadə Şərtləri' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary">
      {/* Top separator accent */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-40" />

      <div className="max-w-container-max mx-auto px-margin-desktop pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-gutter gap-y-12">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-xl p-1.5 flex-shrink-0">
                <img src={LOGO_URL} alt="Principal Audit" className="h-10 w-auto object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white tracking-tight" style={{ fontSize: '18px' }}>
                  Principal Audit
                </span>
                <span className="text-[10px] tracking-[0.18em] uppercase font-medium text-white/50">
                  & Assurance
                </span>
              </div>
            </Link>
            <p className="font-body-sm text-body-sm text-white/60 leading-relaxed mb-8 max-w-xs">
              Peşəkarlıq, Dəqiqlik, Dürüstlük. Mürəkkəb korporativ və bank mühitləri üçün institusional-dərəcəli maliyyə kəşfiyyatı.
            </p>
            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="tel:+994102607788"
                className="flex items-center gap-3 font-body-sm text-body-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors" style={{ fontSize: '16px' }}>phone_in_talk</span>
                +994 10 260 77 88
              </a>
              <a
                href="mailto:Info@principal.az"
                className="flex items-center gap-3 font-body-sm text-body-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors" style={{ fontSize: '16px' }}>mail</span>
                Info@principal.az
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: 'language', href: '#' },
                { icon: 'business', href: '#' },
                { icon: 'article', href: '#' },
              ].map(({ icon, href }) => (
                <a
                  key={icon}
                  href={href}
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-label-md text-label-md text-white/40 uppercase tracking-[0.2em] mb-6">Xidmətlər</h4>
            <nav className="flex flex-col gap-3">
              {services.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-body-sm text-body-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-label-md text-label-md text-white/40 uppercase tracking-[0.2em] mb-6">Şirkət</h4>
            <nav className="flex flex-col gap-3">
              {company.map(({ to, label }) => (
                <Link
                  key={label}
                  to={to}
                  className="font-body-sm text-body-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="font-label-md text-label-md text-white/40 uppercase tracking-[0.2em] mb-6">Bazar Kəşfiyyatı</h4>
            <p className="font-body-sm text-body-sm text-white/60 leading-relaxed mb-5">
              Rüblük audit & maliyyə kəşfiyyatı brifinqimizə abunə olun — menecerlər və institusional peşəkarlar üçün.
            </p>
            <form onSubmit={e => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="İnstitusional e-poçtunuz"
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 font-body-sm text-body-sm rounded-lg focus:border-secondary/60 focus:bg-white/8 outline-none transition-all"
              />
              <button
                type="submit"
                className="w-full bg-secondary text-on-secondary py-3 px-6 rounded-lg font-label-md text-label-md uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Abunə Ol
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-sm text-body-sm text-white/30 text-center md:text-left">
            © {new Date().getFullYear()} Principal Audit & Assurance. Bütün hüquqlar qorunur.
          </p>
          <div className="flex gap-6">
            {['Peşəkarlıq', 'Dəqiqlik', 'Dürüstlük'].map((word, i) => (
              <span key={i} className="font-label-md text-label-md text-white/20 uppercase tracking-widest text-[10px]">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
