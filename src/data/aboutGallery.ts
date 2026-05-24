export type AboutGalleryItem = {
  id: string
  titleKey: string
  infoKey: string
  locationKey: string
  imageUrl: string
}

export const aboutGallery: AboutGalleryItem[] = [
  {
    id: 'about-1',
    titleKey: 'about.gallery.items.item1.title',
    infoKey: 'about.gallery.items.item1.info',
    locationKey: 'about.gallery.items.item1.location',
    imageUrl: '/about/grill.webp',
  },
  {
    id: 'about-2',
    titleKey: 'about.gallery.items.item2.title',
    infoKey: 'about.gallery.items.item2.info',
    locationKey: 'about.gallery.items.item2.location',
    imageUrl: '/about/velo.webp',
  },
  {
    id: 'about-3',
    titleKey: 'about.gallery.items.item3.title',
    infoKey: 'about.gallery.items.item3.info',
    locationKey: 'about.gallery.items.item3.location',
    imageUrl: '/about/wandern.webp',
  },
  {
    id: 'about-4',
    titleKey: 'about.gallery.items.item4.title',
    infoKey: 'about.gallery.items.item4.info',
    locationKey: 'about.gallery.items.item4.location',
    imageUrl: '/about/code.webp',
  },
  {
    id: 'about-5',
    titleKey: 'about.gallery.items.item5.title',
    infoKey: 'about.gallery.items.item5.info',
    locationKey: 'about.gallery.items.item5.location',
    imageUrl: '/about/reise.webp',

  }
]
