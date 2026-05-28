import PageHero from '../components/PageHero'

const ESG_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8XeqCQtn8kvxXHIG2toz_0GzCNgjR6MlmHrq0wmxYHR-Z1O3RQW7YTD--_UvvzZ-CL3t6EZKasQhtc77dQnjAFr4gciLEtjPNNgFgKWH3aq4H2IbtRdVJcBkkXCOOtjcqJWEtrwfu_GvS5Ik3dyDkSZjvlIvRgMRTeD1FhyN97Iikj9duPj9vw3OLwmQ1xEVYykvrvfK0OGepvcC9am8UHWqzY77CZOBlE9IG8-bQ3Gp812fL0exXK_BCneFoy33QixaYVvCJSw'

const impactRows = [
  { sector: 'Maliyyə Qurumları', type: 'Risk Modeli Yoxlanması', level: 'Yüksək (Əsaslı)', status: 'YOXLANILMIŞ', statusColor: 'bg-secondary-container text-on-secondary-container' },
  { sector: 'Enerji & Kommunal', type: 'Karbon Emissiyası Zəmanəti', level: 'Orta (Məhdud)', status: 'GÖZLƏNİLİR', statusColor: 'bg-tertiary-container text-on-tertiary-container' },
  { sector: 'Qlobal İstehsal', type: 'Daxili Nəzarət Matrisi', level: 'Yüksək (Əsaslı)', status: 'YOXLANILMIŞ', statusColor: 'bg-secondary-container text-on-secondary-container' },
  { sector: 'Texnologiya Mərkəzi', type: 'Məlumat Məxfiliyi Protokolu', level: 'Müəyyən Yoxlama', status: 'YOXLANILMIŞ', statusColor: 'bg-secondary-container text-on-secondary-container' },
]

const domains = [
  { icon: 'security', title: 'İT & Sistem Auditləri', desc: 'Struktur zəifliklərin qarşısını almaq üçün ERP sistemlərinin və məlumat bütövlüyü protokollarının dərin texniki yoxlamaları.' },
  { icon: 'description', title: 'Razılaşdırılmış Prosedurlar', desc: 'Rəhbərlik və ya üçüncü tərəf maraqlılar tərəfindən müəyyən edilmiş narahatlıq sahələrinə yönəlmiş fərdi əhatəli işlər.' },
  { icon: 'account_balance', title: 'Tənzimləyici Açıqlamalar', desc: 'Mərkəzi banklar və ya beynəlxalq nəzarət orqanları tərəfindən tələb olunan ixtisaslaşmış tənzimləyici bəyannamələrin yoxlanması.' },
]

const steps = [
  { n: '01', title: 'Diaqnostik Əhatə', desc: 'Hüquqi və peşəkar müdafiəolunabilirliyi təmin etmək üçün ISAE 3000/3410 qlobal standartları ilə iş parametrlərini uyğunlaşdırırıq.' },
  { n: '02', title: 'Sübutun Sintezi', desc: 'Yüksək dəqiqlikli nümunə götürmə və yoxlama metodologiyalarından istifadə edərək fiziki və rəqəmsal aktivlər üzrə sistematik məlumat toplanması.' },
  { n: '03', title: 'İnstitusional Hesabat', desc: 'İdarə heyəti və tənzimləyicilər üçün aydın, birmənalı nəticələr verən yüksək keyfiyyətli zəmanət hesabatlarının hazırlanması.' },
]

