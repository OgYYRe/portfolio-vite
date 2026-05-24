import { createContext, useCallback, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import de from './de'
import en from './en'

export type Locale = 'en' | 'de'

type TranslationMap = typeof en

type I18nContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  t: (key: string) => string
}

const translations: Record<Locale, TranslationMap> = { en, de }

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

const resolveKey = (source: TranslationMap, key: string): string | undefined => {
  const parts = key.split('.')
  let current: unknown = source

  for (const part of parts) {
    if (typeof current !== 'object' || current === null) {
      return undefined
    }

    current = (current as Record<string, unknown>)[part]
  }

  return typeof current === 'string' ? current : undefined
}

type I18nProviderProps = {
  children: ReactNode
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem('locale') as Locale | null
    if (stored === 'en' || stored === 'de') {
      return stored
    }

    const browser = navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
    return browser
  })

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem('locale', next)
  }, [])

  const t = useCallback(
    (key: string) => resolveKey(translations[locale], key) ?? key,
    [locale]
  )

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export default I18nContext


