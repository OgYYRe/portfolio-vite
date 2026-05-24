import ContactForm from '../components/ContactForm'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n/useI18n'

const Contact = () => {
  const { t } = useI18n()

  return (
    <section id="contact" className="section-wrapper py-24">
      <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />
      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
        <div className="glass-card flex flex-col gap-4">
          <p className="text-sm text-white/70">{t('contact.intro')}</p>
          <div className="glow-divider" />
          <div className="space-y-2 text-sm text-white/70">
            <p>Email: cetinkaya-oguzhan@hotmail.com</p>
            <p>Location: Zurich, Switzerland</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact

