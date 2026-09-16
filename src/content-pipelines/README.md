# Content pipelines

The content pipelines framework is an agent-powered approach to keeping **reference documentation** in sync with source docs that live in external repositories. On a schedule, a workflow clones each external repo, detects whether the source docs have changed, and if they have, runs an AI agent to update our official content articles.

## How content pipelines differ from standard automated pipelines

| | Standard pipelines | Content pipelines |
|---|---|---|
| **Input format** | Structured data (JSON/YAML) | Unstructured content (Markdown) |
| **Initial work** | Create a workflow, schema, and custom layout | Update a config file |
| **Human review** | Not required; schema validates data | Required; AI can make mistakes |
| **Examples** | REST, GraphQL, Webhooks, Audit Logs | Copilot CLI reference |

Standard automated pipelines live in `src/automated-pipelines/`. Content pipelines lives here in `src/content-pipelines/`.

## How it works

Each content pipeline entry runs in a **single workflow job**. The core logic lives in a TypeScript script (`src/content-pipelines/scripts/update.ts`) that can also be run locally. The steps in the script are:

1. **Clone**: The script clones the external source repo into a temporary directory (`/tmp/`).
2. **Detect**: It compares the external repo's HEAD commit against a stored SHA in `src/content-pipelines/state/<id>.sha`. If nothing changed, the script exits early.
3. **Diff**: If changes are detected, a diff file is generated summarizing what changed.
4. **Update**: The script invokes the Copilot agent, which reads the diff and full source docs from the ephemeral clone, performs a gap analysis against our content articles, and updates them.
5. **PR**: The workflow (CI only) commits the content changes and the updated SHA, then opens a draft PR for human review.

Source docs are **never stored in this repository**. The only state tracked per entry is a single SHA file recording the last-processed commit.

## Modifying results

You can request changes on the automated PR as you would any other PR. If you see content you'd like to change or avoid in future runs, you can try any of three strategies:

1. **For content you want to exclude from future updates:** Add the source heading to the `exclusions` property in [`config.yml`](/src/content-pipelines/config.yml). (The top of the config file has a couple of examples.)

2. **For content that ended up in the wrong article:** Update the `content-mapping` property in [`config.yml`](/src/content-pipelines/config.yml).

3. **If the agent did something else unexpected:** Check whether an update to the [agent instructions](/.github/agents/content-pipeline-update.md) would make sense. (You can always ask Copilot for advice.)

## Running locally

The config file (defined in `src/content-pipelines/config.yml`) contains the important information, so you only need to pass an `--id` to the script:

```bash
# Dry run — run the agent and update content locally, but don't save the SHA
npx tsx src/content-pipelines/scripts/update.ts --id copilot-cli --dry-run

# Full run — save the SHA (affects the next run)
npx tsx src/content-pipelines/scripts/update.ts --id copilot-cli

# Force a full scan (ignore stored SHA)
npx tsx src/content-pipelines/scripts/update.ts --id copilot-cli --full-scan
```

Run `npx tsx src/content-pipelines/scripts/update.ts --help` for all options.

## Adding a new entry

1. Add an entry to `src/content-pipelines/config.yml` with the expected fields.
2. Add the ID to the matrix list in `.github/workflows/content-pipelines.yml`.

That's it!

All entries share the generic `content-pipeline-update` agent in `.github/agents/content-pipeline-update.md`. Entry-specific context (source docs directory, diff, target articles, exclusions) is passed to the agent via the `-p` prompt at invocation time.