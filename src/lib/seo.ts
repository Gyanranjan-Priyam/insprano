import { Metadata } from 'next'

const siteConfig = {
  name: 'INSPRANO - GCE Kalahandi',
  description: 'INSPRANO is the annual techno-cultural fest of Government College of Engineering Kalahandi (GCEK), Bhawanipatna. Three days of technology, culture, innovation, and art featuring 50+ events, hackathons, robowars, cultural nights, workshops, and ₹5L+ in prizes. Join 2000+ participants from colleges across Odisha and beyond.',
  url: 'https://www.insprano.tech',
  ogImage: '/og-image.png',
  links: {
    instagram: 'https://www.instagram.com/gcek.insprano',
    linkedin: 'https://www.linkedin.com/company/insprano-gce-kalahandi',
    github: 'https://github.com/codebreakers-gcek',
    twitter: 'https://twitter.com/insprano_gcek',
  },
}

export function generateSEO({
  title,
  description,
  image,
  url,
  noIndex = false,
  keywords,
  type = 'website',
  publishedTime,
  modifiedTime,
}: {
  title: string
  description?: string
  image?: string
  url?: string
  noIndex?: boolean
  keywords?: string[]
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}): Metadata {
  const metaTitle = `${title} | ${siteConfig.name}`
  const metaDescription = description || siteConfig.description
  const metaUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  
  return {
    title,
    description: metaDescription,
    keywords: keywords || [],
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      creator: '@insprano_gcek',
      site: '@insprano_gcek',
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    other: {
      'theme-color': '#FF7A18',
      'color-scheme': 'dark light',
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'INSPRANO - GCE Kalahandi',
    alternateName: [
      'INSPRANO',
      'INSPRANO GCEK',
      'Techno-Cultural Fest GCE Kalahandi',
    ],
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/fest-logo.png`,
    description: siteConfig.description,
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bhawanipatna',
        addressRegion: 'Kalahandi',
        addressCountry: 'IN',
      },
    },
    parentOrganization: {
      '@type': 'EducationalOrganization',
      name: 'Government College of Engineering Kalahandi',
    },
    sameAs: [
      siteConfig.links.instagram,
      siteConfig.links.linkedin,
      siteConfig.links.github,
    ],
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

export function generateEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: string
  image?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bhawanipatna',
        addressRegion: 'Kalahandi',
        addressCountry: 'IN',
      },
    },
    image: event.image ? `${siteConfig.url}${event.image}` : `${siteConfig.url}${siteConfig.ogImage}`,
    url: `${siteConfig.url}${event.url}`,
    organizer: {
      '@type': 'Organization',
      name: 'INSPRANO - GCE Kalahandi',
      url: siteConfig.url,
    },
  }
}

export function generatePersonSchema(person: {
  name: string
  role: string
  image?: string
  url?: string
  description?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    image: person.image,
    url: person.url,
    description: person.description,
    worksFor: {
      '@type': 'Organization',
      name: 'INSPRANO - GCE Kalahandi',
    },
  }
}

export function generateWebPageSchema(page: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: `${siteConfig.url}${page.url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

export function generateCollectionPageSchema(collection: {
  name: string
  description: string
  url: string
  items: { name: string; url: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: collection.name,
    description: collection.description,
    url: `${siteConfig.url}${collection.url}`,
    hasPart: collection.items.map((item) => ({
      '@type': 'WebPage',
      name: item.name,
      url: `${siteConfig.url}${item.url}`,
    })),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
  author: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${siteConfig.url}${article.url}`,
    image: article.image ? `${siteConfig.url}${article.image}` : `${siteConfig.url}${siteConfig.ogImage}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/assets/fest-logo.png`,
      },
    },
  }
}

export function generateCourseSchema(course: {
  name: string
  description: string
  url: string
  provider: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    url: `${siteConfig.url}${course.url}`,
    provider: {
      '@type': 'Organization',
      name: course.provider,
      sameAs: siteConfig.url,
    },
  }
}

export { siteConfig }
