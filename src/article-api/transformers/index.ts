import { TransformerRegistry } from './types'
import { RestTransformer } from './rest-transformer'

/**
 * Global transformer registry
 * Registers all available page-to-markdown transformers
 */
export const transformerRegistry = new TransformerRegistry()

// Register REST transformer
transformerRegistry.register(new RestTransformer())

// Future transformers can be registered here:
// transformerRegistry.register(new WebhooksTransformer())
// transformerRegistry.register(new GitHubAppsTransformer())

export { TransformerRegistry } from './types'
export type { PageTransformer } from './types'
