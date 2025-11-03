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
        // Use relative path from test file for vitest 4.x compatibility with dynamic imports
        tableSchemas[`data/tables/${yamlFile}`] = `../lib/data-schemas/tables/${name}.ts`
      }
    }
  }

  return tableSchemas
}

// Manual schema registrations for non-table data
// Use relative paths from the test file for vitest 4.x compatibility with dynamic imports
const manualSchemas: DataSchemas = {
  'data/features': '../lib/data-schemas/features.ts',
  'data/variables': '../lib/data-schemas/variables.ts',
  'data/learning-tracks': '../lib/data-schemas/learning-tracks.ts',
  'data/release-notes': '../lib/data-schemas/release-notes.ts',
  'data/code-languages.yml': '../lib/data-schemas/code-languages.ts',
  'data/glossaries/candidates.yml': '../lib/data-schemas/glossaries-candidates.ts',
  'data/glossaries/external.yml': '../lib/data-schemas/glossaries-external.ts',
}

// Combine manual registrations with auto-discovered table schemas
const dataSchemas: DataSchemas = {
  ...manualSchemas,
  ...loadTableSchemas(),
}

export default dataSchemas
