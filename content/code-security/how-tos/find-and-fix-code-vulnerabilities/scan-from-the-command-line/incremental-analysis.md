---
title: Using incremental analysis with the CodeQL CLI
shortTitle: Incremental analysis
intro: 'Speed up {% data variables.product.prodname_codeql %} analysis for pull requests by using diff-informed analysis and overlay analysis with the {% data variables.product.prodname_codeql_cli %}.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
category:
  - Customize vulnerability detection with CodeQL
---

## About incremental analysis

When you use the {% data variables.product.prodname_codeql_cli %} in a CI system, you can enable two complementary features to speed up {% data variables.product.prodname_codeql %} analysis on pull requests:

* **Diff-informed analysis** restricts query results to alerts whose locations fall within the lines added or modified in the pull request diff. This makes analysis faster and more focused.
* **Overlay analysis** speeds up database creation and query evaluation by building on top of a pre-existing "base" database from the default branch, instead of creating a full database from scratch for every pull request.

These features are independent and can be used separately or together. When both are active, overlay analysis handles efficient database creation and query evaluation, while diff-informed analysis handles efficient result filtering.

## Diff-informed analysis

Diff-informed analysis is an optimization for pull request analysis. Instead of reporting all alerts found in the codebase, it restricts the results to only those alerts whose locations fall within lines that were added or modified in the pull request diff.

**Minimum {% data variables.product.prodname_codeql_cli %} bundle version:** 2.21.0

### How diff-informed analysis works

1. Compute the diff between the pull request base branch and head branch.
1. Determine the added or modified line ranges from the diff.
1. Package those line ranges as a {% data variables.product.prodname_codeql %} data extension that feeds into the `restrictAlertsTo` extensible predicate in the `codeql/util` standard library.
1. Pass the extension pack to `codeql database run-queries` so that queries can restrict their computation to alerts in changed lines.
1. Filter the SARIF output on the CI side to remove any remaining alerts outside the diff ranges.

> [!NOTE]
> CI-side SARIF filtering (step 5) is required because the `restrictAlertsTo` predicate permits, but does not require, queries to omit out-of-range alerts. Filtering ensures that the final set of reported alerts is stable and limited to the diff range, regardless of query-side behavior.

### Step 1: Determine the diff

You need the unified diff between the base commit and the head commit of the pull request. You can use `git diff`, your source control management system's API, or any other mechanism to obtain the diff.

```shell
git diff BASE_SHA...HEAD_SHA
```

> [!NOTE]
> If your diff source truncates or is incomplete for large pull requests (for example, an API that limits the number of changed files), you should disable diff-informed analysis and fall back to full analysis for that run.

### Step 2: Parse the diff into line ranges

From the unified diff, extract the added or modified line ranges in the head version of each file. For each file, you need an array of ranges with the following structure:

* `path`: Absolute file path (always use forward slashes)
* `startLine`: 1-based, inclusive start line
* `endLine`: 1-based, inclusive end line

To parse the diff:

1. Split each file's patch into lines.
1. For lines starting with `@@`, parse the hunk header `@@ -X,Y +Z,W @@` to find `Z` (the starting line number in the new file). Set `currentLine = Z`.
1. For lines starting with `+` (additions), record the start of a new range if one isn't in progress. Increment `currentLine`.
1. For lines starting with `-` (deletions), skip the line. Deletions don't affect new-file line numbers.
1. For context lines (starting with a space), close any in-progress range and increment `currentLine`.

**Special cases:**

* **Binary files or very large diffs** (no patch content available): Use the sentinel range `{path, startLine: 0, endLine: 0}` to indicate "entire file."
* **Renamed files with no content changes**: Return an empty array (no ranges).

### Step 3: Create a data extension pack

Create a temporary directory containing two files. This extension pack feeds into the `restrictAlertsTo` extensible predicate defined in the {% data variables.product.prodname_codeql %} standard library.

**`qlpack.yml`:**

```yaml
name: my-ci/pr-diff-range
version: 0.0.0
library: true
extensionTargets:
  codeql/util: '*'
dataExtensions:
  - pr-diff-range.yml
```

**`pr-diff-range.yml`:**

```yaml
extensions:
  - addsTo:
      pack: codeql/util
      extensible: restrictAlertsTo
      checkPresence: false
    data:
      - ["/absolute/path/to/file1.ts", 42, 45]
      - ["/absolute/path/to/file2.ts", 10, 12]
```

Each data row is `[filePath, lineStart, lineEnd]`. Line numbers are 1-based. The special case `lineStart = 0, lineEnd = 0` denotes a whole-file match.

> [!IMPORTANT]
> If the diff has zero added or modified lines (for example, only deletions), you must still provide a non-empty data extension with a sentinel entry `["", 0, 0]`. An empty `data` section would leave the `restrictAlertsTo` predicate inactive, which means all alerts would be produced—the opposite of the desired behavior.

### Step 4: Pass the extension pack to the {% data variables.product.prodname_codeql_cli %}

When running queries, add the following flags to `codeql database run-queries`:

