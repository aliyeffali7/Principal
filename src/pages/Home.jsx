import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRqta_L3d5fIFS78e3yfMbN4PWnwVaKocSd1UOu5IQC5UoJc1ry2hfzFA8nTSNnxQrgBO7MNBYg6B4Y_1qD6SU2nmOHY-CefdKrzdtYDO_p-_kjf9aRiSyYUX69ZvaX8yFJfBtySj3bYsanncQ-DyGBI19f9H0g7SjpRZbk-WYKjvKrIMQsCjfW_N64srxbYu98FjkNF_x6L-P4IRkuk3vKzAoLKcTapcisIVYE-p88XeyEpLMGuk-oQ0XgFNqe1MxRfrgFUnU9g'
const BANK_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSHPPWeLwMQS7aJTbb6s70ZvwV9F7cyXJK1b7YAD0svTxOqPWaZdVz0hSvBWsGSldthm0dIBiewEm-NZU5iagStw2IUKtrRDK9awHq0Biw5MEU7C7IIWBKZWaBp9vCO4A-uaMah8iV3fs5QTN6qz8U96L8bGeIQcyqV14T7HsD7m4nFoxD_uWTl6t6QK6x6BV7iK2GM3uP-RwmacROTDZYmhOFmqElD78tfzMZoyA'

const partners = ['GLOBEX BANK', 'SYNERGY CORP', 'FORTRESS FIN', 'VERTEX ASSET', 'NEXUS CAP', 'APEX CORP', 'TITAN FUND', 'DELTA GROUP']

const stats = [
  { value: '25+', label: 'İllik Təcrübə' },
  { value: '$12B+', label: 'Yoxlanılan Aktivlər' },
  { value: '400+', label: 'Qlobal Müştərilər' },
  { value: '15+', label: 'Qlobal Ofislər' },
]

const services = [
  {
    icon: 'balance',
    title: 'Auditor Xidmətləri',
    desc: 'Banklar, sığortaçılar və institusional qurumlar üçün IFRS və yerli GAAP ilə uyğunlaşdırılmış müstəqil statutar auditlər.',
    link: '/services/auditor',
  },
  {
    icon: 'calculate',
    title: 'Mühasibat Xidmətləri',
    desc: 'Maliyyə sağlamlığına dərin struktur anlayışı verən strateji mühasibat — sadə uçotun çox ötəsindədir.',
    link: '/services/accounting',
  },
  {
    icon: 'analytics',
    title: 'Qiymətləndirmə Xidmətləri',
    desc: 'Obyektiv göstəricilərə və dərin bazar kəşfiyyatına əsaslanan səlahiyyətli aktiv və biznes qiymətləndirilmələri.',
    link: '/services/valuation',
  },
  {
    icon: 'shield',
    title: 'Dövlət Satınalması',
    desc: 'Dəyişdirilməz audit izləri və uyğunluq protokolları ilə dövlət sektoru müqavilələrinin institusional-dərəcəli nəzarəti.',
    link: '/services/procurement',
  },
  {
    icon: 'monitoring',
    title: 'Maliyyə Ekspertizası',
    desc: 'Məhkəmə, arbitraj və mübahisə həlli üçün ekspert şahidlik xidmətləri və məhkəmə maliyyə təhlili.',
    link: '/services/financial-expertise',
  },
  {
    icon: 'attach_money',
    title: 'Gəlir & Xərc',
    desc: 'Mürəkkəb təşkilati strukturlarda gəlirin tanınması və xərc nəzarətinin ciddi yoxlanılması.',
    link: '/services/income-expense',
  },
]

export default function Home() {
  const partnersRef = useScrollReveal()
  const servicesRef = useScrollReveal()
  const statsRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-primary noise">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="İnstitusional memarlıq"
            className="w-full h-full object-cover opacity-25 scale-105"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/40" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full pb-32 pt-40">
          <div className="max-w-4xl">
            <div
              className="hero-animate inline-flex items-center gap-3 mb-8"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-8 h-px bg-secondary" />
              <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em]">
                Əsas. 1999 · Qlobal Audit & Zəmanət
              </span>
            </div>

            <h1
              className="hero-animate font-headline-xl text-white mb-8 leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)', animationDelay: '0.3s' }}
            >
              Audit &amp; Maliyyədə <br />
              <span className="text-gradient">Dəqiqlik və</span>
              <br />Mükəmməllik.
            </h1>

            <p
              className="hero-animate font-body-lg text-white/60 mb-12 max-w-xl leading-relaxed"
              style={{ fontSize: '18px', animationDelay: '0.5s' }}
            >
              15+ qlobal ofis üzrə mürəkkəb bank və korporativ mühitlər üçün hərtərəfli nəzarət və institusional-dərəcəli maliyyə kəşfiyyatı.
            </p>

            <div
              className="hero-animate flex flex-wrap gap-4 items-center mb-20"
              style={{ animationDelay: '0.7s' }}
            >
              <Link
                to="/services"
                className="group flex items-center gap-3 bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-md text-label-md uppercase tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-secondary/20"
              >
                Həllərə Bax
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-3 glass px-8 py-4 rounded-lg font-label-md text-label-md text-white uppercase tracking-widest hover:bg-white/15 transition-all"
              >
                Hekayəmiz
              </Link>
            </div>

            {/* Hero stat pills */}
            <div
              className="hero-animate flex flex-wrap gap-4"
              style={{ animationDelay: '0.9s' }}
            >
              {stats.map(s => (
                <div
                  key={s.label}
                  className="glass px-6 py-3 rounded-lg flex items-center gap-3"
                >
                  <span className="font-bold text-white text-xl">{s.value}</span>
                  <span className="font-label-md text-label-md text-white/50 uppercase tracking-widest text-[10px]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 scroll-indicator">
          <span className="font-label-md text-label-md text-white/30 text-[10px] uppercase tracking-widest">Aşağı</span>
          <span className="material-symbols-outlined text-white/30" style={{ fontSize: '20px' }}>keyboard_arrow_down</span>
        </div>
      </section>

      {/* ── Marquee partners strip ───────────────────────────── */}
      <section className="py-0 bg-surface-container-highest border-y border-outline-variant overflow-hidden">
        <div className="flex items-center">
          {/* Label */}
          <div className="flex-shrink-0 px-10 border-r border-outline-variant py-6 hidden md:flex items-center">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-[0.2em] text-[10px] whitespace-nowrap">
              Bizə Güvənir
            </span>
          </div>
          {/* Marquee */}
          <div className="overflow-hidden flex-1 py-5">
            <div className="marquee-track">
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-12 font-headline-md text-primary opacity-30 hover:opacity-70 transition-opacity duration-300 tracking-widest uppercase text-sm italic cursor-default select-none"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services grid ────────────────────────────────────── */}
      <section className="py-32 bg-background">
        <div
          ref={servicesRef}
          className="reveal max-w-container-max mx-auto px-margin-desktop"
        >
          {/* Heading */}
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="section-label mb-6 block">Peşəkar Xidmət Ekosistemi</span>
              <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
                İnstitusional Maliyyə üçün <br />İxtisaslaşmış Xidmətlər
              </h2>
            </div>
            <div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                İnstitusional maliyyə, bank tənzimlənməsi və böyük miqyaslı korporativ uyğunluğun ciddi tələbləri üçün hazırlanmış hərtərəfli xidmətlər paketi.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-label-md text-label-md text-primary uppercase tracking-wider hover:text-secondary transition-colors group"
              >
                Bütün Xidmətlər
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_outward
                </span>
              </Link>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link
                key={svc.title}
                to={svc.link}
                className="group relative bg-white border border-outline-variant rounded-2xl p-8 flex flex-col gap-6 hover:-translate-y-2 hover:border-secondary/40 hover:shadow-[0_20px_48px_-12px_rgba(5,27,14,0.12)] transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
                    <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>{svc.icon}</span>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" style={{ fontSize: '18px' }}>
                    arrow_outward
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured / Bank audit spotlight ─────────────────── */}
      <section className="py-16 bg-background">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="rounded-3xl overflow-hidden bg-primary grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[520px]">
            {/* Text */}
            <div className="py-24 pr-0 lg:pr-20 flex flex-col justify-center">
              <span className="section-label mb-8" style={{ color: '#3c6846' }}>
                <span className="w-6 h-px bg-secondary inline-block mr-3" />
                Əsas Kompetensiya
              </span>
              <h2 className="font-headline-lg text-headline-lg text-white mb-6 leading-tight">
                İnstitusional Bank <br />Audit Mükəmməlliyi
              </h2>
              <p className="font-body-md text-body-md text-white/60 mb-8 leading-relaxed max-w-md">
                Bank audit bölümümüz Basel III/IV, IFRS 9 və suveren uyğunluq çərçivələrinin mürəkkəb tənzimləyici mühitini naviqasiya edir — ən vacib məqamda əminlik çatdıraraq.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Tənzimləyici Uyğunluq (Basel III / IV)',
                  'Əməliyyat Riski İdarəsi',
                  'Kredit Portfelinin Yoxlanması & Stres Testi',
                  'AML & Fırıldaqçılıq Aşkarlama Çərçivələri',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/70 font-body-sm text-body-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/services/auditor"
                className="group inline-flex items-center gap-3 bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-md text-label-md uppercase tracking-widest hover:brightness-110 transition-all self-start"
              >
                Auditor Xidmətləri
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden min-h-[400px] lg:min-h-0">
              <img
                src={BANK_IMG}
                alt="Bank qurumu"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-10 right-10 glass p-6 max-w-[200px]">
                <p className="font-label-md text-label-md text-white/50 uppercase tracking-widest text-[10px] mb-2">
                  Uyğunluq Dərəcəsi
                </p>
                <p className="font-bold text-white text-4xl leading-none">99.8%</p>
                <p className="font-body-sm text-body-sm text-white/40 mt-2 text-[11px]">
                  2023-cü il bütün bank işləri üzrə
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <section
        ref={statsRef}
        className="reveal py-16 bg-background"
      >
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="bg-surface-container-low rounded-3xl border border-outline-variant p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center"
              >
                <div className="stat-number font-bold leading-none mb-3" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
                  {s.value}
                </div>
                <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-[0.2em] text-[11px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        ref={ctaRef}
        className="reveal py-32 bg-background"
      >
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="bg-primary rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 architectural-pattern opacity-40" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary/10 -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md uppercase tracking-widest text-[11px] mb-6">
                  <span className="w-5 h-px bg-secondary" />
                  Əməkdaşlığa Başlayın
                </span>
                <h2 className="font-headline-lg text-headline-lg text-white mb-6 leading-tight">
                  İnstitusional-Dərəcəli Zəmanəyə Hazırsınız?
                </h2>
                <p className="font-body-md text-body-md text-white/60 leading-relaxed">
                  Tənzimləyici öhdəliklərinizi və strateji məqsədlərinizi qarşılayan fərdi audit çərçivəsi hazırlamaq üçün baş tərəfdaşlarımızla danışın.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-3 bg-secondary text-on-secondary px-8 py-5 rounded-xl font-label-md text-label-md uppercase tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-secondary/20"
                >
                  Baş Tərəfdaşla Əlaqə
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-3 glass px-8 py-5 rounded-xl font-label-md text-label-md text-white uppercase tracking-widest hover:bg-white/15 transition-all"
                >
                  Bütün Xidmətlərə Bax
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
