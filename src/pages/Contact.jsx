import { useState } from 'react'
import PageHero from '../components/PageHero'

const MAP_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCisEi9EXlS_vb0MG4gWebqzOlJW5wcgVk05NfqWjodlfsYx09FOX2u44FxHPiBDWMNjsGkRfBcxjDpDDjFjH0qBCfB--GRfIDi5sot8Bi-79fyBX_7ubDs_xBhMN1Pw2c5a52GyzMozePd2k1KmwJDTOFKz654F3CNAGBgq4400Hh6ZC_wvE2L1OGp59VMB-ZwH4U2YNZWrjCQffz651p0xsOrITIZC7PgcL0m-ZMuSncrIITUFHMEQD3MPuVOhGZunhbpVl0SrQ'

const offices = [
  { city: 'London Ofisi', addr: '25 Canary Wharf Plaza, 18-ci Mərtəbə\nLondon, E14 5LB, Böyük Britaniya', phone: '+44 20 7946 0123' },
  { city: 'Sinqapur Ofisi', addr: '10 Collyer Quay, Ocean Financial Centre\nSinqapur 049315', phone: '+65 6789 0123' },
  { city: 'Sürix Ofisi', addr: 'Bahnhofstrasse 45, Postfach 12\n8001 Sürix, İsveçrə', phone: '+41 44 212 34 56' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        e.target.reset()
      }, 3000)
    }, 1500)
  }

  return (
    <main className="pb-20">
      <PageHero
        badge="Bizimlə Əlaqə"
        title="Baş Auditorlarımızla"
        titleHighlight="Əlaqə Qurun"
        description="Peşəkarlıq, dəqiqlik və dürüstlük. Uyğunlaşdırılmış maliyyə audit həlləri və strateji məsləhət üçün ekspertlər komandamızla əlaqə saxlayın."
      />
      <div className="mb-0" />

      {/* Grid */}
      <section className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Form */}
        <div className="lg:col-span-7 bg-white border border-outline-variant rounded-2xl p-10 shadow-[0_4px_24px_-8px_rgba(5,27,14,0.08)]">
          <h2 className="font-headline-md text-headline-md text-primary mb-8">Peşəkar Sorğu</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="space-y-2">
                <label className="font-label-md text-label-md uppercase text-on-surface-variant" htmlFor="first_name">Ad</label>
                <input className="w-full bg-background border border-outline-variant px-4 py-3 font-body-md rounded" id="first_name" required type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md uppercase text-on-surface-variant" htmlFor="last_name">Soyad</label>
                <input className="w-full bg-background border border-outline-variant px-4 py-3 font-body-md rounded" id="last_name" required type="text" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md uppercase text-on-surface-variant" htmlFor="email">İş E-poçtu</label>
              <input className="w-full bg-background border border-outline-variant px-4 py-3 font-body-md rounded" id="email" required type="email" />
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md uppercase text-on-surface-variant" htmlFor="subject">Sorğu Növü</label>
              <select className="w-full bg-background border border-outline-variant px-4 py-3 font-body-md rounded" id="subject">
                <option>Korporativ Audit</option>
                <option>Vergi Uyğunluğu</option>
                <option>Risk İdarəsi</option>
                <option>Məhkəmə Mühasibatlığı</option>
                <option>Digər Xidmətlər</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md uppercase text-on-surface-variant" htmlFor="message">Ətraflı Mesaj</label>
              <textarea className="w-full bg-background border border-outline-variant px-4 py-3 font-body-md rounded" id="message" required rows={5} />
            </div>
            <button
              className={`w-full py-4 px-8 rounded-lg font-headline-md font-bold transition-all flex items-center justify-center gap-2 ${
                status === 'sent' ? 'bg-secondary text-on-secondary' : 'bg-primary text-on-primary hover:bg-secondary'
              }`}
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'idle' && <><span>Sorğu Göndər</span><span className="material-symbols-outlined">send</span></>}
              {status === 'sending' && <span>Göndərilir...</span>}
              {status === 'sent' && <><span className="material-symbols-outlined">check_circle</span><span>Sorğu Alındı</span></>}
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-5 space-y-gutter">
          <div className="bg-white border border-outline-variant rounded-2xl p-8 space-y-6 shadow-[0_4px_24px_-8px_rgba(5,27,14,0.08)]">
            <h3 className="font-headline-md text-headline-md text-primary">Birbaşa Əlaqə</h3>
            {[
              { icon: 'phone_in_talk', label: 'Baş Ofis', value: '+1 (800) 455-AUDIT' },
              { icon: 'mail', label: 'E-poçt Sorğuları', value: 'contact@principalaudit.com' },
              { icon: 'location_on', label: 'Qlobal Qərargah', value: '1200 Financial Plaza, Suite 400\nMaliyyə Bölgəsi, New York, NY 10005' },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="p-3 bg-secondary-container text-on-secondary-container rounded-lg">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md uppercase text-on-surface-variant mb-1">{item.label}</p>
                  <p className="font-body-lg font-bold text-primary whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="relative h-[400px] border border-outline-variant rounded-2xl overflow-hidden group">
            <img src={MAP_IMG} alt="Ofis Yeri" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 bg-white p-4 shadow-xl border border-outline-variant flex justify-between items-center">
              <div>
                <p className="font-body-sm font-bold text-primary">Principal Audit Qərargahı</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">NY Maliyyə Bölgəsi</p>
              </div>
              <a href="#" className="text-primary hover:text-secondary flex items-center gap-1 font-label-md">
                Marşrutu Gör <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </aside>
      </section>

      {/* Global Offices */}
      <section className="max-w-container-max mx-auto px-margin-desktop mt-20">
        <h2 className="font-headline-md text-headline-md text-primary mb-8 border-b border-outline-variant pb-4">Qlobal Mövcudluğumuz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {offices.map(o => (
            <div key={o.city} className="p-6 bg-surface border border-outline-variant hover:border-primary transition-colors">
              <h4 className="font-body-lg font-bold text-primary mb-2">{o.city}</h4>
              <p className="font-body-sm text-on-surface-variant whitespace-pre-line">{o.addr}</p>
              <p className="font-body-sm text-secondary font-bold mt-4">{o.phone}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
