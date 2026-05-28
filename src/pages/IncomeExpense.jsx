import PageHero from '../components/PageHero'

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhPSe6vPhM_ImoZgyHPvX_VyiAPhd9YsQNQNOxxw6qWjqhtgXr8IM1_bRO9ZKfPY9NuQ7IFR5XFHyb3pD7HCoIrJVHV1E1IKz7DovH2m2p3l-uO7V95vcoTZnNm3onPBkXA-5DLz9v-uMEmydXxMmvJdd9Ch4Ko6CD-ai8TvSuQnfBE7DVl9ZEtJPKoGHFuwP3BcKbqMope8xTW5CCAMNLH0sc2TEiVwwPihGLV0DIw6EZEJhjNzSEdrK_s26EilC1pbB91qztuw'
const REPORT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXuFoF9VDlDRYobdFMCmCn9ijSvzt4kPxpAd5J_3dA3cMzqclcbNkNzNm-WpjyMaIYl0stvfiG8aSj1WInfGFvBE7Fl1EGtQjq5eMZaUWq1FgO5zYWUR9Q90d8fWnCtUu91uAmnYkDK6UEGUoM1OTp4pzUMb3iz_PPc8HEXg1yv1qZ6Tbw_8d5ewJtFpKPOCq6CzeWwHk9QRoQBEIRal0SoA5B44w6dvW9BvejbltWUaIM9BJOM4ITCptndPYU6qS3X2MhsFl9A'

const tableRows = [
  { cat: 'İnfrastruktur & Bulud', projected: '$1,420,000', actual: '$1,418,200', variance: '-0.13%', varClass: 'text-secondary', status: 'Yoxlanılmış', statusStyle: 'bg-secondary-fixed text-on-secondary-fixed' },
  { cat: 'Tədqiqat & İnkişaf Kapitallaşdırması', projected: '$890,500', actual: '$895,000', variance: '+0.51%', varClass: 'text-tertiary', status: 'Yoxlanılmış', statusStyle: 'bg-secondary-fixed text-on-secondary-fixed' },
  { cat: 'İnstitusional Uyğunluq', projected: '$340,000', actual: '$341,200', variance: '+0.35%', varClass: 'text-tertiary', status: 'Gözlənilir', statusStyle: 'bg-tertiary-fixed text-on-tertiary-container' },
]

const methodSteps = [
  { n: '01', title: 'Udulma & Doğrulama', desc: 'Modelləşdirməyə başlamazdan əvvəl müxtəlifliyini aradan qaldırmaq üçün xam maliyyə məlumatı xüsusi məhkəmə motorumuzu istifadə edərək təmizlənir və doğrulanır.' },
  { n: '02', title: 'Model Memarlığı', desc: 'Mövsümilik, bazar dəyişkənliyi və sektora xas gəlir tetikleyicilerini nəzərə alan fərdi qiymətləndirmə çərçivələrinin qurulması.' },
  { n: '03', title: 'Həssaslıq Testi', desc: 'Gəlir və xərc səviyyələri üçün yüksək etimad dəhlizlərini müəyyən etmək üçün modellər 10.000+ simulyasiya edilmiş iqtisadi ssenari ilə stres testinə məruz qalır.' },
  { n: '04', title: 'İnstitusional Attestasiya', desc: 'Daxili audit komitələri və xarici tənzimləyici orqanlar üçün tam sənədləşdirilmiş sertifikatlı qiymətləndirmə hesabatlarının son çatdırılması.' },
]

