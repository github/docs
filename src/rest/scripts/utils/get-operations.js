import Operation from './operation.js'

// The module accepts a JSON schema object as input
// and returns an array of its operation objects with their
// HTTP verb and requestPath attached as properties
export async function processOperations(operations, progAccessData) {
  await Promise.all(operations.map(async (operation) => await operation.process(progAccessData)))
  return operations
}

export async function createOperations(schema) {
  return Object.entries(schema.paths)
    .map(([requestPath, operationsAtPath]) =>
      Object.entries(operationsAtPath).map(
        ([verb, operationProps]) =>
          new Operation(verb, requestPath, operationProps, schema.servers),
      ),
    )
    .flat()
}
