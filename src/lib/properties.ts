export interface Property {
  id: string
  slug: string
  title: string
  location: string
  price: string
  image: {
    src: string
    alt: string
  }
  description: string
}

export const featuredProperties: readonly Property[] = [
  {
    id: 'prop-1',
    slug: 'casa-moderna-zona-residencial',
    title: 'Casa moderna en zona residencial',
    location: 'Lima Metropolitana',
    price: 'USD 180.000',
    description:
      'Vivienda moderna diseñada para el confort familiar, con amplios espacios y excelente iluminación natural.',
    image: {
      src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80',
      alt: 'Casa moderna con jardín',
    },
  },
  {
    id: 'prop-2',
    slug: 'departamento-luminoso-miraflores',
    title: 'Departamento luminoso',
    location: 'Miraflores',
    price: 'USD 135.000',
    description:
      'Departamento ubicado en una de las zonas más buscadas, ideal para vivir o invertir.',
    image: {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      alt: 'Interior de departamento moderno',
    },
  },
  {
    id: 'prop-3',
    slug: 'edificio-residencial-san-isidro',
    title: 'Edificio residencial nuevo',
    location: 'San Isidro',
    price: 'Desde USD 210.000',
    description:
      'Proyecto residencial de alta calidad, pensado para quienes buscan ubicación y diseño.',
    image: {
      src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80',
      alt: 'Fachada de edificio residencial',
    },
  },
]
