import { TransformerRegistry } from './types'
import { RestTransformer } from './rest-transformer'
import { SecretScanningTransformer } from './secret-scanning-transformer'
import { CodeQLCliTransformer } from './codeql-cli-transformer'
import { AuditLogsTransformer } from './audit-logs-transformer'
import { GraphQLTransformer } from './graphql-transformer'

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

export { TransformerRegistry } from './types'
export type { PageTransformer } from './types'
