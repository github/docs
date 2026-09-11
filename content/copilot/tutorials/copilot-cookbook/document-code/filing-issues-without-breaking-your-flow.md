---
title: Filing issues without breaking your flow
shortTitle: File issues without breaking flow
intro: When something catches your attention mid-task, use {% data variables.copilot.copilot_cli_short %} to file a GitHub issue with code context, linked PRs, and labels, then get back to what you were doing.
redirect_from:
  - /copilot/tutorials/copilot-chat-cookbook/document-code/creating-issues
  - /copilot/tutorials/copilot-chat-cookbook/document-code/filing-issues-without-breaking-your-flow
versions:
  feature: copilot
category:
  - Documenting code
  - Author and optimize with Copilot
surface:
  - CLI
octicon: issue-opened
contentType: tutorials
---

{% data variables.copilot.copilot_cli_short %} can open GitHub issues for you from the terminal. Instead of switching to a browser and filling out an issue by hand, you describe what you want and Copilot gathers context from your repository and GitHub, then creates the issue so you can keep working.

## Example scenario 1: Filing an issue from a CI failure

Your CI is failing or you've spotted errors in production logs. Rather than manually tracing the stack trace back to a commit, you ask {% data variables.copilot.copilot_cli_short %} to investigate and file the issue for you.

### Example prompt

```text copy
The CI workflow on main has been failing since yesterday. Look at the failing 
run, figure out what's breaking and which commit likely introduced it, then 
create an issue with the stack trace, a link to the failing run, and the 
suspected PR that caused it. Label it "bug" and "regression".
```

### Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.copilot.copilot_cli_short %} uses its GitHub MCP tools to:


1. **Fetch the failing workflow run** and extract the stack trace from the logs.
1. **Identify the responsible code** — for example, `src/services/payment.ts:94`.
1. **Search recent commits** touching that file and find the PR that introduced the change.
1. **Create an issue** with all the context assembled:

    ```text
    Created issue #421: Regression: PaymentService throws TypeError after #398

    What's failing:
    The `build` job on main has failed since commit `a3f7c21`. Stack trace:

    TypeError: Cannot read properties of undefined (reading 'amount') at processRefund (src/services/payment.ts:94:22)

    Introduced by: PR #398 (merged 2 days ago) refactored the payment types but missed updating `processRefund` to handle the new nullable `transaction` field.

    Failing run: Actions run #2847

    Suggested fix: Add a null check for `transaction` before accessing `transaction.amount` on line 94.

    Labels: `bug`, `regression`
    ```

## Example scenario 2: Turning TODOs into tracked work

Over time, TODO and FIXME comments accumulate in a codebase with no visibility. You can ask {% data variables.copilot.copilot_cli_short %} to scan for these comments, assess priority, and create issues so the work is tracked.

### Example prompt

```text copy
Scan this repo for TODO and FIXME comments. Group them by area, pick the 5 
most important ones based on the surrounding code context, and create an issue 
for each. Include the code snippet, file location, and suggest a label.
```

### Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.copilot.copilot_cli_short %} searches the codebase, reads the context around each comment, and prioritizes based on severity:

```text
Found 23 TODO/FIXME comments across the repo. Here are the 5 I'd prioritize:

Created issue #422: FIXME: SQL injection risk in search query builder
- src/db/search.ts:34 — user input concatenated directly into query string
- Label: security, priority:high

Created issue #423: TODO: Rate limiter bypassed for internal routes
- src/middleware/rate_limit.ts:12 — comment says "temporary bypass, remove before launch"
- Label: security, technical-debt

Created issue #424: FIXME: Memory leak in WebSocket handler
- src/ws/handler.ts:87 — listeners are added on each connection but never cleaned up
- Label: bug, performance

Created issue #425: TODO: Retry logic missing for payment webhook
- src/webhooks/payment.ts:56 — failures silently dropped, no retry queue
- Label: reliability, priority:medium

Created issue #426: TODO: Migrate to new auth token format
- src/auth/token.ts:3 — comment references a closing down API version
- Label: technical-debt
```

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli)
