import { useScrollReveal } from '../hooks/useScrollReveal'

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnYoTdMSiWKTm_65FpCjMMHCGLrnVwOW7TmH1fLod057En7-qdWTHBee0ZNTg7I0EcjCfmkoqeakOJCozv6O5YXCMq4l3j9LdLGWavVCi6oq7laXiZ-G6zXYjwAs-uH-IR6KJOiWRqdfVq1x4RaWr2D1a5ya6PtIX-NUMw7n-d3jCJwx-9vonallw3DyR--toJhGdqvtdLnwbSwMgvfMQCuIYcTiXYnJNt1wX8MQPHFBW6fjJm4supNjprxWaev_mMzcrc_AOYMA'
const LEADER1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3M2dafN6CLT7CDAEjFPYXhXUzsynTyVqOzpgKRJon73f4_Pltp99BPMnpJehfLqvxEJt6oOYx8TxtxpqJNHZdH5b-8DkS_5CD6OgwZ9GNdyxVnB5rE6ttVdyO19renXUC7uqauMg_4qPL-oyprvmWTzPp4Hnmp9Wq4X_h_RlC2a-d26wYDUaX0EKnVAT0jdVwsHklZ-oDjPlmnmS2L9tM3nEu3xhEaz53RpDuXKHVrBv1NOEGffDvbeOYddUpmjT8_uAvIfKd6g'
const LEADER2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD283UuVVGO89EXDpszRvrYs5z8msa90iD7asrXzwrzVmW3ZIEh48BN6jZx54vRdK8OksCJxLher5JCHFxeWqKeXcRyHtDXJ0vdQp7xMQlJ4cK_9cDscApRzsBz2MaXcVDrnl_GGYs5k9QF_E3_EIb5lbTJv3qrqiEzq2GRjo_iACayqKzqKQa9axEoga5u7J8Apdr-CyXBDpFYAuErmFwytSm4eIslaachnjCqqL70NAlth9vw573waCvcI6m53br7R8ZA38Y_2w'
const LEADER3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8uQ2Visd5aSC0QePdiXvFH6aXUwuc8YAVMg5tge7xeSP2I3iiNN73BL1BoVe6Y5SXneYWe5kF5ETDUsUp06ihfwp5RrFNaXIsiJh3TmEb9HewmG91fujORIx8kgyqdO-n_6uppigyD-QbqtuCp3tjXP5kxblelT_-BPGwmU8IOASgOtTvP5hdg7h66ye_FfofRTwtxUNSDNtzSPppkSwAFdmYT40joxTGn5vn8112Gsv5-H4XA97Iw8WKo0LELR1qj-3BgRjlKQ'

const stats = [
  { icon: 'verified', value: '99.9%', label: 'Audit Dəqiqliyi', desc: '25 illik fasiləsiz fəaliyyət ərzində bütün yurisdiksiyalarda saxlanılmışdır.' },
  { icon: 'gavel', value: 'Sıfır', label: 'Uyğunluq Uğursuzluğu', desc: 'Bütün beynəlxalq tənzimləyici çərçivələrdə mütləq uyğunluq qeydi.' },
  { icon: 'groups', value: '250+', label: 'Mütəxəssislər', desc: 'Beş qitə və 15+ ofis üzrə sertifikatlı maliyyə ekspertləri.' },
  { icon: 'analytics', value: 'AI Əsaslı', label: 'Metodologiya', desc: 'Fırıldaqçılıq aşkarlanması və risk modelləşdirməsi üçün xüsusi analitik sistemlər.' },
]

const leaders = [
  { name: 'Jonathan Thorne', role: 'Baş İcraçı Direktor', quote: '"Dəqiqlik bir hərəkət deyil, bir vərdişdir. Biz onu hər audit əlaqəsinə toxuyuruq."', img: LEADER1 },
  { name: 'Dr. Elena Vance', role: 'İdarəedici Tərəfdaş, Risk', quote: '"Dürüstlük qlobal maliyyədə dəyərini heç vaxt itirməyən yeganə valyutadır."', img: LEADER2 },
  { name: 'Marcus Sterling', role: 'Uyğunluq Rəhbəri', quote: '"Standartlarımız dünyanın ən tələbkar bazarları tərəfindən müəyyən edilir."', img: LEADER3 },
]

const values = [
  { icon: 'verified_user', title: 'Əvvəlcə Dürüstlük', desc: 'Hər əməkdaşlıq mütləq müstəqillik və etik davranışla idarə olunur — danılmaz.' },
  { icon: 'precision_manufacturing', title: 'Hərtərəfli Dəqiqlik', desc: 'Məlumatları işləmək yerinə sorğulayırıq. Hər rəqəm institusional yoxlamanı davam etdirməlidir.' },
  { icon: 'public', title: 'Qlobal Perspektiv', desc: '15+ ofis üzrə fəaliyyət göstərərək ekspertizamız yurisdiksiyaları, valyutaları və tənzimləyici rejimlərə yayılır.' },
  { icon: 'trending_up', title: 'Strateji Anlayış', desc: 'Uyğunluğun ötəsindəyik — icraedici səviyyədə daha yaxşı qərarlar verməyi idarə edən kəşfiyyat çatdırırıq.' },
]

