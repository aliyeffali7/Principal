import PageHero from '../components/PageHero'

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbYY67yM8pr2_RuCOyPD7bcWAFgM2_FbldWwuqKf6ov96pIlDenGEywIAn_0IcKwST7U26_Vl06V5kuz6AbGA5-2eaKQK8_ZjKPCnGThgZ25lpS1V0QK-grxzK49eevPR9EDjxwz6VD7XHJYmNJofXWSvstlUjp66yv_zpG2MBLbgtYSXfAJW0SXw9e2BQACGgScGDlM0VFozZkKY4AfZbGNB4uXqXLF_cd4yq29ldzQGPLZxdUEkP6tIl_i-ZJ9Z5oBEgHkFTuw'

const phases = [
  { label: 'Mərhələ 1: Əhatə & Tərif', status: 'Başladıldı' },
  { label: 'Mərhələ 2: Bazar Təhlili & Modelləşdirmə', status: 'Ciddi' },
  { label: 'Mərhələ 3: Həssaslıq Stres Testi', status: 'Çox Ssenari' },
  { label: 'Mərhələ 4: Hesabat & Açıqlama', status: 'Son Nəticə' },
]

const levels = [
  { n: 1, title: '1-ci Səviyyə: Bazar Giriş Amilləri', desc: 'Ölçmə tarixinə qurumun girişi olan eyni aktivlər və ya öhdəliklər üçün aktiv bazarlarda qiymət kotirovkaları.' },
  { n: 2, title: '2-ci Səviyyə: Müşahidə Edilə Bilən Giriş Amilləri', desc: '1-ci Səviyyəyə daxil edilmiş kotirovka qiymətlərindən başqa, aktiv və ya öhdəlik üçün birbaşa və ya dolayı yolla müşahidə edilə bilən giriş amilləri.' },
  { n: 3, title: '3-cü Səviyyə: Müşahidə Edilə Bilməyən Giriş Amilləri', desc: 'Aktiv və ya öhdəlik üçün müşahidə edilə bilməyən giriş amilləri, bazar iştirakçılarının istifadə edəcəyi fərziyyələr haqqında qurumun öz fərziyyələrini əks etdirir.' },
]

