---
title: About stacked pull requests
shortTitle: About stacked PRs
intro: Break large code changes into a chain of smaller, dependent pull requests you can review and merge independently.
versions:
  feature: pr-stacks
contentType: get-started
category:
  - Create pull requests
---

{% data reusables.public-preview.public-preview %}

## About stacked pull requests

Stacked pull requests are two or more pull requests in the same repository, where:

* The first, or bottom, pull request targets the stack's trunk — usually your repository's default branch, such as `main`, though it can be any branch, such as a release branch.
* Each subsequent pull request targets the branch of the pull request below it.

```text
   ┌── feat/frontend     → PR #3 (base: feat/api-endpoints)  ← top
  ┌── feat/api-endpoints → PR #2 (base: feat/auth-layer)
 ┌── feat/auth-layer     → PR #1 (base: main)               ← bottom
main (default base branch)
```

Stacked branches form a dependency chain, where each branch builds on the one below it. Foundational changes such as shared types and database schema go in lower branches, and code that depends on them, such as API routes and UI components, go in higher branches.

Each pull request in a stack represents a discrete, reviewable change of one or more commits. You can review and iterate on each pull request independently, and each one shows only the diff for its layer and the changes between its branch and the branch below it.

**The key principle:** if code in one layer depends on code in another, the dependency must be in the same branch or a lower one. Create a new branch when you start a different concern that depends on what you've built so far. For example, when you switch from backend to frontend work, move from core logic to tests, or when the current branch is already large enough to review.

## Why use {% data variables.product.github %} stacked pull requests

### Finish one change and move straight onto the next

Stacked pull requests let you open a new pull request on top of one that is still open. During a large project, your next change may depend on work that hasn't merged yet. Instead of waiting for it to merge, with a stack, you can keep building.

With each pull request in a stack containing one focused change, reviewers see a small diff for each layer instead of the large pull request. Smaller pull requests are faster to review, less likely to be skimmed, and less likely to go stale and develop merge conflicts.

### Fit for high-volume development

When you generate a lot of code at once, often with AI agents, a stack gives each change a place to go. An agent completes one task, then starts the next task that builds on it. That sequence maps directly onto a stack: one pull request per task, each based on the one below. Stacks let you record those dependencies explicitly instead of combining unrelated changes into a single branch.

### Advantages of using stacked pull requests in {% data variables.product.github %}

Without stacked pull requests, breaking a large change into smaller, dependent pull requests creates extra work:

* **Branch management.** Rebasing and keeping branches in sync across dependent pull requests is tedious and error-prone.
* **Rules and CI.** Branch protection rules and CI checks often only trigger for the bottom pull request in the chain, making it hard to know the true status of the rest.
* **Review context.** Reviewing a single change out of context from the rest of the stack can reduce review quality.

Stacked pull requests address these problems by treating the chain of pull requests as a connected unit while keeping each layer small and focused.

#### Rebasing

Rebasing is the trickiest part of working with stacks, and {% data variables.product.github %} handles it automatically. You can trigger a server-side cascading rebase from the pull request, or run a local cascading rebase with the `gh stack` extension in {% data variables.product.prodname_cli %}. When you merge a pull request at the bottom of the stack, the remaining branches are automatically rebased so the next pull request targets the default base branch.

## Where can you use stacked pull requests

Stacked pull requests are available in the following: 
* {% data variables.product.prodname_cli %}
* {% data variables.product.github %} website
* {% data variables.product.prodname_mobile %}
* Programmatic support via Webhooks, REST API, and GraphQL
* For agents, via the `gh-stack` skill

> [!NOTE]
>
> * {% data reusables.pull_requests.pr-stack-cross-fork-unsupported %}
> * {% data reusables.pull_requests.pr-stack-desktop-unsupported %}

### In {% data variables.product.prodname_cli %}

The `gh stack` extension in {% data variables.product.prodname_cli %} handles the local development workflow. You can create and track branches in the correct dependency order, keep branches rebased, push branches, create and link pull requests, and navigate between layers. See [AUTOTITLE](/pull-requests/reference/stacked-prs-cli-commands).

### On the {% data variables.product.github %} website

When a pull request is part of a stack, you will see: 

* A stack icon {% octicon "stack" aria-label="The stack icon" %} at the top of the pull request with a number indicating which layer you're viewing. 
* A stack map appears in the merge box. It shows every pull request in the stack and its status, and lets you navigate to any layer with one click. The trunk (default base branch) is at the bottom, with each pull request in the stack targeting the branch of the pull request below it.

### Programmatic support via Webhooks, REST API, and GraphQL

Stacked pull requests are available programmatically, so you can integrate them into your own tools, automation, and dashboards:

* **Webhooks** include a `stack` object in `pull_request` event payloads, so your automation can respond when a pull request joins, moves within, or leaves a stack.
* **The REST API** reads a pull request's stack membership and provides endpoints to list, create, extend, and dissolve stacks.
* **The GraphQL API** exposes read-only `stack` fields on a pull request for querying the stack and the pull request's position in it.

## Rules, CI, and merging

### Rules and CI enforcement

Stacked pull requests support {% data variables.product.prodname_actions %} workflows.

The merge requirements for any pull request in the stack are determined by the bottom pull request's base branch, typically `main`.

* Branch protection rules, such as CODEOWNER approvals, are enforced on every pull request in the stack, even mid-stack pull requests that don't directly target your default branch.
* CI checks triggered by pull requests on your default branch run for all pull requests in the stack, not just the bottom one.

This ensures that every layer of the stack meets the same quality bar before it can merge.

### Merging

You can merge your entire stack, a single pull request, or a portion of the stack spanning multiple pull requests. The entire stack does not need to merge at once, but pull requests must merge from the bottom up.

* Merge the entire stack at once by merging the top pull request. Every pull request below it comes with it.
* Merge part of the stack by merging a mid-stack pull request. The pull requests below it merge too, and the pull requests above stay open and automatically re-target the stack's base branch.

Stacks support merge commit, squash, and rebase merge methods, and they are merge-queue aware. The resulting commit history is the same as merging each pull request individually, starting from the bottom.

> [!NOTE]
> If you merge via the API and want to use stacked pull requests, you'll need to update to use the new merge API for stacks. See [AUTOTITLE](/rest/pulls/pulls?apiVersion=2026-03-10#merge-a-pull-request-asynchronously).

## Next steps

* [AUTOTITLE](/pull-requests/get-started/stacked-prs-quickstart?utm_source=docs-pr-stacks-quickstart&utm_medium=docs&utm_campaign=stacked-prs-gtm-public-preview-2026)
* [AUTOTITLE](/pull-requests/tutorials/roll-out-stacked-prs?utm_source=docs-roll-out-pr-stacks&utm_medium=docs&utm_campaign=stacked-prs-gtm-public-preview-2026)
