import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvbMHrdVSCfD519ug7EfFGqDuOMhsky-Gf8BVjgg9zQ9z3uyqpzrorofCthXZ2vBERJYms0p0VJAWC5I_rAu76YiykqAOBV8ukM873ebQEnHG_v3ifSGk9wSLn-tB0C3QQHlr1wcHW8dG9JWLZCMLXPDizVfKZ5W7KPkj_rDJ3MpbNGW4UJ6WYFD-xJ3zTIizUUl5iic11nwtfI9ZzyoxH3f3kAnB0UmrNrC_MrOfKOwQP01QOF1T4AkVfzN7FRi5OwAIq808klA'

const matrixRows = [
  { id: 'PR-001', domain: 'Tender Spesifikasiyasının Doğrulanması', tier: 'Suveren', status: 'YOXLANILMIŞ', statusStyle: 'bg-[#e1f5e6] text-[#0a2e16]' },
  { id: 'PR-009', domain: 'Satıcı Maraq Ziddiyyəti Yoxlanması', tier: 'İnstitusional', status: 'YOXLANILMIŞ', statusStyle: 'bg-[#e1f5e6] text-[#0a2e16]' },
  { id: 'PR-024', domain: 'Fond Ödənişi & Mərhələ Yoxlanması', tier: 'Suveren', status: 'GÖZLƏNİLİR', statusStyle: 'bg-[#fff7e1] text-[#735c00]' },
  { id: 'PR-038', domain: 'Mükafatdan Sonra Müqavilə İcrası Auditi', tier: 'Standart', status: 'YOXLANILMIŞ', statusStyle: 'bg-[#e1f5e6] text-[#0a2e16]' },
]

const features = [
  { icon: 'shield_with_heart', title: 'Bütövlük Yoxlanması', desc: 'Suveren riski azaltmaq üçün satıcı arxa planı və son benefisiar mülkiyyəti (UBO) avtomatik yoxlanması.' },
  { icon: 'visibility', title: 'Şəffaflıq Protokolları', desc: 'İctimai xərclərin dövrü üzrə real vaxt görmə imkanı təmin edən ictimai üzlü şəffaflıq tablolar.' },
  { icon: 'account_tree', title: 'Audit İzləri', desc: 'Hər sənəd versiyasının, təsdiqləmə imzasının və maliyyə ödənişinin dəyişdirilməz dəftər əsaslı izlənməsi.' },
]

export default function PublicProcurement() {
  return (
    <main>
      <PageHero
        badge="Suveren Dərəcəli Zəmanət"
        title="Dövlət Satınalması"
        titleHighlight="Xidmətləri"
        description="Hərtərəfli audit izləri və hüquqi dəqiqlik vasitəsilə institusional bütövlüyü təmin edirik. Yüksək riskli dövlət sektoru müqavilələri üçün zəruri şəffaflıq protokollarını təmin edirik."
        image={HERO_IMG}
      />

      {/* Bento */}
      <section className="py-32 px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Dəqiq Audit İnfrastrukturu</h2>
          <div className="w-16 h-1 bg-secondary mb-8" />
        </div>
        <div className="grid grid-cols-12 gap-6">
          {/* Hüquqi Dəqiqlik - geniş */}
          <div className="bento-item col-span-12 md:col-span-7 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">gavel</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Hüquqi Dəqiqlik &amp; Uyğunluq</h3>
              <p className="text-on-surface-variant mb-6">
                Audit izlərimiz ən ciddi hüquqi yoxlamaya dözümlü olmaq üçün qurulmuşdur. Hər satınalma qərarını yerli və beynəlxalq qanuni tələblərə uyğunlaşdırırıq.
              </p>
            </div>
            <ul className="space-y-3">
              {['Qanunvericilik çərçivəsi uyğunlaşdırması', 'Korrupsiyaəleyhinə protokol inteqrasiyası', 'Məhkəməyə hazır sənəd ixracatı'].map(item => (
                <li key={item} className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Səviyyə IV */}
          <div className="bento-item col-span-12 md:col-span-5 bg-primary text-on-primary border-none flex flex-col justify-center items-center text-center">
            <p className="font-label-md text-label-md text-on-primary-container mb-2">AUDİT DƏRİNLİYİ</p>
            <div className="text-[64px] font-bold leading-tight mb-4">Səviyyə IV</div>
            <p className="font-body-md text-body-md opacity-80 px-8">Çox milyard dollarlıq infrastruktur və müdafiə müqavilələri üçün ən yüksək institusional səviyyə.</p>
          </div>

          {features.map(f => (
            <div key={f.title} className="bento-item col-span-12 md:col-span-4">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">{f.icon}</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">{f.title}</h3>
              <p className="text-on-surface-variant text-body-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Uyğunluq Matrisi */}
      <section className="bg-surface-container py-32">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Satınalma Uyğunluğu Matrisi</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Dövlət sektoru işləri üçün standartlaşdırılmış audit nöqtələrimizi yoxlayın.</p>
          </div>
          <div className="bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left zebra-table border-collapse">
              <thead>
                <tr className="bg-surface-container-highest border-b border-outline-variant">
                  {['Protokol ID', 'Zəmanət Sahəsi', 'Dəqiqlik Səviyyəsi', 'Vəziyyət'].map(h => (
                    <th key={h} className="px-6 py-4 font-label-md text-label-md text-primary uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrixRows.map(r => (
                  <tr key={r.id}>
                    <td className="px-6 py-4 font-label-md text-primary">{r.id}</td>
                    <td className="px-6 py-4">{r.domain}</td>
                    <td className="px-6 py-4">{r.tier}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${r.statusStyle}`}>{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="max-w-3xl mx-auto border-l-4 border-secondary pl-12 text-left">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Qurumunuzun İrsini Güvən Altına Alın</h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg mb-8">
            Principal Audit &amp; Zəmanət ictimai etibarı qorumaq üçün tələb olunan hərtərəfli nəzarəti təmin edir. Fərdi audit çərçivəsini müzakirə etmək üçün ixtisaslaşmış satınalma bölümümüzlə əlaqə saxlayın.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block font-label-md text-label-md text-primary mb-2">İNSTİTUSİONAL E-POÇT</label>
              <input className="w-full border border-outline-variant p-4 rounded-xl bg-white" placeholder="official@entity.gov" type="email" />
            </div>
            <Link to="/contact" className="inline-block bg-primary text-on-primary px-12 py-4 h-fit self-end rounded-xl font-label-md text-label-md hover:bg-secondary transition-all">
              Konsultasiyaya Başlayın
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
