const fs = require('fs')
const matter = require('gray-matter')

module.exports = function addFrontmatterToFile (frontmatter, file) {
  const { content, data } = matter(fs.readFileSync(file, 'utf8'))
  Object.assign(data, frontmatter)
  fs.writeFileSync(file, matter.stringify(content, data, { lineWidth: 10000 }))
}
