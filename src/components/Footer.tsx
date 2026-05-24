import { useI18n } from '../i18n/useI18n'

const Footer = () => {
  const { t } = useI18n()

  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="section-wrapper flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
            {t('nav.contact')}
          </p>
          <p className="mt-3 max-w-md text-lg text-white">{t('footer.callout')}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/70">
          <a href="mailto:cetinkaya-oguzhan@hotmail.com" className="hover:text-white">
            cetinkaya-oguzhan@hotmail.com
          </a>
          <a
            href="https://github.com/OgYYRe"
            className="hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/-oguzhan-cetinkaya/"
            className="hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-wrapper flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
          <p>(c) 2026 Oguzhan Cetinkaya</p>
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer



