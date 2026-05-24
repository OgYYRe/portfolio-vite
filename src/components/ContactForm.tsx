import { useI18n } from '../i18n/useI18n'

const ContactForm = () => {
  const { t } = useI18n()

  return (
      <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="glass-card grid gap-4"
      >
          <input type="hidden" name="form-name" value="contact" />

          <p hidden>
              <label>
                  Don’t fill this out:
                  <input name="bot-field" />
              </label>
          </p>
      <label className="grid gap-2 text-sm text-white/70">
        {t('contact.form.nameLabel')}
        <input
          type="text"
          name="name"
          required
          placeholder={t('contact.form.namePlaceholder')}
          className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400"
        />
      </label>
      <label className="grid gap-2 text-sm text-white/70">
        {t('contact.form.emailLabel')}
        <input
          type="email"
          name="email"
          required
          placeholder={t('contact.form.emailPlaceholder')}
          className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400"
        />
      </label>
      <label className="grid gap-2 text-sm text-white/70">
        {t('contact.form.messageLabel')}
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t('contact.form.messagePlaceholder')}
          className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400"
        />
      </label>
      <button
        type="submit"
        className="rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
      >
        {t('contact.form.submit')}
      </button>
    </form>
  )
}

export default ContactForm


