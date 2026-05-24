import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n/useI18n'
import { aboutGallery } from '../data/aboutGallery'

const About = () => {
  const { t } = useI18n()

  return (
    <section id="about" className="section-wrapper py-24">
      <SectionTitle title={t('about.title')} subtitle={t('about.subtitle')} />
      <div className="space-y-8">
        <div className="glass-card space-y-4">
          <p className="text-sm text-white/70">{t('about.paragraph1')}</p>
          <p className="text-sm text-white/70">{t('about.paragraph2')}</p>
            <p className="text-sm text-white/70">
                {t('about.paragraph3')}
            </p>

            <a
                href="https://apps.apple.com/ch/developer/oguzhan-cetinkaya/id1896191743"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-400 underline underline-offset-4 hover:text-purple-300"
            >
                {t('about.appStoreLink')}
            </a>

        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutGallery.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_-40px_rgba(168,85,247,0.6)] transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_30px_70px_-40px_rgba(96,165,250,0.75)]"
            >
              <div className="aspect-[4/5] sm:aspect-[6/4]">
                <img
                  src={item.imageUrl}
                  alt={t(item.titleKey)}
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition duration-300 group-hover:from-black/70 group-hover:via-black/40" />
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <h3 className="text-lg font-semibold text-white">{t(item.titleKey)}</h3>
                <p className="text-sm text-white/70">{t(item.infoKey)}</p>
                <span className="text-xs uppercase tracking-wide text-white/50">{t(item.locationKey)}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
