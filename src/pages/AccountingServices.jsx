import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAAO_6amQ200j4W7izkvF8uyXJFa5uiCnXiFEYFOmyKDG9XcdvOgf9sJTyqEIcrs2sEcdOFu2ErDcRckJKvrnFLBrWIPOfgzYFt211G4YQLCNTZx_nS9mrVXjHnzhs5dofqZFb6RrdAOu9ttterz5ci2fb6ji9lX1HGXlHWNxUZDY3eH8cC_b9mfdnemVTAZ4ew59EofD5p9Xj4_HddUHY5SjZLgGBA0AnWncrDpP8-SW5C84kHYb0DE8erJbWSB14NCFTh1U3ZA'

const tableRows = [
  { cat: 'Suveren Qurum Vergisi', deliverable: 'Form 1120-F & Müqavilə Təhlili', freq: 'İllik', status: 'Yoxlanılmış', statusStyle: 'bg-secondary-fixed text-on-secondary-fixed-variant' },
  { cat: 'Konsolidə Edilmiş Hesabat', deliverable: 'Qrup Balans Hesabı & Gəlir/Zərər', freq: 'Rüblük', status: 'Yoxlanılmış', statusStyle: 'bg-secondary-fixed text-on-secondary-fixed-variant' },
  { cat: 'Aktiv Amortizasiyası', deliverable: 'MACRS & Alt Cədvəllər', freq: 'Aylıq', status: 'Gözlənilir', statusStyle: 'bg-tertiary-fixed text-on-tertiary-fixed-variant' },
]

const steps = [
  { n: '01', title: 'Kəşf & İdarəetmə', desc: 'Mövcud maliyyə strukturlarının, yurisdiksiyonel izin ayak izinin və mövcud uyğunluq maneələrinin dərin qiymətləndirilməsi.' },
  { n: '02', title: 'Kitab Memarlığı', desc: 'İnstitusional hesabat üçün uyğunlaşdırılmış hesablar planı və strateji mühasibat protokollarının tətbiqi.' },
  { n: '03', title: 'Davamlı Uzlaşdırma', desc: 'Ay sonunda sıfır-delta dəqiqliyi təmin etmək üçün bütün maliyyə fəaliyyətlərinin avtomatik və əl ilə çarpaz yoxlanması.' },
  { n: '04', title: 'İnstitusional Sertifikatlaşdırma', desc: 'Son audit təsdiqləməsi üçün idarə heyəti səviyyəli maliyyə hesabatlarının və qlobal vergi bəyannamələrinin hazırlanması və çatdırılması.' },
]

