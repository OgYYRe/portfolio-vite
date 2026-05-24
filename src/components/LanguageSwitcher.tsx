import { useI18n } from '../i18n/useI18n'

const LanguageSwitcher = () => {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest transition ${
          locale === 'en'
            ? 'bg-white text-black'
            : 'text-white/70 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale('de')}
        className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest transition ${
          locale === 'de'
            ? 'bg-white text-black'
            : 'text-white/70 hover:text-white'
        }`}
      >
        DE
      </button>
    </div>
  )
}

export default LanguageSwitcher

