export type Project = {
  id: string
  titleKey: string
  descriptionKey: string
  imageUrl: string
  liveUrl: string
  repoUrl?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'project-1',
    titleKey: 'projects.items.project1.title',
    descriptionKey: 'projects.items.project1.description',
    imageUrl: '/projects/todolist.png',//!TODO
    liveUrl: '', //!TODO
    repoUrl: 'https://github.com/OgYYRe/todoliste',
    tags: [''], //!TODO
  },
  {
    id: 'project-2',
    titleKey: 'projects.items.project2.title',
    descriptionKey: 'projects.items.project2.description',
    imageUrl: '/projects/seelenbrot.png',
    liveUrl: 'https://apps.apple.com/ch/app/seelenbrot/id6766093047',
    repoUrl: 'https://github.com/OgYYRe/seelenbrot',
    tags: [''],
  },
  {
    id: 'project-3',
    titleKey: 'projects.items.project3.title',
    descriptionKey: 'projects.items.project3.description',
    imageUrl: '/projects/remembrance.png',
    liveUrl: 'https://drive.google.com/file/d/1TT3B9n7gYBYJIXVy5Vwtjmc8ubYDs1mY/view?usp=drive_link',
    repoUrl: 'https://github.com/OgYYRe/remembrance',
    tags: [''], //!TODO
  },
  {
    id: 'project-4',
    titleKey: 'projects.items.project4.title',
    descriptionKey: 'projects.items.project4.description',
    imageUrl: '/projects/wordle.png',
    liveUrl: 'https://lexiq-frontend-latest.onrender.com/', //!TODO
    repoUrl: 'https://github.com/OgYYRe/LexIQ', //!TODO chanche name
    tags: [''], //!TODO
  },

]

