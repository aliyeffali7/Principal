import PageHero from '../components/PageHero'

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1QBhW6vBXVyZViPQeO5IM1bR1n9iQWi5hDib-GXWfR_W1-ZA396yJfI6orfi7K8mC16V2Dn0K-eXNs6meQv__wjQc1SRfwAIwjcvuoytGSsWWQS1U1dbI3Nuv8tvnUGBKB5PYEJStmKcIjNqsbYrgEGL2yuohvXqfWZqk-7CaxEHb6skutc0g2Q2OYbSJYmK85Pgbd3SYnTs3zUSPaKIuL4cGs82uGjPO8KcmvPO77pPIOUR_R1dlYXL1Wr12eGxNlK9meLpqMw'
const ROOM_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPMWJ_wbUuVLBKQVKK5mDK2YFOtU-zBCs1ov2jzp0ziifp1U2GbPH2-m2HkT8yejb8vbmgOUE9IIDUSQD0AIF7mz8EJKPVNZyHF8fi-DGE7kwf7lfI9qIpmxfso0vfbZ_nbQXpoEjfSMEd_-2XLcRB3AMlTuwrOyIduwHBwJCAsyxe3H0i0uQaOBW9UY-qDdEQQ-HaW1ceuoOgkYFFjwBrZqGzFDuzalM-NeC8PhbgnsZcFI971ceIRqajOBGR6e3HMlmRewtlqg'

const tableRows = [
  { phase: '1. İlkin Qiymətləndirmə', objective: 'Əhatə dairəsini və yüksək səviyyəli risk məruzəliyini müəyyənləşdirin.', deliverable: 'Mümkünlük Memorandumu', badge: 'ƏNƏNƏVI', badgeStyle: 'bg-secondary-container text-on-secondary-container' },
  { phase: '2. Sahə Araşdırması', objective: 'Hərtərəfli məlumat çıxarımı və maraqlı tərəflərlə müsahibə.', deliverable: 'Sübut Bağlayıcısı', badge: 'İNTENSİV', badgeStyle: 'bg-tertiary-container text-on-tertiary-container' },
  { phase: '3. Analitik Modelləşdirmə', objective: 'Maliyyə təsirləri və itkilərinin kəmiyyət modelləşdirməsi.', deliverable: 'İqtisadi Ziyan Hesabatı', badge: 'DƏQİQLİK', badgeStyle: 'bg-secondary-container text-on-secondary-container' },
  { phase: '4. Ekspert Bəyannaməsi', objective: 'Hüquqi qeyd üçün tapıntıların rəsmi təqdim edilməsi.', deliverable: 'Sertifikatlı Ekspert Hesabatı', badge: 'TAMAMLANDI', badgeStyle: 'bg-primary text-white' },
]

export default function FinancialExpertise() {
  return (
    <main>
      <PageHero
        badge="İnstitusional Dərəcəli Məsləhət"
        title="Maliyyə Ekspertizası &"
        titleHighlight="Məhkəmə Bütövlüyü"
        description="Korporativ restrukturizasiya üçün hərtərəfli məhkəmə mühasibatlığı, məhkəmə dəstəyi və strateji məsləhətlə yüksək riskli maliyyə mühitlərini naviqasiya edir."
        image={HERO_IMG}
      />

      {/* Xidmətlər Bento */}
      <section className="py-24 bg-surface px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Əsas Ekspertiza Sahəsi</h2>
          <div className="h-1 w-24 bg-secondary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Məhkəmə - geniş */}
          <div className="md:col-span-8 group relative overflow-hidden bg-white border border-outline-variant rounded-2xl p-8 flex flex-col justify-between min-h-[400px] shadow-sm hover:border-secondary hover:shadow-[0_12px_32px_-8px_rgba(5,27,14,0.1)] transition-all duration-300">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4">account_balance_wallet</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Məhkəmə Mühasibatlığı &amp; Fırıldaqçılıq Araşdırması</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                Maliyyə qanunsuzluqlarını müəyyən etmək, zərərləri kəmiyyətcə müəyyənləşdirmək və institusional idarəetmə və hüquqi proseslər üçün aydın, sənədləşdirilmiş izlər vermək üçün qabaqcıl araşdırma üsullarından istifadə edirik.
              </p>
            </div>
            <div className="mt-8 relative z-10">
              <ul className="grid grid-cols-2 gap-4 font-label-md text-label-md text-primary">
                {['Aktiv İzlənməsi', 'Rüşvətəqarşı Uyğunluq', 'Maliyyə Yenidən Qurulması', 'Bütövlük Lazımi Yoxlama'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">check_circle</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-[-10%] top-[-10%] opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-[300px]">architecture</span>
            </div>
          </div>

          {/* Məhkəmə Dəstəyi */}
          <div className="md:col-span-4 bg-primary text-white rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-4">gavel</span>
              <h3 className="font-headline-md text-headline-md mb-4">Ekspert Şahid &amp; Məhkəmə Dəstəyi</h3>
              <p className="font-body-md text-body-md text-white/70">
                Ciddi məlumat təhlili ilə dəstəklənən səlahiyyətli şəhadət. Mürəkkəb maliyyə ssenarilərini məhkəmə aydınlığı üçün sadələşdiririk.
              </p>
            </div>
            <div className="mt-6 border-t border-white/20 pt-6">
              <a href="#" className="flex items-center justify-between font-label-md text-label-md group">
                İŞ TARİXİMİZ HAQQINDA ÖYRƏNİN
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Korporativ Restrukturizasiya */}
          <div className="md:col-span-6 bg-white border border-outline-variant rounded-2xl p-8 flex gap-6 items-start shadow-sm hover:border-secondary transition-all duration-300">
            <div className="bg-surface-container-high p-4 rounded-xl flex-shrink-0">
              <span className="material-symbols-outlined text-primary">corporate_fare</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Korporativ Restrukturizasiya</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Çətin ssenarilərdə müvəffəqiyyətli dönüş, likvidlik idarəsi və borc reorganizasiyası üçün zəruri strateji maliyyə çərçivəsinin təmin edilməsi.
              </p>
            </div>
          </div>

          {/* Mübahisə Qiymətləndirilmələri */}
          <div className="md:col-span-6 bg-white border border-outline-variant rounded-2xl p-8 flex gap-6 items-start shadow-sm hover:border-secondary transition-all duration-300">
            <div className="bg-surface-container-high p-4 rounded-xl flex-shrink-0">
              <span className="material-symbols-outlined text-primary">analytics</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Mübahisə Qiymətləndirilmələri</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Səhmdar mübahisələri, nikah pozulması və kommersiya mübahisələri üçün müstəqil və obyektiv biznes qiymətləndirilmələri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Texniki Dərinlik */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Ekspert Şahid İmkanları</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
              Tərəfdaşlarımız "Aydınlıq Principalları" kimi tanınır. Yüksək profilli beynəlxalq arbitrajlar və yerli kommersiya məhkəmələrindəki şəhadət üçün tələb olunan intellektual riqqəti təmin edirik.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Metodoloji Riqqət', desc: 'Hər nəticə çarpaz sorğulamağa dözümlü olmasını təmin etmək üçün ən ciddi audit standartları ilə stres testinə məruz qalır.' },
                { title: 'Məlumat Vizualizasiyası', desc: 'Minlərlə maliyyə məlumat sıralarını hakimlər və münsiflər üçün sezgisel vizual sübutlara çevirmək.' },
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1 bg-secondary" />
                  <div>
                    <h4 className="font-label-md text-label-md text-primary uppercase mb-1">{item.title}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-fixed opacity-20 rounded-full blur-3xl" />
            <div className="relative bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <img src={ROOM_IMG} alt="Konfrans otağı" className="w-full aspect-[4/3] object-cover" />
              <div className="p-8">
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-surface-variant">İş Nümunəsi: ID-9942</span>
                  <span className="text-secondary font-bold">YOXLANILMIŞ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Əməkdaşlıq Prosesi Cədvəli */}
      <section className="py-24 max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Əməkdaşlıq Standartı</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Maliyyə mübahisəsinin həllinə sistematik yanaşmamız.</p>
        </div>
        <div className="overflow-hidden border border-outline-variant rounded-2xl shadow-sm">
          <table className="w-full text-left zebra-table">
            <thead className="bg-surface-container-highest border-b border-outline-variant">
              <tr>
                {['Mərhələ', 'Məqsəd', 'Çatdırılma', 'Vəziyyət'].map(h => (
                  <th key={h} className="p-4 font-label-md text-label-md text-primary uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="font-body-sm text-body-sm text-on-surface">
              {tableRows.map(r => (
                <tr key={r.phase} className="border-b border-outline-variant">
                  <td className="p-4 font-bold">{r.phase}</td>
                  <td className="p-4">{r.objective}</td>
                  <td className="p-4">{r.deliverable}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded text-[10px] font-bold ${r.badgeStyle}`}>{r.badge}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-margin-mobile">
          <h2 className="font-headline-lg text-headline-lg mb-6">Maliyyə Mövqeyinizi Güvən Altına Alın</h2>
          <p className="font-body-md text-body-md text-white/70 mb-10">
            Cari restrukturizasiya ehtiyaclarınızı və ya məhkəmə tələblərinizi qiymətləndirmək üçün baş tərəfdaşlarımıza müraciət edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary-fixed text-on-secondary-fixed px-10 py-4 rounded-xl font-label-md text-label-md hover:brightness-110 transition-all">
              GİZLİ BRİFİNQ İSTƏYİN
            </button>
            <button className="border border-white/30 px-10 py-4 rounded-xl font-label-md text-label-md hover:bg-white/10 transition-all">
              QLOBAL OFİSLƏ ƏLAQƏ SAXLAYIN
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
