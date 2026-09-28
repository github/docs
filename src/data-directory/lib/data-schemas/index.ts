import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

interface DataSchemas {
  [key: string]: string
}

function resolveSchemaPath(filename: string): string {
  const isTest = process.env.NODE_ENV === 'test'

  if (isTest) {
    // Vitest dynamic imports need relative schema paths.
    return `../lib/data-schemas/${filename}`
  } else {
    // Content linter and other runtime contexts need absolute schema paths.
    return `@/data-directory/lib/data-schemas/${filename}`
  }
}

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
        tableSchemas[`data/tables/${yamlFile}`] = resolveSchemaPath(`tables/${name}.ts`)
      }
    }
  }

  return tableSchemas
}

const manualSchemas: DataSchemas = {
  'data/features': resolveSchemaPath('features.ts'),
  'data/variables': resolveSchemaPath('variables.ts'),
  'data/release-notes': resolveSchemaPath('release-notes.ts'),
  'data/code-languages.yml': resolveSchemaPath('code-languages.ts'),
  'data/glossaries/candidates.yml': resolveSchemaPath('glossaries-candidates.ts'),
  'data/glossaries/external.yml': resolveSchemaPath('glossaries-external.ts'),
  // Register the matrix directory schema because loadTableSchemas reads only top-level files.
  // The directory schema validates every per-IDE file.
  'data/tables/copilot/matrix': resolveSchemaPath('tables/copilot/matrix-ide.ts'),
  'data/tables/copilot/matrix-meta.yml': resolveSchemaPath('tables/copilot/matrix-meta.ts'),
}

const dataSchemas: DataSchemas = {
  ...manualSchemas,
  ...loadTableSchemas(),
}

export default dataSchemas
