import { TransformerRegistry } from './types'
import { RestTransformer } from './rest-transformer'
import { SecretScanningTransformer } from './secret-scanning-transformer'
import { CodeQLCliTransformer } from './codeql-cli-transformer'
import { AuditLogsTransformer } from './audit-logs-transformer'
import { GraphQLTransformer } from './graphql-transformer'
import { GithubAppsTransformer } from './github-apps-transformer'
import { WebhooksTransformer } from './webhooks-transformer'
import { TocTransformer } from './toc-transformer'
import { ProductGuidesTransformer } from './product-guides-transformer'
import { ProductLandingTransformer } from './product-landing-transformer'

/**
 * Global transformer registry
 * Registers all available page-to-markdown transformers
 */
export const transformerRegistry = new TransformerRegistry()

transformerRegistry.register(new RestTransformer())
transformerRegistry.register(new SecretScanningTransformer())
transformerRegistry.register(new CodeQLCliTransformer())
transformerRegistry.register(new AuditLogsTransformer())
transformerRegistry.register(new GraphQLTransformer())
transformerRegistry.register(new GithubAppsTransformer())
transformerRegistry.register(new WebhooksTransformer())
transformerRegistry.register(new TocTransformer())
transformerRegistry.register(new ProductGuidesTransformer())
transformerRegistry.register(new ProductLandingTransformer())

export { TransformerRegistry } from './types'
export type { PageTransformer } from './types'
