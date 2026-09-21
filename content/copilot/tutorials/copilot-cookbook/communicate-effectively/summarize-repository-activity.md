---
title: Triage and summarize repository activity
shortTitle: Summarize repository activity
intro: Copilot can extract key information from repositories you follow to keep you up-to-date on recent activity.
versions:
  feature: copilot
surface:
  - CLI
octicon: copilot
category:
  - Communicate effectively
  - Author and optimize with Copilot
  - Scale institutional knowledge
contentType: tutorials
redirect_from:
  - /copilot/tutorials/copilot-chat-cookbook/communicate-effectively/extracting-information
  - /copilot/tutorials/copilot-chat-cookbook/communicate-effectively/summarize-repository-activity
---

{% data variables.copilot.copilot_cli %} can help you summarize all recent activity in a repository. {% data variables.copilot.copilot_cli_short %} will find information about issues, pull requests, commits, CI health, and security notifications, and you can ask it to summarize this information in a report for you.

## Example scenario

You are returning to a repository after a week away and need to catch up. You want a single report that covers recent activity and the current health of the project so you can prioritize your work.

## Example prompt

```text copy
Summarize activity in this repository over the past week. Highlight anything that looks blocked or urgent, and suggest what I should prioritize.
```

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

````text
Repository activity summary (past 7 days)

P1 — Urgent
- CI failing on `main`: the `build-and-test` workflow has been red since commit a1b2c3d ("Refactor auth middleware"). Three subsequent PRs are blocked from merging.
- Security alert: a high-severity Dependabot alert for `lodash` (CVE-2025-12345) is open and unassigned.

P2 — Needs attention soon
- PR #482 ("Add OAuth device flow support") has 2 approvals and passing checks, but has been waiting 4 days for a final sign-off from a code owner.
- Issue #475 ("Crash on startup with empty config file") was reopened after a regression; 5 new comments and a reproduction case were added yesterday.

P3 — Routine
- 4 new issues opened, mostly minor UI bugs and documentation requests. None are labeled `bug:critical`.
- 12 commits merged to `main` across 6 PRs, primarily dependency bumps and test cleanup.

Suggested next steps:
1. Investigate and fix the failing `build-and-test` workflow to unblock merges.
2. Triage the Dependabot alert and assign an owner.
3. Review PR #482 so it can ship.
````

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli)
