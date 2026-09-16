import { load, loadAll, type LoadOptions } from 'js-yaml'

// js-yaml v5's `load()` throws a `YAMLException` ("expected a document, but
// the input is empty") when the input contains no YAML document — i.e. when
// it is empty, whitespace-only, or comments-only. js-yaml v4 returned
// `undefined` in those cases. This wrapper restores the v4 behavior so callers
// that read arbitrary (possibly empty) YAML files keep working across the
// major version bump.
//
// For any input that does contain a document, this behaves exactly like
// `load()` — including throwing on genuinely malformed YAML.
export function loadYaml(content: string, options?: LoadOptions): unknown {
  // `loadAll` invokes the iterator once per document and, unlike `load`, does
  // not throw when there are zero documents. Collect the documents so we can
  // reproduce `load`'s single-document semantics without parsing twice.
  const documents: unknown[] = []
  loadAll(content, (doc) => documents.push(doc), options)
  // No document (empty / whitespace-only / comments-only): v4 returned
  // `undefined`.
  if (documents.length === 0) return undefined
  // Multiple documents: defer to `load` so it throws the same "expected a
  // single document" error that v4 did.
  if (documents.length > 1) return load(content, options)
  return documents[0]
}
