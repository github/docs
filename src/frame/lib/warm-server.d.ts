type Site = {
  pages: Record<String, Page>
  redirects: Record<string, string>
  unversionedTree: Record<string, string>
  siteTree: Record<string, string>
  pageList: Page[]
}

export default function warmServer(languages: string[]): Promise<Site>
