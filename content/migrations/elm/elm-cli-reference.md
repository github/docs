---
title: Enterprise Live Migrations CLI reference
shortTitle: ELM CLI reference
intro: 'Detailed usage information for the {% data variables.product.prodname_elm_short %} CLI tool.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: reference
---

{% data reusables.elm.preview-note %}

## `elm migration` commands

| Command | Description |
|---|---|
| `elm migration create` | Creates a new migration for a single source repository |
| `elm migration start --migration-id MIGRATION-ID` | Starts a migration |
| `elm migration status --migration-id MIGRATION-ID` | Shows the status, progress, cutover readiness, and timing of a migration |
| `elm migration list` | Lists all migrations and their statuses |
| `elm migration cancel --migration-id MIGRATION-ID` | Cancels a migration in progress |
| `elm migration cutover-to-destination --migration-id MIGRATION-ID` | Initiates the final cutover, locking the source repository and completing the migration |

Some of these commands can take additional options. See the later sections in this article.

## `elm migration create` options

Create a new migration to prepare for repository export and import.

| Flag | Required | Default | Description |
|---|---|---|---|
| `--source-org` | Yes | N/A | Slug of the source organization on {% data variables.product.prodname_ghe_server %} |
| `--source-repo` | Yes | N/A | Name of the source repository |
| `--target-org` | Yes | N/A | Slug of the destination organization on {% data variables.enterprise.data_residency_site %} |
| `--target-repo` | Yes | N/A | Name of the destination repository |
| `--target-api` | Yes | N/A | {% data reusables.elm.ghe-url-description %} |
| `--pat-name` | Yes | N/A | This must be set to a static string: `system-pat` |
| `--target-visibility` | No | `internal` | Visibility of the destination repository. Must be `private` or `internal`. Public repositories are not supported. |
| `--start` | No | `false` | Automatically starts the migration after creating it |

## `elm migration list` options

| Flag | Required | Default | Description |
|---|---|---|---|
| `--status` | No | N/A | Filters results by migration status. Valid values: `created`, `queued`, `in_progress`, `paused`, `completed`, `failed`, `terminated`. |
| `--page-size` | No | N/A | Number of results per page |
| `--after` | No | N/A | Cursor for pagination, from a previous response |

## `elm migration cutover-to-destination` options

| Flag | Required | Default | Description |
|---|---|---|---|
| `--migration-id` | Yes | N/A | The ID of a migration that is ready for cutover. |
| `--force` | No | `false` | By default, the command checks whether the migration target reports readiness before proceeding. Use `--force` to bypass this check when you are certain the migration state is correct. |

## Global flags and variables

The following properties can be provided either as environment variables or as flags on any command, with command flags taking priority. You should set these values _after_ applying the `ghe-config` configuration.

| Variable | Flag | Required | Description |
|----------|------|----------|-------------|
| API_URL | `--api-url` | Yes | Must be set to `{% data reusables.elm.localhost-value %}`. |
| MIGRATION_MANAGER_HMAC_KEY | `--migration-manager-hmac-key` | Yes | Must be set to `{% data reusables.elm.hmac-key-value %}`. |
| MIGRATION_TARGET_URL | `--migration-target-url` | Yes | {% data reusables.elm.ghe-url-description %} |
| MIGRATION_TARGET_TOKEN | `--migration-target-token` | Yes | {% data reusables.elm.ghe-pat-description %} |
| DEBUG_HTTP | `--debug-http` | No | Set to `true` to print the HTTP method, URL, headers, and error response body for each request, for debugging purposes |