export default function About() {
  const storyRef = useScrollReveal()
  const valuesRef = useScrollReveal()
  const leadershipRef = useScrollReveal()

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-primary noise">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Korporativ görüşmə otağı" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary/20" />
          <div className="absolute inset-0 grid-pattern opacity-10" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full pb-24 pt-40">
          <div className="max-w-3xl">
            <span className="hero-animate inline-flex items-center gap-3 mb-6" style={{ animationDelay: '0.1s' }}>
              <span className="w-8 h-px bg-secondary" />
              <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em]">Əsas. 1999 · Hekayəmiz</span>
            </span>
            <h1 className="hero-animate font-headline-xl text-white mb-6 leading-[1.05]" style={{ fontSize: 'clamp(40px, 5vw, 72px)', animationDelay: '0.3s' }}>
              Hərtərəfli Dəqiqlik. <br />
              <span className="text-gradient">Sarsılmaz Dürüstlük.</span>
            </h1>
            <p className="hero-animate font-body-lg text-white/60 max-w-xl leading-relaxed" style={{ animationDelay: '0.5s' }}>
              Principal Audit texniki mükəmməllik və qlobal institusional maliyyədə ən yüksək etik standartlara sadiqlik əsasında qurulmuşdur.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section className="py-32 bg-background">
        <div
          ref={storyRef}
          className="reveal max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start"
        >
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="section-label mb-6 block">Mənşəyimiz</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8 leading-tight">
              Nizamın <br />Prinsipi
            </h2>
            <div className="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
              <p>
                1999-cu ildə qurulmuş Principal Audit, getdikcə mürəkkəbləşən maliyyə mühitində mütləq aydınlıq zərurətindən yaranmışdır. Şirkətimiz "principal" nizamın sadəcə metodologiya deyil — hər qurum üçün fundamental hüquq olduğuna inanan veteran auditorlar tərəfindən təsis edilmişdir.
              </p>
              <p>
                Məlumatları sadəcə emal etmirik; sorğulayırıq. Yanaşmamız ənənəvi audit ciddilik ilə müasir analitik alətləri birləşdirir, yoxladığımız hər rəqəmin ən intensiv institusional yoxlamanı davam etdirdiyini təmin edir.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-outline-variant" />
              <span className="text-on-surface-variant font-body-sm italic text-sm">25 illik institusional mükəmməllik</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div
                  key={s.value}
                  className="p-8 bg-surface border border-outline-variant card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-on-secondary-container" style={{ fontSize: '22px' }}>{s.icon}</span>
                  </div>
                  <div className="font-bold text-primary mb-1" style={{ fontSize: '28px' }}>{s.value}</div>
                  <div className="font-label-md text-label-md text-secondary uppercase tracking-widest text-[11px] mb-3">{s.label}</div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="py-32 bg-primary noise">
        <div
          ref={valuesRef}
          className="reveal max-w-container-max mx-auto px-margin-desktop"
        >
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-secondary" />
              <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em]">Əsasımız</span>
              <span className="w-8 h-px bg-secondary" />
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white leading-tight">
              Güzəştsiz Dəyərlər Üzərində Qurulmuşdur
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="p-8 bg-white/5 rounded-2xl border border-white/8 hover:bg-white/10 hover:border-white/15 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg border border-secondary/30 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
                  <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary transition-colors" style={{ fontSize: '22px' }}>{v.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-white mb-4">{v.title}</h3>
                <p className="font-body-sm text-body-sm text-white/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ───────────────────────────────────────── */}
      <section className="py-32 bg-background">
        <div
          ref={leadershipRef}
          className="reveal max-w-container-max mx-auto px-margin-desktop"
        >
          <div className="mb-16 flex flex-col md:flex-row md:items-end gap-6 justify-between">
            <div>
              <span className="section-label mb-6 block">İcraedici Rəhbərlik</span>
              <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
                Təcrübə ilə Rəhbərlik
              </h2>
            </div>
            <p className="max-w-md font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Ortaqlarımız dünyanın ən mürəkkəb maliyyə qurumlarından on illərlik ön cəbhə təcrübəsinə malikdirlər.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {leaders.map((l, i) => (
              <div
                key={l.name}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                  <img
                    src={l.img}
                    alt={l.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-headline-md text-headline-md text-white">{l.name}</h3>
                    <p className="font-label-md text-label-md text-secondary">{l.role}</p>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed border-l-2 border-secondary pl-4">
                  {l.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
