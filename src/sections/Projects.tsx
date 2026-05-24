import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'
import { useI18n } from '../i18n/useI18n'

const Projects = () => {
  const { t } = useI18n()

  return (
    <section id="projects" className="section-wrapper py-24">
      <SectionTitle title={t('projects.title')} subtitle={t('projects.subtitle')} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            title={t(project.titleKey)}
            description={t(project.descriptionKey)}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects

