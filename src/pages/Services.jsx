import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const BUILDING_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfYloGe-qhHn5TWFnVW8RG470uUGMfBk5jdxHwDXlTbEQC91rTA_poRyBkrg6Tv2qjr_COXdzVrl5mBJTzJUEr9o3E_v6iUE6AomAHRjKVTCL7niqHO8vmE1VQyWO5HNM2hix5-hPPktAQ7fDFJBVUwV8koRZmqZS8lxaHP0hidMwseiVdcOLbkxqmmuWTkJpGGaQ9sF0h79Rb6xst85r8xJt6p0dPMcyMkBGE7OpCqFToFWDCNFAUcFg50YChIEHkveH-pGc13g'

const services = [
  {
    icon: 'verified_user',
    title: 'Auditor Xidmətləri',
    desc: 'Şirkətin daxilindəki şəffaflığı və fiskal sağlamlığı qorumaq üçün ciddi daxili və xarici audit protokolları.',
    link: '/services/auditor',
  },
  {
    icon: 'calculate',
    title: 'Mühasibat Xidmətləri',
    desc: 'Yüksək riskli korporativ mühitlər üçün uyğunlaşdırılmış peşəkar uçot və mürəkkəb maliyyə hesabatlarının hazırlanması.',
    link: '/services/accounting',
  },
  {
    icon: 'query_stats',
    title: 'Maliyyə Ekspertizası',
    desc: 'Böyüməni idarə etmək və məsuliyyəti azaltmaq üçün məhkəmə mühasibatlığı, qiymətləndirmə və strateji maliyyə planlaşdırması üzrə konsultativ xidmətlər.',
    link: '/services/financial-expertise',
  },
  {
    icon: 'gavel',
    title: 'Dövlət Satınalması',
    desc: 'Dövlət sektoru müqavilələri üçün hüquqi dəqiqlik və hərtərəfli audit izləri ilə ictimai müsabiqələrin mürəkkəbliyini naviqasiya etmək.',
    link: '/services/procurement',
  },
  {
    icon: 'analytics',
    title: 'Qiymətləndirmə Xidmətləri',
    desc: 'M&A və hesabat üçün obyektiv göstəricilərə və dərin bazar kəşfiyyatına əsaslanan səlahiyyətli biznes və aktiv qiymətləndirilmələri.',
    link: '/services/valuation',
  },
  {
    icon: 'receipt_long',
    title: 'Gəlir & Xərc Auditi',
    desc: 'Mürəkkəb təşkilati strukturlarda gəlirin tanınması və xərc nəzarətinin ciddi yoxlanılması.',
    link: '/services/income-expense',
  },
  {
    icon: 'task_alt',
    title: 'Əlaqəli Auditor Xidmətləri',
    desc: 'Balans cədvəlinin ötəsindəki ixtisaslaşmış zəmanət — İT auditləri, ESG hesabatı, razılaşdırılmış prosedurlar və tənzimləyici açıqlamalar.',
    link: '/services/related-auditor',
  },
]

function ServiceCard({ s }) {
  if (!s) return null
  return (
    <Link
      to={s.link}
      className="group bg-white border border-outline-variant rounded-2xl p-8 flex flex-col justify-between hover:border-secondary/40 hover:shadow-[0_16px_40px_-12px_rgba(5,27,14,0.1)] transition-all duration-300"
    >
      <div>
        <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center mb-5">
          <span className="material-symbols-outlined text-on-secondary-container" style={{ fontSize: '20px' }}>{s.icon}</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
          {s.title}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">{s.desc}</p>
      </div>
      <span className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary uppercase tracking-wider group-hover:text-secondary transition-colors">
        Ətraflı
        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontSize: '15px' }}>arrow_forward</span>
      </span>
    </Link>
  )
}

