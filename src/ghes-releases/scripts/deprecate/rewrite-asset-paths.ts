import fs from 'fs'
import path from 'path'

interface ScraperResource {
  isHtml(): boolean
  isCss(): boolean
  getText(): string
  getFilename(): string
  encoding: BufferEncoding
}

interface ResourceSavedArgs {
  resource: ScraperResource
}

export class RewriteAssetPathsPlugin {
  tempDirectory: string
  localDev: boolean
  replaceUrl: string
  pendingWrites: Array<Promise<void>> = []

  constructor(tempDirectory: string, localDev: boolean, replaceUrl: string) {
    this.tempDirectory = tempDirectory
    this.localDev = localDev
    this.replaceUrl = replaceUrl
  }

  // HTML and CSS asset paths must point at the archive site unless local-dev leaves them relative.
  apply(
    registerAction: (event: string, callback: (args: ResourceSavedArgs) => Promise<void>) => void,
  ) {
    // website-scraper doesn't await onResourceSaved, so scrape() can resolve mid-write.
    // It does await afterFinish, so wait for every rewrite there and surface failures.
    registerAction('onResourceSaved', async ({ resource }: ResourceSavedArgs) => {
      const write = this.rewrite(resource)
      this.pendingWrites.push(write)
      try {
        await write
      } catch {
        // afterFinish rethrows this so scrape() rejects.
      }
    })
    registerAction('afterFinish', async () => {
      const results = await Promise.allSettled(this.pendingWrites)
      const failure = results.find((result) => result.status === 'rejected')
      if (failure) throw failure.reason
    })
  }

  async rewrite(resource: ScraperResource) {
    process.stdout.write('.')

    if (!resource.isHtml() && !resource.isCss()) return

    const text = resource.getText()
    let newBody = text

    if (resource.isHtml()) {
      // Next.js runtime files break static archives.
      newBody = newBody.replace(
        /<script\ssrc="(\.\.\/)*_next\/static\/[\w]+\/(_buildManifest|_ssgManifest).js?".*?><\/script>/g,
        '',
      )
      newBody = newBody.replace(/<link href=".*manifest.json".*?>/g, '')

      if (!this.localDev) {
        newBody = newBody.replace(
          /(?<attribute>src|href)="(?:\.\.\/|\/)*(?<basepath>_next\/static|javascripts|stylesheets|assets\/fonts|assets\/cb-\d+\/images|node_modules)/g,
          (match: string, attribute: string, basepath: string) => {
            const replaced = `${this.replaceUrl}/${basepath}`
            return `${attribute}="${replaced}`
          },
        )
      }
    }

    if (resource.isCss()) {
      if (!this.localDev) {
        newBody = newBody.replace(
          /(?<attribute>url)(?<paren>\("|\()(?:\.\.\/)*(?<basepath>_next\/static|assets\/fonts|assets\/images|assets\/cb-\d+\/images)/g,
          (match: string, attribute: string, paren: string, basepath: string) => {
            const replaced = `${this.replaceUrl}/${basepath}`
            return `${attribute}${paren}${replaced}`
          },
        )
      }
    }

    const filePath = path.join(this.tempDirectory, resource.getFilename())
    await fs.promises.writeFile(filePath, newBody, resource.encoding)
  }
}
