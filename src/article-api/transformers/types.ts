import type { Context, Page } from '@/types'

/**
 * Link data for landing page sections
 */
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

/**
 * Template data structure for landing pages
 */
export interface TemplateData {
  title: string
  intro: string
  sections: Section[]
}

/**
 * Converts a page into markdown.
 */
export interface PageTransformer {
  /** Template file to render with, e.g. 'landing-page.template.md'. */
  templateName?: string

  canTransform(page: Page): boolean

  /** `apiVersion` is the REST calendar version, e.g. '2022-11-28'. */
  transform(page: Page, pathname: string, context: Context, apiVersion?: string): Promise<string>
}

/**
 * Transformers are evaluated in registration order, and the first one whose
 * `canTransform()` returns true wins. Register the specific ones before the
 * general ones.
 *
 * This class is not thread-safe, so register everything during initialization
 * rather than while handling requests.
 */
export class TransformerRegistry {
  private transformers: PageTransformer[] = []

  register(transformer: PageTransformer): void {
    this.transformers.push(transformer)
  }

  /** Returns null when `page` is nullish or nothing can handle it. */
  findTransformer(page: Page): PageTransformer | null {
    if (page == null) {
      return null
    }
    return this.transformers.find((t) => t.canTransform(page)) || null
  }
}
