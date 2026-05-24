import type { Certificate } from '../data/certificates'

type CertificateCardProps = {
  certificate: Certificate
  title: string
  issuer: string
}

const CertificateCard = ({ certificate, title, issuer }: CertificateCardProps) => {
  return (
    <article className="glass-card flex h-full flex-col gap-4">
      <div className="relative overflow-hidden rounded-xl border border-white/10">
        <img
          src={certificate.imageUrl}
          alt={title}
          className="h-40 w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70">{issuer}</p>
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
          {certificate.year}
        </p>
        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto text-sm text-purple-300 hover:text-purple-200"
        >
          View credential
        </a>
      </div>
    </article>
  )
}

export default CertificateCard

