import { TransformerRegistry } from './types'
import { RestTransformer } from './rest-transformer'
import { SecretScanningTransformer } from './secret-scanning-transformer'
import { CodeQLCliTransformer } from './codeql-cli-transformer'
import { AuditLogsTransformer } from './audit-logs-transformer'
import { GraphQLIndexTransformer } from './graphql-index-transformer'
import { GraphQLReferenceTransformer } from './graphql-reference-transformer'
import { GraphQLChangelogTransformer } from './graphql-changelog-transformer'
import { GraphQLBreakingChangesTransformer } from './graphql-breaking-changes-transformer'
import { GithubAppsTransformer } from './github-apps-transformer'
import { WebhooksTransformer } from './webhooks-transformer'
import { TocTransformer } from './toc-transformer'
import { BespokeLandingTransformer } from './bespoke-landing-transformer'
import { JourneyLandingTransformer } from './journey-landing-transformer'
import { CategoryLandingTransformer } from './category-landing-transformer'
import { DiscoveryLandingTransformer } from './discovery-landing-transformer'
import { ProductGuidesTransformer } from './product-guides-transformer'
import { ProductLandingTransformer } from './product-landing-transformer'
import { SearchPageTransformer } from './search-page-transformer'

/**
 * Global transformer registry
 * Registers all available page-to-markdown transformers
 */
export const transformerRegistry = new TransformerRegistry()

transformerRegistry.register(new RestTransformer())
transformerRegistry.register(new SecretScanningTransformer())
transformerRegistry.register(new CodeQLCliTransformer())
transformerRegistry.register(new AuditLogsTransformer())
transformerRegistry.register(new GraphQLIndexTransformer())
transformerRegistry.register(new GraphQLReferenceTransformer())
transformerRegistry.register(new GraphQLChangelogTransformer())
transformerRegistry.register(new GraphQLBreakingChangesTransformer())
transformerRegistry.register(new GithubAppsTransformer())
transformerRegistry.register(new WebhooksTransformer())
transformerRegistry.register(new TocTransformer())
transformerRegistry.register(new BespokeLandingTransformer())
transformerRegistry.register(new JourneyLandingTransformer())
transformerRegistry.register(new CategoryLandingTransformer())
transformerRegistry.register(new DiscoveryLandingTransformer())
transformerRegistry.register(new ProductGuidesTransformer())
transformerRegistry.register(new ProductLandingTransformer())
transformerRegistry.register(new SearchPageTransformer())

export { TransformerRegistry } from './types'
export type { PageTransformer } from './types'
