import CertificateCard from '../components/CertificateCard'
import SectionTitle from '../components/SectionTitle'
import { certificates } from '../data/certificates'
import { useI18n } from '../i18n/useI18n'

const Certificates = () => {
  const { t } = useI18n()

  return (
    <section id="certificates" className="section-wrapper py-24">
      <SectionTitle
        title={t('certificates.title')}
        subtitle={t('certificates.subtitle')}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            title={t(certificate.titleKey)}
            issuer={t(certificate.issuerKey)}
          />
        ))}
      </div>
    </section>
  )
}

export default Certificates