export default function AccountingServices() {
  return (
    <main>
      <PageHero
        badge="İnstitusional Keyfiyyət"
        title="Qlobal Maliyyə Suverenliyi üçün"
        titleHighlight="Dəqiq Mühasibat"
        description="Mürəkkəb korporativ strukturlar üçün hazırlanmış institusional-dərəcəli maliyyə hesabatlarının hazırlanması və beynəlxalq vergi uyğunluğunu təmin edərək sadə uçotun ötəsindəyik."
        image={HERO_IMG}
      />

      {/* Əsas Mühasibat Mandatları */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto bg-surface-container-low">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Əsas Mühasibat Mandatları</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Hərtərəfli məlumat uzlaşdırması və tənzimləyici uyğunluq vasitəsilə strateji idarəetmə.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
          {/* Böyük: Vergi */}
          <div className="md:col-span-2 md:row-span-2 bg-white border border-outline-variant rounded-2xl p-10 flex flex-col justify-between shadow-sm hover:border-secondary hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(5,27,14,0.1)] transition-all duration-300">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">account_balance</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Beynəlxalq Vergi Uyğunluğu</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Suveren ekspertizası ilə sərhədötəri yurisdiksiyaları naviqasiya edir. Birdən çox GAAP və IFRS çərçivəsində uyğunluğunuzu təmin edirik.
              </p>
            </div>
            <ul className="space-y-3 font-label-md text-label-md text-on-surface mt-8">
              {['Çox Yurisdiksiyalı Bəyannamələr', 'Transfer Qiymətləndirmə Sənədləri', 'BEPS Məsləhəti'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">check_circle</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Maliyyə Hesabatları */}
          <div className="md:col-span-2 bg-white border border-outline-variant rounded-2xl p-8 flex items-start gap-6 shadow-sm hover:border-secondary transition-all duration-300">
            <span className="material-symbols-outlined text-primary text-3xl">description</span>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Maliyyə Hesabatının Hazırlanması</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">İnstitusional investorlar və qlobal tənzimləyicilər üçün məhkəmə-dərəcəli detallarla hazırlanmış audit hazır hesabatlar.</p>
            </div>
          </div>

          {/* Strateji Mühasibat */}
          <div className="md:col-span-1 bg-white border border-outline-variant rounded-2xl p-8 shadow-sm hover:border-secondary transition-all duration-300">
            <span className="material-symbols-outlined text-primary text-3xl mb-4">analytics</span>
            <h3 className="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest">Strateji Mühasibat Uçotu</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Qabaqcıl uzlaşdırma protokolları ilə real vaxtda dəftər idarəsi.</p>
          </div>

          {/* Qurum Sağlamlığı */}
          <div className="md:col-span-1 bg-primary text-on-primary rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <h3 className="font-label-md text-label-md mb-2 uppercase tracking-widest text-on-primary-container">Qurum Sağlamlığı</h3>
            <div className="text-4xl font-headline-md">99.9%</div>
            <p className="font-body-sm text-body-sm opacity-80">Son onillikdə bütün yoxlanılmış hesabatlarda saxlanılan dəqiqlik dərəcəsi.</p>
          </div>
        </div>
      </section>

      {/* 4 Mərhələli Çərçivə */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-[1px] bg-outline-variant -z-10" />
          {steps.map((s, i) => (
            <div key={s.n} className="group">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-headline-md mb-8 group-hover:bg-secondary transition-colors ${i === 0 ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-primary border border-outline-variant group-hover:text-on-secondary'}`}>
                {s.n}
              </div>
              <h4 className="font-headline-md text-headline-md text-primary mb-4">{s.title}</h4>
              <p className="text-on-surface-variant text-body-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cədvəl */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Yoxlanılmış Hesabat Standartları</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Çıxışlarımız Dörd Böyük şirkətlər və əsas tənzimləyici orqanlara birbaşa təqdim üçün nəzərdə tutulmuşdur.</p>
          </div>
          <div className="flex gap-4">
            {['IFRS Uyğun', 'US GAAP Hazır'].map(badge => (
              <div key={badge} className="px-4 py-2 bg-white border border-outline-variant rounded-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                <span className="font-label-md text-label-md">{badge}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-highest border-b border-outline-variant">
                {['Xidmət Kateqoriyası', 'Əsas Çatdırılma', 'Tezlik', 'Vəziyyət'].map(h => (
                  <th key={h} className="px-6 py-4 font-label-md text-label-md text-primary uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {tableRows.map(r => (
                <tr key={r.cat} className="hover:bg-surface-container transition-colors">
                  <td className="px-6 py-4 font-body-md">{r.cat}</td>
                  <td className="px-6 py-4 font-body-sm text-on-surface-variant">{r.deliverable}</td>
                  <td className="px-6 py-4 font-body-sm text-on-surface-variant">{r.freq}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${r.statusStyle}`}>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-margin-desktop bg-primary text-on-primary text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg mb-8">İnstitusional İrsini Güvən Altına Alın.</h2>
          <p className="font-body-lg text-body-lg mb-12 opacity-80">Mühasibat təcrübənizin ilkin auditini bu gün başladın. Tərəfdaşlarımız 24 iş saatı ərzində cavab verir.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="inline-block bg-on-primary text-primary px-10 py-4 rounded-lg font-label-md text-label-md hover:bg-secondary-fixed transition-all">
              İlkin Konsultasiya Planlaşdırın
            </Link>
            <button className="border border-on-primary text-on-primary px-10 py-4 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all">
              İmkanlar Sənədini Yükləyin
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
