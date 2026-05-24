import { useI18n } from '../i18n/useI18n'

const Home = () => {
  const { t } = useI18n()

  return (
    <section id="home" className="section-wrapper grid gap-12 py-24 md:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col gap-6">
        <span className="w-fit rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-purple-200">
          {t('hero.badge')}
        </span>
        <div>
          <h1 className="text-4xl font-semibold text-white md:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-5 text-base text-white/70 md:text-lg">
            {t('hero.subtitle')}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
          >
            {t('hero.primaryCta')}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/50 hover:text-white"
          >
            {t('hero.secondaryCta')}
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-purple-500/20 to-blue-500/10 blur-2xl" />
        <div className="glass-card relative flex flex-col items-center gap-4 text-center">
          <img
            src="/profile.png"
            alt="Profile"
            className="h-40 w-40 rounded-full border border-white/10 object-cover"
          />

          <p className="text-sm uppercase tracking-[0.3em] text-purple-200">
            Software Developer
          </p>

          <p className="text-sm text-white/70">
            Zurich, Switzerland · Open to opportunities
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home