export default function RelatedAuditorServices() {
  return (
    <main>
      <PageHero
        badge="İxtisaslaşmış Zəmanətlər"
        title="Əlaqəli Auditor Xidmətləri:"
        titleHighlight="Balans Cədvəlinin Ötəsindəki Dəqiqlik"
        description="Mürəkkəb institusional mühitləri naviqasiya etmək standart uyğunluqdan daha çox şey tələb edir. Əlaqəli xidmətlərimiz davamlılıq göstəriciləri, daxili nəzarət çərçivələri və ixtisaslaşmış texniki sahələrdə kritik zəmanət verir."
        image={ESG_IMG}
      />

      {/* Texniki Sahələr */}
      <section className="py-20 px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-2">Texniki Zəmanət Sahələri</h2>
          <div className="w-24 h-1 bg-secondary mb-6" />
          <p className="text-on-surface-variant max-w-2xl">Qeyri-maliyyə və struktur parametrlər üzrə mütləq yoxlama tələb edən qurumlar üçün yüksək keyfiyyətli təhlil.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* ESG - geniş */}
          <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-10 rounded-xl hover-lift">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">eco</span>
                <h3 className="font-headline-md text-headline-md mb-4">Dayanıqlılıq &amp; ESG Hesabatı</h3>
                <p className="text-on-surface-variant mb-6">ESG açıqlamalarında hərtərəfli zəmanət, davamlılıq məlumatlarınızın maliyyə hesabatları ilə eyni ciddi standartlara uyğunluğunu təmin edir.</p>
                <ul className="space-y-3 font-label-md text-label-md text-secondary">
                  {['İstixana Qazı Protokolu Yoxlanması', 'TCFD Uyğunlaşma Auditləri', 'GRI Standart Uyğunluğu'].map(item => (
                    <li key={item} className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-64 h-64 bg-surface-container rounded-lg overflow-hidden border border-outline-variant">
                <img src={ESG_IMG} alt="ESG" className="w-full h-full object-cover grayscale contrast-125" />
              </div>
            </div>
          </div>

          {/* Daxili Nəzarət */}
          <div className="md:col-span-4 bg-primary text-on-primary p-10 rounded-xl hover-lift flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-6">admin_panel_settings</span>
              <h3 className="font-headline-md text-headline-md mb-4 text-white">Daxili Nəzarət Yoxlamaları</h3>
              <p className="text-on-primary-container mb-6 opacity-90">Əməliyyat və maliyyə riskini azaltmaq üçün ICFR və SOX-tərzi çərçivələr vasitəsilə daxili sistemlərin möhkəmliyinin qiymətləndirilməsi.</p>
            </div>
            <a href="#" className="text-secondary-fixed flex items-center gap-2 font-label-md text-label-md">
              ƏTRAFLƏ ÖYRƏNİN <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          {domains.map(d => (
            <div key={d.title} className="md:col-span-4 bg-surface-container-lowest border border-outline-variant p-8 rounded-xl hover-lift">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">{d.icon}</span>
              <h4 className="font-headline-md text-headline-md mb-3">{d.title}</h4>
              <p className="text-on-surface-variant text-body-sm font-body-sm">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strateji Çərçivə */}
      <section className="bg-surface-container-low py-24 px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-20">
          <div className="flex-1">
            <h2 className="font-headline-lg text-headline-lg mb-8">Zəmanət üçün Strateji Çərçivə</h2>
            <div className="space-y-12">
              {steps.map(s => (
                <div key={s.n} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">{s.n}</div>
                  <div>
                    <h4 className="font-headline-md text-headline-md mb-2">{s.title}</h4>
                    <p className="text-on-surface-variant">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square bg-surface border border-outline-variant rounded-2xl p-8 shadow-sm">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <span className="material-symbols-outlined text-primary text-6xl mb-4">verified</span>
                <div className="font-headline-lg text-headline-lg text-primary tracking-tighter">SUVEREN DƏQİQLİK</div>
                <div className="w-16 h-0.5 bg-secondary my-4" />
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Quruluş: 1984</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Təsir Cədvəli */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4">İnstitusional Təsir Qiymətləndirilməsi</h2>
          <p className="text-on-surface-variant">Əsas sektorlar üzrə əlaqəli zəmanət işlərinin performansını izləyən göstəricilər.</p>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant overflow-hidden rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high">
                {['XİDMƏT SEKTORU', 'ƏMƏKDAŞLIQ NÖVİ', 'YETKİLƏNDİRMƏ SƏVİYYƏSİ', 'VƏZİYYƏT'].map(h => (
                  <th key={h} className="px-6 py-4 font-label-md text-label-md text-on-surface border-b border-outline-variant">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {impactRows.map(r => (
                <tr key={r.sector} className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4 font-body-md">{r.sector}</td>
                  <td className="px-6 py-4 font-body-sm text-on-surface-variant">{r.type}</td>
                  <td className="px-6 py-4 font-body-sm">{r.level}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 font-label-md text-label-md rounded-full ${r.statusColor}`}>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-margin-desktop bg-primary text-on-primary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg mb-6 text-white">İnstitusional Zəmanətinizi Təkmilləşdirin</h2>
          <p className="text-on-primary-container mb-10 opacity-90">Unikal tənzimləyici tələblərinizə uyğunlaşdırılmış ixtisaslaşmış zəmanət işlərini müzakirə etmək üçün baş auditorlarımızla əlaqə saxlayın.</p>
          <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-lg font-label-md text-label-md hover:bg-secondary-fixed transition-all">
            Texniki Briefinq İstəyin
          </button>
        </div>
      </section>
    </main>
  )
}
