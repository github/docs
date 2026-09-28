import Operation from '@/rest/scripts/utils/operation'
import type { OpenApiSchema } from './openapi-types'

interface ProgAccessData {
  [key: string]: unknown
}

export type SchemaInput = OpenApiSchema

// Runs `process` on every operation with the programmatic access data, then
// returns the same array.
export async function processOperations(
  operations: Operation[],
  progAccessData: ProgAccessData,
): Promise<Operation[]> {
  await Promise.all(
    operations.map(async (operation) => {
      await operation.process(progAccessData)
    }),
  )
  return operations
}

export async function createOperations(schema: SchemaInput): Promise<Operation[]> {
  if (!schema.paths) {
    return []
  }
  return Object.entries(schema.paths)
    .map(([requestPath, operationsAtPath]) =>
      Object.entries(operationsAtPath).map(
        ([verb, operationProps]) =>
          new Operation(verb, requestPath, operationProps, schema.servers),
      ),
    )
    .flat()
}
