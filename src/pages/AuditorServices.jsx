import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC99pyONQJqtJ-7L6wFpi6_KrvfqZLNYnqjipnAPFkHH3MhcSjmLOwId3sgSPODDGsWy-KWiz5zVPmpSEfV_RrHCRsw8Wq6FWbe08-be3V2Ot7IIo6KC5GtiWvUVEmEXhdcKXLqIaZVkOC6LmuuTz-cetexgbKNxdIlRIGv9xYFk9lbDSxzsx3p3w4jY7HD1ujl2sbk4t7N326kOM1TXGcb6WFPcpmrUgCp8evrfi2J1LcGh0AwozmDb9fHWcDKNYpFflrca-KAmw'
const CTA_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTy-v4TUrKGvb8FC_MsOM3AoFZolNxaFTtu2m0WvQPJ17QXY_vZHZkfvO5pa6aCK3CZ1_6meE57uW1U6KlQeoVmB0ik3cbTKp8jcnEJzLWN_YFBCj0WrPG22egomvU8QgWW1ysqvvf_Jjigk_iL35Jz9D79KGW_1mGT64riqubmijTdpi1tMMxe2MjSApyQHjwKnf094Y9y8aD780EJmP3rkxLTvZhtt-7KPyq8OH7jKgci3uG9tyfFc_kZ4Ba2yTHFPalsL2Cpw'

const methodSteps = [
  { n: '01', title: 'Diaqnostika Mərhələsi', desc: 'Əsas göstəriciləri müəyyən etmək üçün ilkin məlumat udulması və mühit xəritəsi.' },
  { n: '02', title: 'Mahiyyəti Sınaq', desc: 'Maliyyə və əməliyyat silolarda ciddi sınaq protokollarının icrası.' },
  { n: '03', title: 'Təhlil & Sintez', desc: 'Əsas meylləri və potensial riskləri müəyyən etmək üçün tapıntıların korrelyasiyası.' },
  { n: '04', title: 'Strateji Hesabat', desc: 'Hərtərəfli audit hesabatlarının və icraedici məsləhətin son çatdırılması.' },
]

