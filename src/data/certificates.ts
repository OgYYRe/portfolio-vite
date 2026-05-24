export type Certificate = {
  id: string
  titleKey: string
  issuerKey: string
  year: string
  credentialUrl: string
  imageUrl: string
}

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    titleKey: 'certificates.items.cert1.title',
    issuerKey: 'certificates.items.cert1.issuer',
    year: '2025',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/CLDR9RTJIS8T',
    imageUrl: '/certificates/ibm-cloud.webp',
  },
  {
    id: 'cert-2',
    titleKey: 'certificates.items.cert2.title',
    issuerKey: 'certificates.items.cert2.issuer',
    year: '2025',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/4SXECUMY3ATA',
    imageUrl: '/certificates/ibm-git.webp',
  },

  {
    id: 'cert-3',
    titleKey: 'certificates.items.cert3.title',
    issuerKey: 'certificates.items.cert3.issuer',
    year: '2025',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/SMV3LJHJR70Y',
    imageUrl: '/certificates/ibm-html.webp',
  },
  {
    id: 'cert-4',
    titleKey: 'certificates.items.cert4.title',
    issuerKey: 'certificates.items.cert4.issuer',
    year: '2025',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/KXUVXPBQR7F7',
    imageUrl: '/certificates/ibm-software.webp',
  },
  {
    id: 'cert-5',
    titleKey: 'certificates.items.cert5.title',
    issuerKey: 'certificates.items.cert5.issuer',
    year: '2025',
    credentialUrl: 'https://www.credly.com/badges/b67072c7-b760-4170-8e75-ace60fedf551/public_url',
    imageUrl: '/certificates/sap-codejam.webp',
  },
  {
    id: 'cert-6',
    titleKey: 'certificates.items.cert6.title',
    issuerKey: 'certificates.items.cert6.issuer',
    year: '2024',
    credentialUrl: 'https://results.telc.net/qr/y2lpm8QHT9qJo5Y8o-0c72nqV1tTS0u6q7kf5c-6i_MtPMHOY25Hdqz1Ip8vtske',
    imageUrl: '/certificates/telc-b2.webp',
  },
  {
    id: 'cert-7',
    titleKey: 'certificates.items.cert7.title',
    issuerKey: 'certificates.items.cert7.issuer',
    year: '2026',
    credentialUrl: 'https://drive.google.com/file/d/1FznoyoohfteLlUkCeyclSlm4-KSwMXC1/view?usp=drive_link',
    imageUrl: '/certificates/school-transcript.webp',
  },




]
