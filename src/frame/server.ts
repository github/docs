import { main } from './start-server'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

try {
  await main()
} catch (error) {
  logger.error('Uncaught top-level error', { error })
}
