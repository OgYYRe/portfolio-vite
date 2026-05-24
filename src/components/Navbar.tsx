import { useEffect, useMemo, useState } from 'react'
import { useI18n } from '../i18n/useI18n'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
  const { t } = useI18n()
  const [activeId, setActiveId] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  const navItems = useMemo(
    () => [
      { id: 'home', label: t('nav.home') },
      { id: 'about', label: t('nav.about') },
      { id: 'projects', label: t('nav.projects') },
      { id: 'skills', label: t('nav.skills') },
      { id: 'certificates', label: t('nav.certificates') },
      { id: 'contact', label: t('nav.contact') },
    ],
    [t]
  )

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.1 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [navItems])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="section-wrapper flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3">
          <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-12 rounded-xl object-contain"
          />
          <div>
            <p className="text-sm font-semibold text-white">Oguzhan Cetinkaya</p>
            <p className="text-xs text-white/60">Software Developer</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`border-b-2 pb-1 transition ${
                  activeId === item.id
                    ? 'border-purple-400 text-white'
                    : 'border-transparent text-white/70 hover:text-white'
                }`}
                aria-current={activeId === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            aria-label="Toggle menu"
          >
            <span className="text-lg">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-black/60 px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 pt-4 text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`border-b border-white/10 pb-3 transition ${
                  activeId === item.id
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar


