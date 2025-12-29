declare module 'markdownlint-rule-search-replace' {
  const searchReplace: {
    names: string[]
    description: string
    tags: string[]
    // Using any because this is a third-party library without proper TypeScript definitions
    // params contains markdownlint-specific data structures, onError is a callback function
    function: (params: any, onError: any) => void
  }

  export default searchReplace
}
