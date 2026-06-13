# Automated GHES release notes

This guide covers the automated pipeline for drafting, reviewing, and approving GHES release notes. The process has three steps:

1. **Generate** release notes from `github/releases` issues
2. **Notify** PMs to review their notes
3. **Check** approval status before merging

## Prerequisites

* `gh` CLI installed and authenticated (with access to `github/releases` and `github/blog`)
* [Copilot CLI](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line) installed (for the generate step)
* Node.js and this repo cloned locally

## Quick start

```bash
# 1. Generate release notes for GHES 3.21 (GA)
npm run generate-release-notes -- --release 3.21

# 2. After you open a PR with the generated file, notify PMs to review (add --dry-run to test)
npm run notify-release-pms -- --release 3.21 --pr 12345

# 3. Later, check who has approved
npm run check-release-approvals -- --release 3.21
```

---

## Step 1: Generate release notes

Fetches open issues from `github/releases`, finds matching changelog PRs in `github/blog`, and uses a Copilot agent (based on this [Copilot Space](https://github.com/copilot/spaces/github/133)) to draft a release note for each issue. Output is written to `data/release-notes/enterprise-server/`.

```bash
npm run generate-release-notes -- --release <version> [options]
```

### Options

| Flag | Required | Description |
|------|----------|-------------|
| `--release <version>` | Yes | GHES version number, e.g. `3.21` |
| `--rc` | No | Generate release candidate notes (omit for GA) |
| `--issue <number or URL>` | No | Process a single issue instead of all open issues |
| `--force` | No | Regenerate YML file from scratch, ignoring any existing file (default updates the file in place) |
| `--stdout` | No | Print output to the terminal instead of writing to a file |

### How it works

* The script is **incremental by default**. If a release notes file already exists, it loads those entries and only processes new issues. Use `--force` to start fresh.
* If you run `--issue 6768`, it replaces just that issue's entry in the existing file.
* The file is updated after each issue, so if you cancel with Ctrl+C, you won't lose changes.
* The Copilot agent follows the style rules defined in `.github/agents/ghes-release-notes.md`: present tense, `[AUTOTITLE]` links, proper Liquid variable usage, etc.

### Examples

```bash
# Generate RC notes for 3.21
npm run generate-release-notes -- --release 3.21 --rc

# Re-run a single issue and preview without writing a file
npm run generate-release-notes -- --release 3.21 --issue 6768 --stdout

# Regenerate everything from scratch
npm run generate-release-notes -- --release 3.21 --force
```

---

## Step 2: Notify PMs

After you open a pull request with the generated notes, this script posts a review comment on each source issue in `github/releases`. The comment asks the PM to review their note in the docs PR and react with 🚀 when they approve.

Comments are always posted by the `docs-bot` account.

### Running via GitHub Actions (recommended)

The easiest way to run this is via the **Notify release PMs** workflow, which handles authentication automatically:

```bash
# From the CLI
gh workflow run notify-release-pms.yml -f release=3.21 -f pr=12345

# With options
gh workflow run notify-release-pms.yml -f release=3.21 -f pr=12345 -f release_type=rc -f review_date=2026-04-25
```

You can also trigger it from the [Actions tab](https://github.com/github/docs-internal/actions/workflows/notify-release-pms.yml).

### Previewing locally (dry run)

You can preview comments locally without any token:

```bash
npm run notify-release-pms -- --release 3.21 --pr 12345 --dry-run
```

### Options

| Flag | Required | Description |
|------|----------|-------------|
| `--release <version>` | Yes | GHES version number, e.g. `3.21` |
| `--pr <number>` | Yes | The docs PR number containing the release notes |
| `--rc` | No | Treat as a release candidate (auto-detected if omitted) |
| `--ga` | No | Treat as a GA release (only needed if both RC and GA files exist and you want to target GA instead of the default) |
| `--dry-run` | No | Print comments to the terminal instead of posting them |
| `--review-date <date>` | No | Override the review deadline (YYYY-MM-DD). Defaults to the next weekday 10 days from now. |

### How it works

* Auto-detects RC vs GA from whichever release notes file exists. If both exist, defaults to GA; use `--rc` to override.
* Skips issues that have already been notified (safe to re-run).
* Each comment includes a direct link to the relevant section of the docs PR.

### Examples

```bash
# Notify PMs for a GA release
npm run notify-release-pms -- --release 3.21 --pr 12345

# Preview what would be posted without actually commenting
npm run notify-release-pms -- --release 3.21 --pr 12345 --dry-run

# Preview before opening a PR (use any number as a placeholder)
npm run notify-release-pms -- --release 3.21 --pr 0 --dry-run

# Set a specific review deadline (overrides the 10-days-in-the-future default)
npm run notify-release-pms -- --release 3.21 --pr 12345 --review-date 2026-04-25
```

---

## Step 3: Check approvals

Checks which PMs have approved their release notes by looking for 🚀 reactions on the notification comments.

```bash
npm run check-release-approvals -- --release <version> [options]
```

### Options

| Flag | Required | Description |
|------|----------|-------------|
| `--release <version>` | Yes | GHES version number, e.g. `3.21` |
| `--rc` | No | Check the release candidate file (auto-detected if omitted) |
| `--ga` | No | Check the GA release file (only needed if both RC and GA files exist and you want to target GA instead of the default) |
| `--json` | No | Output results as JSON |

### Status indicators

| Icon | Meaning |
|------|---------|
| 🚀 | Approved |
| ⏳ | Pending; waiting for PM review |
| 💬 | Has replies; PM may have left feedback |
| ⚪ | Not notified yet |

The script exits with code **0** if all issues are approved, or **1** if any are still pending.

### Examples

```bash
# Check approval status
npm run check-release-approvals -- --release 3.21

# Get machine-readable output
npm run check-release-approvals -- --release 3.21 --json
```

---

## Typical workflow

1. **Generate notes:** `npm run generate-release-notes -- --release 3.21 --rc`
2. **Review the output** in `data/release-notes/enterprise-server/3-21/0-rc1.yml`—clean up any TODO placeholders or unknown headings.
3. **Open a draft PR** with the generated file.
4. **Notify PMs:** `gh workflow run notify-release-pms.yml -f release=3.21 -f pr=<PR_NUMBER> -f release_type=rc`
5. **Wait for approvals.** PMs react with 🚀 on their release issues.
6. **Check status:** `npm run check-release-approvals -- --release 3.21 --rc`
7. Once all approved, finalize the PR.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Copilot CLI not found" | Install via `npm install -g @github/copilot@prerelease` or ensure VS Code Copilot Chat extension is installed |
| Agent returns empty notes | The issue may not have enough context. Try adding a changelog PR link to the issue body and re-running with `--issue` |
| "All issues already have notes" | The file already covers every open issue. Use `--force` to regenerate, or `--issue <N>` to update one |
| PM didn't get a notification | Re-run `notify-release-pms`—it's safe to run multiple times and won't double-post |

## Related files

* `.github/agents/ghes-release-notes.md` — Copilot agent instructions (style rules, output format)
* `data/release-notes/PLACEHOLDER-TEMPLATE.yml` — Source of truth for feature headings
* `data/release-notes/enterprise-server/` — Generated release notes files
