import type { Context, Page } from '@/types'

export interface LinkData {
  href: string
  title: string
  intro?: string
}

export interface LinkGroup {
  title: string | null
  links: LinkData[]
}

export interface Section {
  title: string | null
  groups: LinkGroup[]
}

export interface TemplateData {
  title: string
  intro: string
  sections: Section[]
}

export interface PageTransformer {
  templateName?: string

  canTransform(page: Page): boolean

  // apiVersion selects the REST calendar version, such as 2022-11-28.
  transform(page: Page, pathname: string, context: Context, apiVersion?: string): Promise<string>
}

// Transformers run in registration order, and the first matching canTransform wins.
// Register specific transformers before general transformers.
// Register all transformers during initialization; this class is not thread-safe.
export class TransformerRegistry {
  private transformers: PageTransformer[] = []

  register(transformer: PageTransformer): void {
    this.transformers.push(transformer)
  }

  findTransformer(page: Page): PageTransformer | null {
    if (page == null) {
      return null
    }
    return this.transformers.find((t) => t.canTransform(page)) || null
  }
}
