---
title: Enterprise Live Migrations CLI reference
shortTitle: ELM CLI reference
intro: 'Detailed usage information for the {% data variables.product.prodname_elm_cli %} tool.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: reference
---

## Installation

```shell
gh extension install github/gh-elm
```

The extension requires {% data variables.product.prodname_cli %} (`gh`) version 2.0 or later.

## Setup commands

| Command               | Description                                                    |
|-----------------------|----------------------------------------------------------------|
| `gh elm config`       | Interactively configure the endpoints and tokens for ELM use   |
| `gh elm config reset` | Remove stored configuration and credentials                    |
| `gh elm config show`  | Show the current configuration, with tokens redacted           |
| `gh elm completion`   | Generate a shell autocompletion script for the specified shell |


## Migration commands

| Command | Description |
|---|---|
| `gh elm migration list` | List migrations |
| `gh elm migration create` | Create a new migration |
| `gh elm migration start MIGRATION-ID` | Start a previously created migration |
| `gh elm migration status MIGRATION-ID` | Get the status and details of a migration |
| `gh elm migration watch MIGRATION-ID` | Watch migration progress with a live-updating display |
| `gh elm migration pause MIGRATION-ID` | Pause a running migration |
| `gh elm migration resume MIGRATION-ID` | Resume a paused migration |
| `gh elm migration cancel MIGRATION-ID` | Cancel and terminate a migration |
| `gh elm migration target-id MIGRATION-ID` | Look up the target (destination) migration ID for a migration |
| `gh elm migration cutover MIGRATION-ID` | Initiate a cutover to the destination for a migration |
| `gh elm migration cutover status MIGRATION-ID` | Get the cutover status and progress for a migration |
| `gh elm migration cutover revert MIGRATION-ID` | Revert the effects of a cutover so the source repository can be migrated again |

Some of these commands can take additional options. See the later sections in this article.

## Target commands

| Command | Description |
| ------- | ----------- |
| `gh elm target mannequin reclaim` | Claim (reclaim) one or more mannequins on the target organization |
| `gh elm target mannequin list` | List a target organization's mannequins as CSV |
| `gh elm target report request` | Request a node report for a migration |
| `gh elm target report status` | Query the status of a migration's node report |
| `gh elm target report url` | Get a signed download URL for a finished report |
| `gh elm target resources` | List a migration's resources from the target |
  
## `gh elm migration create` options

Create a new migration to prepare for repository export and import.

| Flag                  | Required | Default    | Description                                                                                                       |
|-----------------------|----------|------------|-------------------------------------------------------------------------------------------------------------------|
| `--source-org`        | Yes      | N/A        | Slug of the source organization on {% data variables.product.prodname_ghe_server %}                               |
| `--source-repo`       | Yes      | N/A        | Name of the source repository                                                                                     |
| `--target-org`        | Yes      | N/A        | Slug of the destination organization on {% data variables.enterprise.data_residency_site %}                       |
| `--target-repo`       | Yes      | N/A        | Name of the destination repository                                                                                |
| `--target-visibility` | No       | `internal` | Visibility of the destination repository. Must be `private` or `internal`. Public repositories are not supported. |
| `--start`             | No       | `false`    | Automatically starts the migration after creating it                                                              |
| `--json`              | No       | `false`    | Output the API's raw JSON response instead of human-readable text                                                |

## `gh elm migration list` options

| Flag          | Required | Default | Description                                                                                                                           |
|---------------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------|
| `--status`    | No       | N/A     | Filters results by migration status. Valid values: `created`, `queued`, `in_progress`, `paused`, `completed`, `failed`, `terminated`. |
| `--page-size` | No       | N/A     | Number of results per page                                                                                                            |
| `--after`     | No       | N/A     | Cursor for pagination, from a previous response                                                                                       |
| `--json`      | No       | `false` | Output the API's raw JSON response instead of human-readable text                                                                    |

## `gh elm migration cutover` options

| Flag             | Required | Default | Description                                                                                                                                                                              |
|------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--migration-id` | Yes      | N/A     | The ID of a migration that is ready for cutover.                                                                                                                                         |
| `--force`        | No       | `false` | By default, the command checks whether the migration target reports readiness before proceeding. Use `--force` to bypass this check when you are certain the migration state is correct. |
| `--watch`        | No       | `false` | After triggering cutover, enter live watch mode                                                                                                                                         |

