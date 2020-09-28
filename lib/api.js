import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const episodesDirectory = join(process.cwd(), '_episodes')

export function getEpisodeSlugs() {
  return fs.readdirSync(episodesDirectory)
}

export function getEpisodeBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(episodesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllEpisodes(fields = []) {
  const slugs = getEpisodeSlugs()
  const episodes = slugs
    .map((slug) => getEpisodeBySlug(slug, fields))
    // sort episodes by date in descending order
    .sort((episode1, episode2) => (episode1.number > episode2.number ? '-1' : '1'))
  return episodes
}
