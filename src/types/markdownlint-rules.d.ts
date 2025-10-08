// Simple type declaration for markdownlint external library
// Using any types to avoid complex typing for external dependencies

declare module '../../../../node_modules/markdownlint/lib/rules' {
  const rules: any[]
  export = rules
}
