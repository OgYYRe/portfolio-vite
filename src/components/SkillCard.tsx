import type { Skill } from '../data/skills'

type SkillCardProps = {
  skill: Skill
  label: string
  detail: string
}

const SkillCard = ({ skill, label, detail }: SkillCardProps) => {
  return (
    <article className="glass-card flex flex-col gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-lg text-white">
        <img src={skill.icon} alt={label} className="h-8 w-8 object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-white">{label}</h3>
      <p className="whitespace-pre-line text-sm text-white/70">{detail}</p>
    </article>
  )
}

export default SkillCard
