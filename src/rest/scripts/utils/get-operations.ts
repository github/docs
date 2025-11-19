import Operation from '@/rest/scripts/utils/operation'

interface ProgAccessData {
  [key: string]: any
}

interface SchemaInput {
  paths?: {
    [requestPath: string]: {
      [verb: string]: any
    }
  }
  servers?: any[]
  [key: string]: any
}

// The module accepts a JSON schema object as input
// and returns an array of its operation objects with their
// HTTP verb and requestPath attached as properties
export async function processOperations(
  operations: any[],
  progAccessData: ProgAccessData,
): Promise<any[]> {
  await Promise.all(
    operations.map(async (operation) => {
      await operation.process(progAccessData)
    }),
  )
  return operations
}

export async function createOperations(schema: SchemaInput): Promise<any[]> {
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