export default function AuditorServices() {
  return (
    <main>
      <PageHero
        badge="İnstitusional Standartlar"
        title="Auditor Xidmətləri"
        titleHighlight="Qlobal Müəssisə üçün"
        description="Mütləq tənzimləyici uyğunluğu təmin etmək və yüksək riskli korporativ maliyyə mühitləri üçün strateji risk qiymətləndirilməsi aparmaq üçün nəzərdə tutulmuş ciddi daxili və xarici audit protokolları."
        image={HERO_IMG}
      />

      {/* Xidmət Əhatəsi */}
      <section className="max-w-container-max mx-auto px-margin-desktop py-24">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Xidmət Əhatəsi</h2>
          <div className="h-1 w-24 bg-secondary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Daxili Audit */}
          <div className="md:col-span-2 bg-white border border-outline-variant rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-secondary-container" style={{ fontSize: '22px' }}>assured_workload</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Daxili Audit &amp; İdarəetmə</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Daxili nəzarət sistemlərinin, əməliyyat səmərəliliyinin və idarəetmə çərçivələrinin dərin qiymətləndirilməsi.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['Əməliyyat Nəzarəti Xəritəsi', 'Fırıldaqçılıqdan Qorunma Sistemləri', 'Siyasətin Gözlənilməsinin Yoxlanması', 'İcraedici Hesabat'].map(item => (
                <li key={item} className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>check_circle</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Risk Qiymətləndirilməsi */}
          <div className="bg-white border border-outline-variant rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-secondary-container" style={{ fontSize: '22px' }}>analytics</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Risk Qiymətləndirilməsi</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">
              İnstitusional maraqlılar üçün uyğunlaşdırılmış maliyyə və əməliyyat risklərinin kəmiyyət təhlili.
            </p>
            <div className="w-full bg-surface-container-low rounded-xl p-5 border border-outline-variant text-left">
              <div className="flex justify-between mb-2">
                <span className="font-label-md text-label-md text-on-surface">Azaldılma İndeksi</span>
                <span className="font-label-md text-label-md text-secondary">Yüksək</span>
              </div>
              <div className="w-full bg-outline-variant h-2 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-4/5 rounded-full" />
              </div>
            </div>
          </div>

          {/* Xarici Statutar Audit */}
          <div className="bg-primary rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary-fixed" style={{ fontSize: '22px' }}>gavel</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white mb-4">Xarici Statutar Audit</h3>
              <p className="font-body-sm text-body-sm text-white/60 mb-8">
                Səhmdarlar və tənzimləyici orqanlar üçün şəffaflığı təmin etmək məqsədilə maliyyə hesabatlarının qərəzsiz, hərtərəfli yoxlanması.
              </p>
            </div>
            <button className="w-full py-3 rounded-xl border border-white/20 text-white font-label-md text-label-md hover:bg-white/10 transition-colors">
              Sertifikasiya Standartlarına Bax
            </button>
          </div>

          {/* Tənzimləyici Uyğunluq */}
          <div className="md:col-span-2 bg-white border border-outline-variant rounded-2xl p-8 flex flex-col md:flex-row gap-8 shadow-sm">
            <div className="flex-1">
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Tənzimləyici Uyğunluq</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                IFRS, GAAP və yerli fiskal qaydaları cərrahi dəqiqliklə naviqasiya edir. Qlobal standartlar inkişaf etdikcə real vaxtda yenilənir.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-3">
              {['IFRS', 'GAAP', 'SOX', 'ESG'].map(std => (
                <div key={std} className="p-4 bg-surface-container-low border border-outline-variant rounded-xl text-center">
                  <span className="font-label-md text-label-md text-primary block mb-1">{std}</span>
                  <span className="material-symbols-outlined text-secondary" style={{ fontSize: '18px' }}>verified</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metodologiya */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Metodologiyamız</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Fəaliyyətə yönəlmiş kəşfiyyat və mütləq zəmanət çatdırmaq üçün nəzərdə tutulmuş dörd mərhələli dəqiqlik dövrü.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {methodSteps.map((s, i) => (
              <div key={s.n} className="group bg-white border border-outline-variant rounded-2xl p-8 hover:border-secondary hover:shadow-[0_12px_32px_-8px_rgba(5,27,14,0.1)] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <div className="text-3xl font-bold text-outline-variant group-hover:text-secondary transition-colors mb-5">{s.n}</div>
                <h4 className="font-label-md text-label-md text-primary mb-2 uppercase tracking-wider">{s.title}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-container-max mx-auto px-margin-desktop">
        <div className="bg-primary rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-[0_24px_64px_-16px_rgba(5,27,14,0.3)]">
          <div className="p-12 md:p-16">
            <h2 className="font-headline-lg text-headline-lg text-white mb-6">İnstitusional Yoxlamanıza Başlayın</h2>
            <p className="font-body-lg text-body-lg text-white/60 mb-10 leading-relaxed">
              Baş tərəfdaşlarımız korporativ audit tələblərinizlə bağlı gizli konsultasiya üçün mövcuddur.
            </p>
            <div className="space-y-5">
              <div>
                <label className="font-label-md text-label-md text-white/50 block mb-2 uppercase tracking-wider">Korporativ E-poçt Ünvanı</label>
                <input className="w-full bg-white/8 text-white placeholder:text-white/30 rounded-xl py-3 px-4 border border-white/15 outline-none focus:border-secondary/60 transition-colors" placeholder="office@enterprise.com" type="email" />
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded-xl font-label-md text-label-md uppercase tracking-widest hover:brightness-110 transition-all">
                Konsultasiya İstəyin
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative overflow-hidden">
            <img src={CTA_IMG} alt="Memarlıq" className="w-full h-full object-cover opacity-30 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent" />
          </div>
        </div>
      </section>
    </main>
  )
}