```shell
codeql database run-queries \
  --additional-packs=PATH_TO_EXTENSION_PACK \
  --extension-packs=my-ci/pr-diff-range \
  PATH_TO_DATABASE \
  QUERIES
```

* `--additional-packs` tells {% data variables.product.prodname_codeql %} where to find the pack on disk.
* `--extension-packs` tells {% data variables.product.prodname_codeql %} to load the named extension pack.

### Step 5: Exclude diagnostic queries

When using diff-informed analysis, you should exclude queries tagged with `exclude-from-incremental`. These diagnostic queries do not produce alerts (for example, metrics or code coverage), so they provide no value in an incremental context but still consume resources.

You can add this to your code scanning configuration file:

```yaml
query-filters:
  - exclude:
      tags: exclude-from-incremental
```

Alternatively, create a query suite file (`.qls`) that excludes those queries:

```yaml
- description: Pull request queries for Java
- import: codeql-suites/java-code-scanning.qls
- exclude:
    tags contain: exclude-from-incremental
```

For more information about code scanning configuration files, see [AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#specifying-codeql-query-packs).

### Step 6: Filter the SARIF output

After {% data variables.product.prodname_codeql %} generates the SARIF file, you must filter the output on the CI side to remove results whose locations fall outside the diff ranges.

For each result in the SARIF, check whether any of its `locations` or `relatedLocations` have a `startLine` that falls within a diff range for that file. If none match, remove the result. The filtering logic checks: `range.startLine <= alert.startLine <= range.endLine`, with the special case that `range.startLine == range.endLine == 0` matches any alert in the file.

> [!NOTE]
> Make sure SARIF artifact locations are normalized to the same path format used in the diff ranges before comparing.

### Step 7: Tag the SARIF output (optional)

You can add the following flag to your existing `codeql database interpret-results` command to tag the SARIF output with metadata indicating that diff-informed analysis was used:

```shell
codeql database interpret-results \
  --sarif-run-property=incrementalMode=diff-informed \
  PATH_TO_DATABASE
```

### Summary of CLI flags for diff-informed analysis

| CLI command | Flag | Purpose |
|---|---|---|
| `codeql database init` | `--codescanning-config=FILE` | Code scanning configuration file (for query filter) |
| `codeql database run-queries` | `--additional-packs=DIR` | Location of the extension pack |
| `codeql database run-queries` | `--extension-packs=my-ci/pr-diff-range` | Name of the extension pack to load |
| `codeql database interpret-results` | `--sarif-run-property=incrementalMode=diff-informed` | Tag SARIF with diff-informed metadata |

## Overlay analysis

Overlay analysis speeds up {% data variables.product.prodname_codeql %} database creation and analysis for pull requests by building on top of a pre-existing "base" database. Instead of creating a full database from scratch for every pull request, it:

1. **On the default branch:** Builds an "overlay-base" database (a full database with cached intermediate results and extra metadata).
1. **On pull requests:** Downloads the cached overlay-base database, then creates a lightweight "overlay" database that only processes the changed files on top of the base.

This dramatically reduces both database creation time and query evaluation time for pull requests.

**Minimum {% data variables.product.prodname_codeql_cli %} bundle version:** 2.23.8 (with per-language minimums—see "[Minimum CLI bundle versions](#minimum-cli-bundle-versions)")

### Requirements

Before using overlay analysis, make sure the following requirements are met:

* The source root must be inside a Git repository.
* Git version 2.38.0 or later (for the `--format` option used by `git ls-files`).
* All files of interest must be tracked by Git (not in `.gitignore`).
* The Git index must accurately reflect the source tree being analyzed.
* Overlay analysis supports only `build-mode: none`. Traced builds are not supported. If a language is configured with traced builds, overlay analysis is not available for that language.

> [!NOTE]
> Go does not specifically support `build-mode: none`, but the Go extractor behaves sufficiently similarly that overlay analysis works with it.

### Overlay-base mode (default branch)

Run overlay-base mode on your default branch after each merge to create and cache a base database.

#### 1. Initialize the database with `--overlay-base`

```shell
codeql database init \
  --overlay-base \
  --db-cluster \
  PATH_TO_DATABASE \
  --source-root=PATH_TO_SOURCE \
  --language=LANGUAGE
```

The `--overlay-base` flag tells {% data variables.product.prodname_codeql %} to build a database that can serve as a base for future overlay analysis.

#### 2. Build and extract as normal

Run any build steps and extraction as you normally would for your project.

#### 3. Record file OIDs

After extraction completes, record the Git object IDs (OIDs) of all tracked files under the source root. This snapshot is used later to determine which files changed.

```shell
git ls-files --recurse-submodules --format='%(objectname)_%(path)'
```

Parse this output into a JSON map of `{ "relative/path": "git-oid" }` and store it alongside the database.

> [!NOTE]
> The output includes files in Git submodules. Overlay analysis requires accurate tracking of all file changes between the base and the overlay, including those within submodules.

#### 4. Run queries and preserve the cache

When running queries on an overlay-base database, do **not** pass `--expect-discarded-cache`. This flag tells {% data variables.product.prodname_codeql %} that cached intermediate results can be discarded, but for overlay-base databases you need to preserve them for reuse.

#### 5. Clean up and cache the database

After analysis, clean up the database using the `overlay` cleanup level:

```shell
codeql database cleanup PATH_TO_DATABASE --cache-cleanup=overlay
```

The `overlay` cleanup level preserves more cached data than the default `clear` level, because overlay databases need that cached data for efficient query evaluation.

Then store the database (including the OIDs file) in your caching system for later retrieval by pull request builds.

### Overlay mode (pull requests)

Run overlay mode on pull request builds to create a lightweight database on top of the cached base.

> [!IMPORTANT]
> If no compatible overlay-base database is available in the cache (for example, on the first run or after a {% data variables.product.prodname_codeql_cli %} version upgrade), do not pass `--overlay-changes`. Instead, run a normal full analysis. Cache keys should include at least the {% data variables.product.prodname_codeql_cli %} version and language set to avoid incompatible base databases.

#### 1. Download the cached overlay-base database

Retrieve the most recent overlay-base database from your cache. The database should include the OIDs file recorded during overlay-base mode.

#### 2. Compute changed files

Compare the OIDs recorded in the base database with the current Git state:

```shell
git ls-files --recurse-submodules --format='%(objectname)_%(path)'
```

Compare the two maps to find files that were added, removed, or modified (different OID). Write the result as a JSON file:

```json
{
  "changes": ["src/modified-file.ts", "src/new-file.ts", "src/deleted-file.ts"]
}
```

The file paths must be relative to the source root.

#### 3. Initialize the database with `--overlay-changes`

Run `codeql database init` against the restored overlay-base database directory. The `PATH_TO_DATABASE` must point to the restored cached overlay-base database, not a new empty directory—the command extends the existing base for the pull request analysis.

```shell
codeql database init \
  --overlay-changes=PATH_TO_OVERLAY_CHANGES_JSON \
  --db-cluster \
  PATH_TO_DATABASE \
  --source-root=PATH_TO_SOURCE \
  --language=LANGUAGE
```

> [!IMPORTANT]
> In overlay mode, do not pass `--overwrite` or `--force-overwrite`. You are building on top of the existing cached base database, not replacing it.

#### 4. Build, extract, and run queries as normal

Proceed with build, extraction, and query execution as normal. You can add the following flag to your existing `codeql database interpret-results` command to tag the SARIF output with overlay metadata:

```shell
codeql database interpret-results \
  --sarif-run-property=incrementalMode=overlay \
  PATH_TO_DATABASE
```

If both overlay and diff-informed analysis are active, use `incrementalMode=overlay,diff-informed`.

### Exclude diagnostic queries

Same as for diff-informed analysis, when using overlay mode you should exclude queries tagged `exclude-from-incremental`:

```yaml
query-filters:
  - exclude:
      tags: exclude-from-incremental
```

For more information, see "[Step 5: Exclude diagnostic queries](#step-5-exclude-diagnostic-queries)."

### Summary of CLI flags for overlay analysis

| CLI command | Flag | Mode | Purpose |
|---|---|---|---|
| `codeql database init` | `--codescanning-config=FILE` | overlay | Code scanning configuration file (for query filter) |
| `codeql database init` | `--overlay-base` | overlay-base | Build a base database for future overlay use |
| `codeql database init` | `--overlay-changes=FILE` | overlay | Build overlay database using only changed files |
| `codeql database init` | _(no `--overwrite`)_ | overlay | Don't overwrite the cached base database |
| `codeql database run-queries` | _(no `--expect-discarded-cache`)_ | overlay-base | Preserve cached intermediate results |
| `codeql database cleanup` | `--cache-cleanup=overlay` | overlay-base | Use overlay-specific cleanup level |
| `codeql database interpret-results` | `--sarif-run-property=incrementalMode=overlay` | overlay | Tag SARIF with overlay metadata |

### Minimum CLI bundle versions

The base minimum version for overlay analysis is 2.23.8. Some languages require higher minimum versions:

| Language | Minimum {% data variables.product.prodname_codeql_cli %} bundle version |
|---|---|
| C# | 2.24.1 |
| Go | 2.24.2 |
| Java | 2.23.8 |
| JavaScript | 2.23.9 |
| Python | 2.23.9 |
| Ruby | 2.23.9 |

> [!NOTE]
> These minimum versions may increase over time as overlay analysis evolves.

## Using both features together

Diff-informed analysis and overlay analysis are independent features that can be used separately or together. When both are active:

1. Overlay analysis handles efficient database creation (only extracting changed files) and efficient query evaluation (reusing cached intermediate results from the base database).
1. Diff-informed analysis handles efficient result filtering (only reporting alerts in changed lines).
1. Both sets of CLI flags are combined in your CI configuration.

### Decision matrix

| Scenario | Diff-informed | Overlay |
|---|---|---|
| Default branch push | No (not a PR) | overlay-base mode |
| PR analysis (first time, no cache) | Yes | No (run full analysis) |
| PR analysis (with cached base) | Yes | overlay mode |
| Non-PR, non-default branch | No | No |
