import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

interface DataSchemas {
  [key: string]: string
}

// Helper function to resolve schema paths based on runtime context
function resolveSchemaPath(filename: string): string {
  // Check if we're in a test context
  const isTest = process.env.NODE_ENV === 'test'

  if (isTest) {
    // Use relative paths that work for vitest and 4.x compatibility with
    // dynamic imports in particular
    return `../lib/data-schemas/${filename}`
  } else {
    // Use absolute paths that work for content linter and other contexts
    return `@/data-directory/lib/data-schemas/${filename}`
  }
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
        // Use the resolver for consistent path handling
        tableSchemas[`data/tables/${yamlFile}`] = resolveSchemaPath(`tables/${name}.ts`)
      }
    }
  }

  return tableSchemas
}

// Manual schema registrations for non-table data
const manualSchemas: DataSchemas = {
  'data/features': resolveSchemaPath('features.ts'),
  'data/variables': resolveSchemaPath('variables.ts'),
  'data/learning-tracks': resolveSchemaPath('learning-tracks.ts'),
  'data/release-notes': resolveSchemaPath('release-notes.ts'),
  'data/code-languages.yml': resolveSchemaPath('code-languages.ts'),
  'data/glossaries/candidates.yml': resolveSchemaPath('glossaries-candidates.ts'),
  'data/glossaries/external.yml': resolveSchemaPath('glossaries-external.ts'),
}

// Combine manual registrations with auto-discovered table schemas
const dataSchemas: DataSchemas = {
  ...manualSchemas,
  ...loadTableSchemas(),
}

export default dataSchemas
