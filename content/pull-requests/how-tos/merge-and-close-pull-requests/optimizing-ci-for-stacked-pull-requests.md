---
title: Optimizing CI for stacked pull requests
shortTitle: CI for stacked PRs
intro: 'Understand how {% data variables.product.prodname_actions %} workflows run for a stack, access stack metadata in your workflows, and reduce redundant CI usage.'
versions:
  feature: pr-stacks
contentType: how-tos
category:
  - Merge and close pull requests
---

{% data reusables.public-preview.public-preview %}

Every pull request in a stack is evaluated as if it targets the base of the stack, such as `main`. This keeps quality consistent across every layer, but it also means a workflow can run many times for a single stack. This article explains how workflows run for a stack and how to reduce redundant CI usage.

## How workflows run for a stack

{% data variables.product.github %} Actions workflows trigger as if each pull request in the stack targets the base of the stack. A workflow configured to run on `pull_request` events targeting `main` runs for **every** pull request in the stack, not just the bottom one, so no workflow changes are required for your checks to run across the whole stack.

Because a workflow runs once per pull request, a large stack multiplies your CI usage. However, you can use stack metadata to run expensive jobs only where they are needed.

## Accessing stack metadata

Stack metadata is available in workflow expressions via `github.event.pull_request.stack`. This property is present only when the pull request belongs to a stack, so ensure your workflows filter for it before reading any of its fields.

| Expression | Description |
| --- | --- |
| `github.event.pull_request.stack.number` | The stack's number, scoped to the repository. |
| `github.event.pull_request.stack.size` | Total number of pull requests in the stack. |
| `github.event.pull_request.stack.position` | 1-based position of this pull request within the stack (`1` is the bottom). |
| `github.event.pull_request.stack.base.ref` | The branch the entire stack ultimately targets, such as `main`. |
| `github.event.pull_request.stack.base.sha` | The HEAD SHA of the stack's base branch. |

For example, the following workflow reads stack metadata and runs the second step only when the stack targets a branch whose name starts with `release/`.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Show stack info
        if: github.event.pull_request.stack != null
        run: |
          {% raw %}echo "Stack base ref: ${{ github.event.pull_request.stack.base.ref }}"
          echo "PR ${{ github.event.pull_request.stack.position }} of ${{ github.event.pull_request.stack.size }} in the stack"{% endraw %}

      - name: Run only when the stack targets a release branch
        if: github.event.pull_request.stack != null && startsWith(github.event.pull_request.stack.base.ref, 'release/')
        run: echo "This stack targets a release branch"
```

## Reducing CI usage

Because a workflow runs for every pull request in a stack, you can use the `stack` fields to run expensive jobs only at the positions that matter. Two conditions are especially useful:

* **Lowest unmerged pull request** — the pull request currently at the bottom of the remaining stack. Because it targets the stack base directly, `github.event.pull_request.stack.base.ref` equals `github.event.pull_request.base.ref`.
* **Top pull request** — the last pull request in the stack, containing the full set of changes. It is the pull request where `github.event.pull_request.stack.position` equals `github.event.pull_request.stack.size`.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Run for the lowest unmerged pull request in the stack
        if: github.event.pull_request.stack != null && github.event.pull_request.stack.base.ref == github.event.pull_request.base.ref
        run: echo "Lowest unmerged pull request in the stack"

      - name: Run for the top pull request in the stack
        if: github.event.pull_request.stack != null && github.event.pull_request.stack.position == github.event.pull_request.stack.size
        run: echo "Top pull request in the stack"
```

As pull requests merge from the bottom up, the lowest unmerged pull request changes. Once the bottom pull request lands, the next pull request is rebased to target the stack base directly, so it becomes the new lowest unmerged pull request on the following workflow run.

You can also gate on the original bottom pull request with `github.event.pull_request.stack.position == 1`, or on any specific layer using `position`.
