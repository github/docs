import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

interface DataSchemas {
  [key: string]: string
}

// Auto-discover table schemas from data/tables/ directory
function loadTableSchemas(): DataSchemas {
  const tablesDir = path.join(process.cwd(), 'data/tables')
  const schemasDir = path.join(__dirname, 'tables')
  const tableSchemas: DataSchemas = {}

  if (fs.existsSync(tablesDir)) {
    const yamlFiles = fs.readdirSync(tablesDir).filter((file) => file.endsWith('.yml'))

    for (const yamlFile of yamlFiles) {
      const name = path.basename(yamlFile, '.yml')
      const schemaPath = path.join(schemasDir, `${name}.ts`)

      if (fs.existsSync(schemaPath)) {
        tableSchemas[`data/tables/${yamlFile}`] = `@/data-directory/lib/data-schemas/tables/${name}`
      }
    }
  }

  return tableSchemas
}

// Manual schema registrations for non-table data
const manualSchemas: DataSchemas = {
  'data/features': '@/data-directory/lib/data-schemas/features',
  'data/variables': '@/data-directory/lib/data-schemas/variables',
  'data/learning-tracks': '@/data-directory/lib/data-schemas/learning-tracks',
  'data/release-notes': '@/data-directory/lib/data-schemas/release-notes',
  'data/code-languages.yml': '@/data-directory/lib/data-schemas/code-languages',
  'data/glossaries/candidates.yml': '@/data-directory/lib/data-schemas/glossaries-candidates',
  'data/glossaries/external.yml': '@/data-directory/lib/data-schemas/glossaries-external',
}

// Combine manual registrations with auto-discovered table schemas
const dataSchemas: DataSchemas = {
  ...manualSchemas,
  ...loadTableSchemas(),
}

export default dataSchemas
