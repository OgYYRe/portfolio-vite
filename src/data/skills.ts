export type Skill = {
  id: string
  labelKey: string
  detailKey: string
  icon: string
}

export const skills: Skill[] = [
  {
    id: 'skill-1',
    labelKey: 'skills.items.skill1.label',
    detailKey: 'skills.items.skill1.detail',
    icon: '/skills/s1.png',
  },
  {
    id: 'skill-2',
    labelKey: 'skills.items.skill2.label',
    detailKey: 'skills.items.skill2.detail',
    icon: '/skills/s2.png',
  },
  {
    id: 'skill-3',
    labelKey: 'skills.items.skill3.label',
    detailKey: 'skills.items.skill3.detail',
    icon: '/skills/s3.png',
  },
]