export default function Services() {
  const gridRef = useScrollReveal()
  const calloutRef = useScrollReveal()

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-40 pb-20 bg-primary noise relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/10 translate-y-1/3 translate-x-1/4 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop">
          <div className="max-w-3xl">
            <span className="hero-animate inline-flex items-center gap-3 mb-6" style={{ animationDelay: '0.1s' }}>
              <span className="w-8 h-px bg-secondary" />
              <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em]">İmkanlarımız</span>
            </span>
            <h1
              className="hero-animate font-headline-xl text-white mb-6 leading-tight"
              style={{ fontSize: 'clamp(40px, 5vw, 72px)', animationDelay: '0.3s' }}
            >
              İnstitusional Mükəmməllik üçün <br />
              <span className="text-gradient">Ekspert Maliyyə Həlləri</span>
            </h1>
            <p className="hero-animate font-body-lg text-white/60 leading-relaxed max-w-2xl" style={{ animationDelay: '0.5s' }}>
              Mürəkkəb maliyyə mühitlərində bütünlüyü qorumaq və uyğunluğu təmin etmək üçün nəzərdə tutulmuş səlahiyyətli və hərtərəfli audit xidmətləri.
            </p>
          </div>
        </div>
      </section>

      {/* ── Service Grid ─────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div
          ref={gridRef}
          className="reveal max-w-container-max mx-auto px-margin-desktop"
        >
          {/* Row 1: wide card + one regular card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {/* Wide card */}
            <div className="md:col-span-2 group bg-white border border-outline-variant rounded-2xl p-8 flex flex-col justify-between hover:border-secondary/40 hover:shadow-[0_16px_48px_-12px_rgba(5,27,14,0.1)] transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-secondary-container" style={{ fontSize: '22px' }}>account_balance</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-primary mb-3">Bankların və Maliyyə Qurumlarının Auditi</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                  Bank sektorları üçün ixtisaslaşmış tənzimləyici auditlər, kapital adekvatlığı, risk idarəsi uyğunluğu və beynəlxalq maliyyə hesabat standartlarına riayəti təmin edir. Hər balans cədvəlinə institusional dəqiqliklə yanaşırıq.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Tənzimləyici Uyğunluq', 'Risk Qiymətləndirilməsi'].map(tag => (
                    <span key={tag} className="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-md text-label-md rounded-full text-[10px] uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/services/auditor" className="inline-flex items-center gap-2 font-label-md text-label-md text-primary uppercase tracking-wider hover:text-secondary transition-colors group/link">
                Ətraflı
                <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform" style={{ fontSize: '16px' }}>arrow_forward</span>
              </Link>
            </div>

            {/* Regular card — Auditor Services */}
            <ServiceCard s={services.find(s => s.title === 'Auditor Xidmətləri')} />
          </div>

          {/* Row 2: three equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {['Mühasibat Xidmətləri', 'Maliyyə Ekspertizası', 'Dövlət Satınalması'].map(title => (
              <ServiceCard key={title} s={services.find(s => s.title === title)} />
            ))}
          </div>

          {/* Row 3: remaining cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {['Qiymətləndirmə Xidmətləri', 'Gəlir & Xərc Auditi', 'Əlaqəli Auditor Xidmətləri'].map(title => (
              <ServiceCard key={title} s={services.find(s => s.title === title)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Callout ───────────────────────────────────────────── */}
      <section className="py-16 pb-32 bg-background">
        <div
          ref={calloutRef}
          className="reveal max-w-container-max mx-auto px-margin-desktop"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-primary rounded-3xl overflow-hidden">
            <div className="p-16 flex flex-col justify-center">
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-secondary" />
                <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em] text-[11px]">Güzəştsiz Keyfiyyət</span>
              </span>
              <h2 className="font-headline-lg text-headline-lg text-white mb-6 leading-tight">
                Mürəkkəblik Olduğu Yerdə Aydınlıq
              </h2>
              <p className="font-body-md text-body-md text-white/60 mb-10 leading-relaxed">
                Sertifikatlı peşəkarlar komandamız müasir diaqnostik alətlər və on illərlik institusional bilik sayəsində ən tələbkar mühitlərdə əminlik çatdırır.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-md text-label-md uppercase tracking-widest hover:brightness-110 transition-all self-start"
              >
                Konsultasiya Planlaşdırın
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="relative min-h-[400px] overflow-hidden">
              <img
                src={BUILDING_IMG}
                alt="Müasir Memarlıq"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
