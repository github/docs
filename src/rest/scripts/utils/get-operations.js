import Operation from './operation.js'

// The module accepts a JSON schema object as input
// and returns an array of its operation objects with their
// HTTP verb and requestPath attached as properties
export async function processOperations(operations) {
  await Promise.all(operations.map(async (operation) => await operation.process()))
  return operations
}

export async function createOperations(schema) {
  /*
  const operations = []
  for (const [requestPath, operationsAtPath] of Object.entries(schema.paths)) {
    for (const [verb, operationProps] of Object.entries(operationsAtPath)) {
      const operation = new Operation(verb, requestPath, operationProps, schema.servers)
      operations.push(operation)
    }
  }
  */
  return Object.entries(schema.paths)
    .map(([requestPath, operationsAtPath]) =>
      Object.entries(operationsAtPath).map(
        ([verb, operationProps]) =>
          new Operation(verb, requestPath, operationProps, schema.servers),
      ),
    )
    .flat()
}
