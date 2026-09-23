declare module 'json-schema-merge-allof' {
  interface JSONSchema {
    allOf?: JSONSchema[]
    properties?: Record<string, JSONSchema>
    required?: string[]
    type?: string | string[]
    items?: JSONSchema | JSONSchema[]
    additionalProperties?: boolean | JSONSchema
    [key: string]: unknown // JSON Schema allows arbitrary additional properties per spec
  }

  interface MergeAllOfOptions {
    // `unknown` because this library's schema structures vary at runtime.
    resolvers?: Record<
      string,
      (values: unknown[], path: string[], mergeSchemas: unknown, options: unknown) => unknown
    >

    ignoreAdditionalProperties?: boolean

    deep?: boolean
  }

  function mergeAllOf(schema: JSONSchema, options?: MergeAllOfOptions): JSONSchema

  export default mergeAllOf
}
