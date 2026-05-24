type SectionTitleProps = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

const SectionTitle = ({ title, subtitle, align = 'left' }: SectionTitleProps) => {
  const alignment = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-10 ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
        {title}
      </p>
      {subtitle ? (
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          {subtitle}
        </h2>
      ) : null}
    </div>
  )
}

export default SectionTitle

