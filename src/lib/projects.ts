export type ProjectStatus = 'En obra' | 'Finalizado' | 'Próximo'

export interface Project {
  id: string
  slug: string
  name: string
  location: string
  status: ProjectStatus
  description: string
  image: {
    src: string
    alt: string
  }
}

export const projects: readonly Project[] = [
  {
    id: 'proj-1',
    slug: 'residencial-los-andes',
    name: 'Residencial Los Andes',
    location: 'Lima Norte',
    status: 'En obra',
    description:
      'Conjunto residencial de viviendas familiares con enfoque en confort, diseño y espacios verdes.',
    image: {
      src: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&q=80',
      alt: 'Proyecto residencial en construcción',
    },
  },
  {
    id: 'proj-2',
    slug: 'torres-del-pacifico',
    name: 'Torres del Pacífico',
    location: 'Miraflores',
    status: 'Finalizado',
    description:
      'Edificio de departamentos modernos ubicado en una de las zonas más exclusivas de la ciudad.',
    image: {
      src: 'https://images.unsplash.com/photo-1599423300746-b62533397364?w=1200&q=80',
      alt: 'Edificio residencial moderno finalizado',
    },
  },
  {
    id: 'proj-3',
    slug: 'condominio-valle-verde',
    name: 'Condominio Valle Verde',
    location: 'Arequipa',
    status: 'Próximo',
    description:
      'Próximo desarrollo inmobiliario enfocado en viviendas sustentables y entornos naturales.',
    image: {
      src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
      alt: 'Render de proyecto inmobiliario',
    },
  },
]
