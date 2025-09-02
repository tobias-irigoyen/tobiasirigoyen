const { writeFileSync } = require('fs')
const path = require('path')
const works = require('../src/assets/works.json')

const BASE_URL = 'https://tusitio.com'

function generateSitemap() {
  const staticRoutes = [
    '/',
    '/es/',
    '/en/',
    '/es/proyectos',
    '/en/projects',
    '/es/contacto',
    '/en/contact',
  ]

  const workRoutes = works.map((w) => `/es/proyectos/${w.slug}`)
  const workRoutesEn = works.map((w) => `/en/projects/${w.slug}`)

  const urls = [...staticRoutes, ...workRoutes, ...workRoutesEn].map(
    (p) => `<url><loc>${BASE_URL}${p}</loc></url>`,
  )

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

  writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap, 'utf8')
  console.log('✅ Sitemap generado en public/sitemap.xml')
}

generateSitemap()
