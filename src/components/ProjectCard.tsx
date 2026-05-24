import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  title: string
  description: string
}

const ProjectCard = ({ project, title, description }: ProjectCardProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  useEffect(() => {
    if (!isPreviewOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPreviewOpen(false)
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isPreviewOpen])

  const previewModal = isPreviewOpen
      ? createPortal(
          <div
              className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 p-4"
              role="dialog"
              aria-modal="true"
              onClick={() => setIsPreviewOpen(false)}
          >
            <img
                src={project.imageUrl}
                alt={title}
                className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
                onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body
      )
      : null

  return (
      <>
        <article className="glass-card flex h-full flex-col gap-4">
          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <img
                src={project.imageUrl}
                alt={title}
                className="h-44 w-full cursor-pointer object-cover transition duration-300 hover:scale-105"
                loading="lazy"
                onClick={() => setIsPreviewOpen(true)}
            />
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                  <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70"
                  >
                {tag}
              </span>
              ))}
            </div>

            <div className="mt-auto flex gap-4 text-sm">
              <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-300 hover:text-purple-200"
              >
                Live
              </a>

              {project.repoUrl ? (
                  <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/70 hover:text-white"
                  >
                    Code
                  </a>
              ) : null}
            </div>
          </div>
        </article>

        {previewModal}
      </>
  )
}

export default ProjectCard