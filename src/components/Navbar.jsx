import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAlQwb8GjZugUpQXfhmnlU94U8ExJ-O1jWC0CnCHGFf19d9QFXo32pLt570PZDQgWxrxsIb-Ac2Vn1uX8-P5ADJJYYaLK_F_fSiYqHTSWBCo0g8rZN6PR_21OZD1AxC2ZmwX3IK_G-YaNwVRJqJj7X-pZt6Ww1jfSLkrBkE2fyHEprPqzpLG2VIf8qDy4EiMYmuCRfxarM9b13aXIL-8e4_bOYVDsO9SEE9e75UxNhMAHSiq1ahQRkWOoOBSySuWdpZZmslQYg3A'

const NAV_LINKS = [
  { to: '/', label: 'Ana Səhifə' },
  {
    label: 'Xidmətlər',
    to: '/services',
    dropdown: [
      { to: '/services/auditor', label: 'Auditor Xidmətləri' },
      { to: '/services/related-auditor', label: 'Əlaqəli Auditor Xidmətləri' },
      { to: '/services/accounting', label: 'Mühasibat Xidmətləri' },
      { to: '/services/income-expense', label: 'Gəlir & Xərclər' },
      { to: '/services/financial-expertise', label: 'Maliyyə Ekspertizası' },
      { to: '/services/valuation', label: 'Qiymətləndirmə Xidmətləri' },
      { to: '/services/procurement', label: 'Dövlət Satınalması' },
    ],
  },
  { to: '/about', label: 'Haqqımızda' },
  { to: '/contact', label: 'Əlaqə' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  return (
    <>
      {/* Top accent line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary z-[60]" />

      <header
        className={`fixed top-[2px] w-full z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-background/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(5,27,14,0.08)]'
        }`}
        style={{ height: scrolled ? '64px' : '76px', transition: 'height 0.4s cubic-bezier(0.16,1,0.3,1), background 0.5s ease' }}
      >
        <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop h-full">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={LOGO_URL} alt="Principal Audit" className="h-14 w-auto object-contain" />
            <div className="flex flex-col leading-none">
              <span
                className={`font-headline-md font-bold tracking-tight transition-colors duration-300 ${
                  transparent ? 'text-white' : 'text-primary'
                }`}
                style={{ fontSize: '18px' }}
              >
                Principal Audit
              </span>
              <span className={`text-[10px] tracking-[0.18em] uppercase font-medium transition-colors duration-300 ${transparent ? 'text-white/60' : 'text-on-surface-variant'}`}>
                & Assurance
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.to}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-widest transition-all duration-200 ${
                      transparent
                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                        : location.pathname.startsWith('/services')
                        ? 'text-primary bg-surface-container'
                        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                    }`}
                  >
                    {link.label}
                    <span className="material-symbols-outlined text-base" style={{ fontSize: '14px' }}>
                      expand_more
                    </span>
                  </Link>

                  {/* Dropdown — outer div bridges the gap between link and panel */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 ${
                      activeDropdown === link.label ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                  >
                    <div
                      className={`bg-background rounded-xl border border-outline-variant shadow-2xl shadow-primary/10 overflow-hidden transition-all duration-200 ${
                        activeDropdown === link.label
                          ? 'opacity-100 scale-y-100'
                          : 'opacity-0 scale-y-95'
                      }`}
                      style={{ transformOrigin: 'top center' }}
                    >
                      <div className="p-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body-sm text-body-sm transition-all duration-150 group ${
                              location.pathname === item.to
                                ? 'bg-secondary-container text-on-secondary-container'
                                : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                            }`}
                          >
                            <span className="w-1 h-1 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-widest transition-all duration-200 ${
                    transparent
                      ? location.pathname === link.to
                        ? 'text-white bg-white/15'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                      : location.pathname === link.to
                      ? 'text-primary bg-surface-container'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-4">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden flex flex-col gap-1.5 p-2 rounded ${transparent ? 'text-white' : 'text-primary'}`}
            >
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0 w-4' : 'w-4'}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-primary/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-background shadow-2xl transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ paddingTop: '80px' }}
        >
          <nav className="p-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <p className="px-4 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">{link.label}</p>
                  <div className="ml-4 flex flex-col gap-1 border-l border-outline-variant pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="px-3 py-2.5 font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 font-body-md text-body-md rounded-lg transition-all ${
                    location.pathname === link.to
                      ? 'bg-secondary-container text-on-secondary-container font-semibold'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-6 border-t border-outline-variant mt-4">
              <Link to="/contact" className="w-full block text-center bg-primary text-on-primary py-3.5 px-6 rounded-lg font-label-md text-label-md uppercase tracking-widest hover:bg-secondary transition-colors">
                Əlaqə
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
