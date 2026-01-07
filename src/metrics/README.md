# Metrics

The metrics subject provides CLI tools for fetching analytics data from Kusto (Azure Data Explorer) about GitHub Docs usage. These tools help content strategists, writers, and engineers understand page performance, user behavior, and content effectiveness.

## Purpose & Scope

This subject is responsible for:
- Providing CLI tools to query Kusto for docs analytics
- `docstat` - Get metrics for a single URL (views, users, bounces, etc.)
- `docsaudit` - Get metrics for an entire content directory
- Kusto query abstractions for common metrics
- Authentication and connection to Azure Kusto
- Date range calculations for time-series queries

## Architecture & Key Assets

### Key capabilities and their locations

- `lib/kusto-client.ts` - `getKustoClient()`: Creates authenticated Kusto client using Azure CLI
- `lib/kusto-client.ts` - `runQuery()`: Executes Kusto queries and returns results
- `scripts/docstat.ts` - CLI tool: Fetches metrics for a single docs URL
- `scripts/docsaudit.ts` - CLI tool: Audits entire content directories with CSV output
- `queries/*.ts` - Pre-defined Kusto queries for specific metrics

## Setup & Usage

### Installation and authentication

1. Install Azure CLI:
   ```bash
   brew install azure-cli
   ```

2. Login with Azure credentials:
   ```bash
   az login
   ```
   Use your `<username>@githubazure.com` credentials.

3. Add Kusto configuration to `.env` file (values pinned in Slack):
   ```
   KUSTO_CLUSTER='<value>'
   KUSTO_DATABASE='<value>'
   ```

### docstat usage

Get metrics for a single URL:

```bash
npm run docstat -- <URL>
```

Example:
```bash
npm run docstat -- https://docs.github.com/copilot/tutorials/modernize-legacy-code
```

Default metrics returned:
- 30-day views
- 30-day unique users
- Average view duration
- Bounce rate
- Helpfulness score (survey data)
- Exits to support

#### Options

```bash
# Compare with previous period
npm run docstat -- <URL> --compare

# Custom date range (60 days)
npm run docstat -- <URL> --range 60

# Include redirects from frontmatter
npm run docstat -- <URL> --redirects

# FPT data only (default includes all versions)
npm run docstat -- <URL> --fptOnly

# JSON output
npm run docstat -- <URL> --json

# Combine options
npm run docstat -- <URL> --compare --range 60 --redirects
```

#### JSON output with jq

```bash
npm run --silent docstat -- <URL> --json | jq .data.users
```

### docsaudit usage

Audit an entire content directory:

```bash
npm run docsaudit -- <content-directory>
```

Example:
```bash
npm run docsaudit -- actions
```

Output includes:
- Title
- Path
- Versions
- 30-day views
- 30-day unique users

Results are saved to a CSV file in the project root.

## Data & External Dependencies

### Data sources
- Kusto (Azure Data Explorer) - GitHub's data warehouse for analytics
- Docs event data - Page views, user interactions, surveys
- Content frontmatter - For path resolution and redirect detection

### Dependencies
- `azure-kusto-data` - Official Azure Kusto SDK
- Azure CLI - For authentication (`az login`)
- Environment variables: `KUSTO_CLUSTER`, `KUSTO_DATABASE`

### Authentication
- Uses Azure CLI identity via `withAzLoginIdentity()`
- Sessions are long-lasting but expire periodically
- Re-run `az login` when session expires

### Queries
Pre-defined queries in `queries/` directory:
- `views.ts` - Total page views
- `users.ts` - Unique users
- `view-duration.ts` - Average session duration
- `bounces.ts` - Percentage of single-page sessions
- `survey-score.ts` - Helpfulness rating from surveys
- `exits-to-support.ts` - Clicks on support links

## Cross-links & Ownership

### Related subjects
- [`src/events`](../events/README.md) - Source of analytics event data
- [`src/frame`](../frame/README.md) - Frontmatter reading for path resolution
- Kusto database - Contains aggregated event data

### Internal documentation
For Kusto cluster details and database schema, see internal Docs Engineering documentation. Credentials are pinned in the #docs-engineering Slack channel.

### Ownership
- Team: Docs Content (with engineering support and reviews)
- Data questions: #docs-data

## Current State & Next Steps

### Known limitations
- Date range only accepts start date (end date is always current)
- Only English (`en`) language data is supported
- Queries are hardcoded in `queries/` directory
- URLs without version include all versions (FPT, GHEC, GHES combined)

### Metrics available
Current metrics:
- Views (page view count)
- Users (unique user count)
- View duration (average time on page)
- Bounces (single-page sessions)
- Survey score (helpfulness rating)
- Exits to support (support link clicks)

### Adding a new query

1. Create new file in `src/metrics/queries/`
2. Export a function that returns a Kusto query string
3. Import and call in `docstat.ts` or `docsaudit.ts`
4. Update CLI options if needed

Example:
```typescript
// queries/my-metric.ts
export function getMyMetric(path: string, startDate: string, endDate: string): string {
  return `
    PageViews
    | where Timestamp between (datetime(${startDate}) .. datetime(${endDate}))
    | where Path == "${path}"
    | summarize Count = count()
  `
}
```

### Troubleshooting

**Azure login expired:**
```bash
az login
```

**Missing environment variables:**
Check `.env` file has `KUSTO_CLUSTER` and `KUSTO_DATABASE` (values in Slack)

**No data found:**
- Verify URL is correct and includes `https://docs.github.com`
- Check date range (older content may have limited data)
- Try `--redirects` if article was recently moved

**Permission errors:**
Ensure your Azure account has read access to the Kusto database. Contact #docs-data if needed.
