import fs from 'fs/promises'

const POPULAR_PAGES_JSON = './lib/search/popular-pages.json'

export default async function getPopularPages(redirects) {
  const popularPages = {}
  try {
    const popularPagesRaw = await fs.readFile(POPULAR_PAGES_JSON, 'utf-8')
    let biggestCount = 0
    for (const line of popularPagesRaw.split('\n')) {
      if (!line.trim()) continue
      const { path_article: path, path_count: count } = JSON.parse(line)
      // The root page or any other potentially dirty record that is empty.
      if (!path) continue
      // This is safe because the `POPULAR_PAGES_JSON` always lists the
      // most popular first.
      if (!biggestCount) biggestCount = count
      // Don't bother writing massively long floating point numbers
      // because reducing it makes the JSON records smaller and we don't
      // need any more precision than 7 significant figures.
      const ratio = Number((count / biggestCount).toFixed(7))
      // The reason we're heeding redirects is because it's very possible
      // that the `POPULAR_PAGES_JSON` file is older/"staler" than the
      // content itself.
      // Imaging our analytics recorded that `/en/foo` had 1,234 pageviews,
      // and someone goes and... `git mv content/foo content/bar` plus
      // adding `redirect_from: - /foo` into the front-matter.
      // Then, by using the redirects first, we can maintain that popularity
      // by now "pretending" that it's `/en/bar` that has 1,234 pageviews.
      popularPages[redirects[path] || path] = ratio
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn(`The file ${POPULAR_PAGES_JSON} can not be found.`)
    } else {
      throw error
    }
  }
  return popularPages
}