export default function ValuationServices() {
  return (
    <main>
      <PageHero
        badge="İnstitusional Mükəmməllik"
        title="Maliyyə Hesabatı Elementlərinin"
        titleHighlight="Qiymətləndirilməsi"
        description="Ədalətli dəyərin, aktiv dəyərinin düşməsinin və qeyri-maddi aktivlərin hərtərəfli, obyektiv qiymətləndirilməsini təmin edir. Mürəkkəb maliyyə alətlərini ciddi riyazi modelləşdirmə vasitəsilə IFRS və GAAP tənzimləyici çərçivələri ilə uyğunlaşdırırıq."
        image={HERO_IMG}
      />

      {/* Əsas Sütunlar */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Əsas Qiymətləndirmə Sütunları</h2>
            <div className="w-24 h-1 bg-secondary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ədalətli Dəyər - geniş */}
            <div className="md:col-span-2 p-10 border border-outline-variant bg-white rounded-2xl flex flex-col justify-between shadow-sm hover:border-secondary transition-all duration-300 group">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="material-symbols-outlined text-4xl text-secondary">analytics</span>
                  <span className="text-on-surface-variant font-label-md">IFRS 13 / ASC 820</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Ədalətli Dəyər Ölçmələri</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                  Aktiv və öhdəliklərin 1, 2 və 3-cü səviyyə giriş amilləri istifadə etməklə etibarlı qiymətləndirilməsi. Metodologiyamız bazar iştirakçısı fərziyyələrini fokusuna alır, tənzimləyici yoxlama zamanı müdafiəolunabilirliyi təmin edir.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-3">
                {['Bazar Yanaşması', 'Gəlir Yanaşması', 'Maya Dəyəri Yanaşması'].map(tag => (
                  <span key={tag} className="bg-surface-container px-3 py-1 text-on-surface font-label-md rounded-full text-[11px]">{tag}</span>
                ))}
              </div>
            </div>

            {/* Aktiv Dəyər Düşümü Testi */}
            <div className="p-10 border border-outline-variant bg-secondary-container rounded-2xl flex flex-col justify-between shadow-sm">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-8">warning</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Aktiv Dəyər Düşümü Testi</h3>
                <p className="font-body-sm text-body-sm text-on-secondary-fixed-variant">
                  IAS 36 və ASC 350 çərçivəsində müsbət pay, uzunmüddətli aktivlər və qeyri-maddi aktivlər üçün dəqiqlik yönümlü test. Geri alına bilən məbləğləri cərrahi dəqiqliklə müəyyənləşdiririk.
                </p>
              </div>
              <a href="#" className="mt-8 font-label-md flex items-center gap-2 text-primary hover:gap-4 transition-all">
                Çərçivəni Gör <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* Qeyri-maddi Aktivlər */}
            <div className="p-10 border border-outline-variant bg-white rounded-2xl flex flex-col justify-between shadow-sm hover:border-secondary transition-all duration-300">
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary mb-8">copyright</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Qeyri-maddi Aktivlər</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Çoxdövrlük Artıq Qazanc Metodu (MPEEM) və Royaltilik Azadlığı yanaşmaları istifadə edərək əqli mülkiyyət, marka kapitalı və müştəri münasibətlərinin qiymətləndirilməsi.
                </p>
              </div>
            </div>

            {/* Tənzimləyici Bütövlük */}
            <div className="md:col-span-2 p-10 border border-outline-variant bg-primary-container text-surface rounded-2xl flex flex-col md:flex-row gap-10 items-center shadow-sm">
              <div className="md:w-1/2">
                <h3 className="font-headline-md text-headline-md mb-4 text-primary-fixed">Tənzimləyici Bütövlük</h3>
                <p className="font-body-md text-body-md text-on-primary-container">
                  Qiymətləndirmə hesabatlarımız ən yüksək institusional və tənzimləyici yoxlama səviyyəsinə dözümlü olmaq üçün hazırlanmışdır.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
                {[{ v: '100%', l: 'Audit Qəbulu' }, { v: 'IFRS', l: 'Tam Uyğunluq' }].map(s => (
                  <div key={s.l} className="p-4 border border-outline/30 rounded-xl bg-white/5">
                    <div className="text-headline-md font-bold mb-1">{s.v}</div>
                    <div className="text-label-md opacity-70">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologiya */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Ölçmə Hiyerarxiyası</h2>
              <div className="space-y-8">
                {levels.map(l => (
                  <div key={l.n} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary flex items-center justify-center font-headline-md text-primary">{l.n}</div>
                    <div>
                      <h4 className="font-headline-md text-headline-md mb-2">{l.title}</h4>
                      <p className="text-on-surface-variant">{l.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-highest p-8 rounded-xl border border-outline-variant">
              <h3 className="font-headline-md text-headline-md mb-6 text-primary">Əməkdaşlıq Həyat Dövrü</h3>
              <div className="space-y-4">
                {phases.map(p => (
                  <div key={p.label} className="flex justify-between py-4 border-b border-outline-variant">
                    <span className="font-label-md text-on-surface">{p.label}</span>
                    <span className="font-body-sm text-secondary flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">check_circle</span> {p.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-white/50 border border-secondary/20 rounded-lg">
                <p className="font-body-sm italic text-on-surface-variant">
                  "Yanaşmamız hər qiymətləndirilmənin aydın audit izi ilə dəstəklənməsini, xarici auditorlarla qüsursuz koordinasiyanı asanlaşdıran bir əminlik baxışı ilə təmin edir."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <h2 className="font-headline-xl text-headline-xl text-primary mb-6">İnstitusional Bütövlüyü Qoruyun</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Xüsusi hesabat tələblərinizi müzakirə etmək və qlobal maliyyə standartlarına tam uyğunluğu təmin etmək üçün baş qiymətləndirmə komandamızla əlaqə saxlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md hover:bg-secondary transition-all shadow-xl shadow-primary/5">
              Metodologiya Ağ Kitabını Yükləyin
            </button>
            <button className="border border-primary text-primary px-8 py-4 rounded-lg font-label-md hover:bg-surface-container transition-all">
              Fərdi Təklif İstəyin
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
