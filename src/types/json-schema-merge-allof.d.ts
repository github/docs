declare module 'json-schema-merge-allof' {
  /**
   * JSON Schema object that may contain allOf
   */
  interface JSONSchema {
    allOf?: JSONSchema[]
    properties?: Record<string, JSONSchema>
    required?: string[]
    type?: string | string[]
    items?: JSONSchema | JSONSchema[]
    additionalProperties?: boolean | JSONSchema
    [key: string]: unknown // JSON Schema allows arbitrary additional properties per spec
  }

  /**
   * Options for merging allOf schemas
   */
  interface MergeAllOfOptions {
    /**
     * Resolvers for custom keywords
     * Using any because this third-party library has dynamic schema structures
     * that vary based on the JSON Schema specification
     */
    resolvers?: Record<
      string,
      (values: unknown[], path: string[], mergeSchemas: unknown, options: unknown) => unknown
    >

    /**
     * Whether to ignore additional properties conflicts
     */
    ignoreAdditionalProperties?: boolean

    /**
     * Deep merge objects instead of replacing
     */
    deep?: boolean
  }

  /**
   * Merges JSON schemas that use allOf into a single schema
   *
   * @param schema - The JSON schema containing allOf
   * @param options - Merge options
   * @returns The merged schema without allOf
   */
  function mergeAllOf(schema: JSONSchema, options?: MergeAllOfOptions): JSONSchema

  export default mergeAllOf
}