export default function IncomeExpense() {
  return (
    <main>
      <PageHero
        badge="İnstitusional Zəmanət"
        title="Gəlir və Xərc"
        titleHighlight="Qiymətləndirmə Xidmətləri"
        description="Yüksək riskli institusional mühitlərdə mürəkkəb gəlirin tanınması, xərc proqnozlaşdırması və çox səviyyəli xərc yoxlanması üçün mürəkkəb maliyyə modelləşdirməsi və məhkəmə auditi."
        image={HERO_IMG}
      />

      {/* Bento Grid */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Məhkəmə Modelləşdirmə Çərçivəsi</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
              Qiymətləndirmə mühərrikimiz ənənəvi mühasibat prinsiplərini qabaqcıl proqnozlaşdırma alqoritmləri ilə birləşdirərək maliyyə proqnozlarında mütləq aydınlıq çatdırır.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* Gəlirin Tanınması - geniş */}
            <div className="col-span-12 lg:col-span-8 bg-white border border-outline-variant rounded-2xl p-10 flex flex-col justify-between shadow-sm hover:border-secondary transition-all duration-300 group">
              <div>
                <div className="mb-8">
                  <span className="material-symbols-outlined text-secondary text-4xl">analytics</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Mürəkkəb Gəlirin Tanınması</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed max-w-xl">
                  Uzunmüddətli müqavilə mühasibatı, səviyyəli lisenziya və çoxelementli tənzimləmə üçün qabaqcıl modelləşdirmə. IFRS 15 və ASC 606 ilə uyğunluğu təmin edirik.
                </p>
              </div>
              <div className="flex items-center gap-4 text-secondary font-label-md text-label-md">
                <span>Çərçivəni Araşdır</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>

            {/* Məhkəmə Modelləşdirməsi */}
            <div className="col-span-12 lg:col-span-4 bg-surface-container-low border border-outline-variant rounded-2xl p-10 flex flex-col justify-between shadow-sm">
              <div>
                <div className="mb-8"><span className="material-symbols-outlined text-secondary text-4xl">search</span></div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Məhkəmə Modelləşdirməsi</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Gizli nümunələri, anomaliyaları və struktur səmərəliliklərini müəyyən etmək üçün əməliyyat xərclərinin dənəvər təhlili.
                </p>
              </div>
            </div>

            {/* Proqnozlaşdırma Dəqiqliyi */}
            <div className="col-span-12 lg:col-span-4 bg-white border border-outline-variant rounded-2xl p-10 shadow-sm">
              <div className="mb-8"><span className="material-symbols-outlined text-secondary text-4xl">query_stats</span></div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Proqnozlaşdırma Dəqiqliyi</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Maliyyə riskini azaltmaq üçün Monte Karlo simulyasiyaları və tarixi dispersiya təhlilindən istifadə edərək ehtimal proqnozlaşdırması.
              </p>
            </div>

            {/* İnstitusional Hesabat */}
            <div className="col-span-12 lg:col-span-8 bg-primary text-on-primary rounded-2xl p-10 flex items-center gap-12">
              <div className="hidden md:block w-1/3">
                <img src={REPORT_IMG} alt="Hesabat" className="rounded-xl opacity-50 grayscale" />
              </div>
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md mb-4 text-white">İnstitusional Hesabat</h3>
                <p className="font-body-md text-body-md text-surface-variant mb-6 leading-relaxed">
                  İdarə heyəti səviyyəli yoxlama, tənzimləyici bəyannamə və maraqlı tərəflərin şəffaflığı üçün hesabata hazır qiymətləndirilmələr çatdırın.
                </p>
                <button className="bg-secondary-fixed text-on-secondary-fixed px-6 py-2 rounded font-label-md text-label-md hover:bg-white transition-all">
                  Ağ Kitabı Yükləyin
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologiya */}
      <section className="py-24 border-t border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:sticky md:top-32 w-full md:w-1/3">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Dəqiqlik Metodologiyası</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
                Dörd sütunlu yanaşmamız hər qiymətləndirilmənin məlumat-reallığına və məhkəmə riqqətinə əsaslandırılmasını təmin edir.
              </p>
              <div className="p-6 bg-surface-container border-l-2 border-secondary rounded-r-xl">
                <p className="font-label-md text-label-md text-primary mb-2">Audit Standartı</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant italic">"İnstitusional standartlara hərtərəfli riayət, yüksək təzyiqli tənzimləyici mühitlərdə müdafiəolunabilir nəticələr təmin edir."</p>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-12">
              {methodSteps.map((s, i) => (
                <div key={s.n} className="flex gap-8 group">
                  <div className="font-headline-md text-headline-md text-outline-variant group-hover:text-secondary transition-colors">{s.n}</div>
                  <div className={`pb-12 ${i < methodSteps.length - 1 ? 'border-b border-outline-variant' : ''}`}>
                    <h4 className="font-headline-md text-headline-md text-primary mb-3">{s.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nümunə Cədvəl */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Nümunə Qiymətləndirmə Matrisi</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Dənəvər xərc təsnifatı və dispersiya izləmənin nümayişi.</p>
          </div>
          <div className="overflow-x-auto border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high border-b border-outline-variant">
                  {['Xərc Kateqoriyası', 'Proqnoz (Q4)', 'Faktiki (Q4)', 'Fərq', 'Vəziyyət'].map(h => (
                    <th key={h} className="px-6 py-4 font-label-md text-label-md text-primary uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {tableRows.map(r => (
                  <tr key={r.cat} className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 font-body-md text-on-surface font-semibold">{r.cat}</td>
                    <td className="px-6 py-4 font-body-md text-on-surface">{r.projected}</td>
                    <td className="px-6 py-4 font-body-md text-on-surface">{r.actual}</td>
                    <td className={`px-6 py-4 font-body-md font-bold ${r.varClass}`}>{r.variance}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${r.statusStyle}`}>{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <h2 className="font-headline-lg text-headline-lg mb-8">Mütləq Maliyyə Aydınlığına Nail Olun</h2>
          <p className="font-body-lg text-body-lg mb-12 max-w-2xl mx-auto opacity-80 leading-relaxed">
            Müdafiəolunabilir gəlir və xərc qiymətləndirilmələri üçün Principal Audit-ə güvənən dünyada aparıcı institusional qurumların sıralarına qoşulun.
          </p>
          <button className="bg-secondary-fixed text-on-secondary-fixed px-10 py-4 rounded-xl font-label-md text-label-md hover:scale-105 transition-transform active:scale-95">
            Mütəxəssislərimizlə Məsləhətləşin
          </button>
        </div>
      </section>
    </main>
  )
}
