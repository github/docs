declare module 'csp-parse' {
  export default class CspParse {
    constructor(cspHeader: string)
    get(directive: string): string | string[]
  }
}
