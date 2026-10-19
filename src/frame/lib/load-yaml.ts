import { load, loadAll, type LoadOptions } from 'js-yaml'

// load throws YAMLException when input has no YAML document.
// Return undefined for empty, whitespace-only, or comments-only input.
// Inputs with a document still behave like load, including malformed YAML errors.
export function loadYaml(content: string, options?: LoadOptions): unknown {
  // loadAll lets empty input return zero documents without parsing twice.
  const documents: unknown[] = []
  loadAll(content, (doc) => documents.push(doc), options)
  // Empty, whitespace-only, and comments-only input has no YAML document.
  if (documents.length === 0) return undefined
  // Multiple documents defer to load so callers get its single-document error.
  if (documents.length > 1) return load(content, options)
  return documents[0]
}
