interface DataSchemas {
  [key: string]: string
}

const dataSchemas: DataSchemas = {
  'data/features': '@/data-directory/lib/data-schemas/features.js',
  'data/variables': '@/data-directory/lib/data-schemas/variables.js',
  'data/learning-tracks': '@/data-directory/lib/data-schemas/learning-tracks.js',
  'data/release-notes': '@/data-directory/lib/data-schemas/release-notes.js',
  'data/code-languages.yml': '@/data-directory/lib/data-schemas/code-languages.js',
  'data/glossaries/candidates.yml': '@/data-directory/lib/data-schemas/glossaries-candidates.js',
  'data/glossaries/external.yml': '@/data-directory/lib/data-schemas/glossaries-external.js',
}

export default dataSchemas
