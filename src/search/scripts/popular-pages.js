import fs from 'fs/promises'

export default async function getPopularPages(filePath, redirects) {
  const popularPagesRaw = await fs.readFile(filePath, 'utf-8')

  // Firt iterate through the array of objects, not making an assumption
  // that the first one is the biggest one.
  const all = {}
  for (const { path_article: path, path_count: count } of JSON.parse(popularPagesRaw)) {
    if (!path) {
      // Can happen if the SQL query is, for some unknown reason, finding
      // a path that is either `null` or an empty string. Treat it as a
      // junk entry and skip it.
      continue
    }
    if (path === 'index') {
      // That's the home page which doesn't count. It doesn't count because
      // people don't arrive on that for the information they seek. It's
      // merely a navigation tool.
      continue
    }
    if (path.startsWith('early-access/')) {
      // We never index these anyway so their popularity is never relevant.
      continue
    }
    all[path] = count
  }

  const biggestCount = Math.max(...Object.values(all))
  const popularPages = {}
  for (const [path, count] of Object.entries(all)) {
    // Don't bother writing massively long floating point numbers
    // because reducing it makes the JSON records smaller and we don't
    // need any more precision than 7 significant figures.
    const ratio = Number((count / biggestCount).toFixed(7))

    // The reason we're heeding redirects is because it's possible
    // that the JSON file is older/"staler" than the
    // content itself.
    // Imaging our analytics recorded that `/en/foo` had 1,234 pageviews,
    // and someone goes and... `git mv content/foo content/bar` plus
    // adding `redirect_from: - /foo` into the front-matter.
    // Then, by using the redirects first, we can maintain that popularity
    // by now "pretending" that it's `/en/bar` that has 1,234 pageviews.
    popularPages[redirects[path] || path] = ratio
  }

  return popularPages
}
