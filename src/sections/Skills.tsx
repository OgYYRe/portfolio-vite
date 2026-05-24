import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import { skills } from '../data/skills'
import { useI18n } from '../i18n/useI18n'

const Skills = () => {
  const { t } = useI18n()

  return (
    <section id="skills" className="section-wrapper py-24">
      <SectionTitle title={t('skills.title')} subtitle={t('skills.subtitle')} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            label={t(skill.labelKey)}
            detail={t(skill.detailKey)}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills

