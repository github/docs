import {
  Client as KustoClient,
  KustoConnectionStringBuilder,
  KustoResultTable,
} from 'azure-kusto-data'

import dotenv from 'dotenv'

dotenv.config()

if (!(process.env.KUSTO_CLUSTER || process.env.KUSTO_DATABASE)) {
  console.error(`Add KUSTO_CLUSTER and KUSTO_DATABASE to your .env file`)
  process.exit(0)
}

const KUSTO_CLUSTER = process.env.KUSTO_CLUSTER!
const KUSTO_DATABASE = process.env.KUSTO_DATABASE!

export interface KustoQueryResult {
  primaryResults: KustoResultTable[]
}

export function getKustoClient(): KustoClient | undefined {
  let client: KustoClient | undefined

  try {
    const kcsb = KustoConnectionStringBuilder.withAzLoginIdentity(KUSTO_CLUSTER)
    client = new KustoClient(kcsb)
  } catch (error) {
    console.error('Error connecting to Kusto')
    console.error(error)
  }

  return client
}

export async function runQuery(
  pathToFetch: string | string[],
  query: string,
  client: KustoClient,
  queryType: string,
  verbose: boolean = false,
): Promise<KustoQueryResult | null> {
  // Display query if verbose mode is on
  if (verbose) {
    console.log(`\n--- EXECUTING QUERY FOR "${queryType.toUpperCase()}" ---`)
    console.log(query)
    console.log('----------------------\n')
  }

  const results = await client.execute(KUSTO_DATABASE, query)

  if (results.primaryResults.length === 0) {
    console.log(`No data found for URL: ${pathToFetch}`)
    return null
  }

  return results
}
