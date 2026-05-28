export default function PageHero({ badge, title, titleHighlight, description, image }) {
  return (
    <section className="relative overflow-hidden bg-primary noise" style={{ paddingTop: '160px', paddingBottom: '100px', borderRadius: '0 0 2rem 2rem' }}>
      {image && (
        <div className="absolute inset-0 z-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />
        </div>
      )}
      <div className="absolute inset-0 grid-pattern opacity-10 z-0" />

      <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop">
        <div className="max-w-3xl">
          {badge && (
            <div
              className="hero-animate inline-flex items-center gap-3 mb-6"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-8 h-px bg-secondary" />
              <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em]">
                {badge}
              </span>
            </div>
          )}
          <h1
            className="hero-animate font-headline-xl text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 68px)', animationDelay: '0.3s' }}
          >
            {titleHighlight ? (
              <>
                {title}{' '}
                <span className="text-gradient">{titleHighlight}</span>
              </>
            ) : title}
          </h1>
          {description && (
            <p
              className="hero-animate font-body-lg text-white/60 leading-relaxed max-w-2xl"
              style={{ animationDelay: '0.5s' }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
