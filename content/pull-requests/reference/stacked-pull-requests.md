---
title: Stacked pull requests
shortTitle: Stacked pull requests
intro: Rules and requirements for how stacked pull requests function on {% data variables.product.github %}.
versions:
  feature: pr-stacks
contentType: reference
category:
  - Create pull requests
---

{% data reusables.public-preview.public-preview %}

{% data reusables.pull_requests.pr-stack-definition %}

Every pull request in a stack is evaluated against rules for the **base of the stack** — typically `main` — regardless of which branch it directly targets. This means mid-stack pull requests are held to the same standard as the bottom pull request.

> [!NOTE]
> * {% data reusables.pull_requests.pr-stack-cross-fork-unsupported %}
> * {% data reusables.pull_requests.pr-stack-desktop-unsupported %}

## Stacked pull requests availability

The `gh stack` {% data variables.product.prodname_cli %} extension handles the local development workflow. It creates and tracks branches in the correct dependency order, keeps branches rebased, pushes branches, creates and links pull requests, and navigates between layers. 

{% data variables.product.prodname_cli %} is not required. The underlying Git operations are standard, and you can create stacks from the {% data variables.product.github %} website instead. 

If you use other tools, such as Jujutsu or Sapling, to manage and push your local branches, you can still use {% data variables.product.prodname_cli %} or the {% data variables.product.github %} website to open a stack of pull requests from those branches. See [AUTOTITLE](/pull-requests/reference/use-other-tools-with-stacked-pull-requests).

## Trunks for stacked pull requests

A stack's **trunk** is the base branch of the bottom pull request. Every other pull request in the stack is built on top of it. The trunk defaults to your repository's default branch, such as `main`, but it can be any branch, such as a release branch or a long-lived feature branch.

To set the trunk:

* **From {% data variables.product.prodname_cli %}** pass the `--base BRANCH` option to the `gh stack init` command, (for example, `gh stack init --base release auth-layer`).
* **From the {% data variables.product.github %} website** create the bottom pull request against whatever branch you want as the trunk. The rest of the stack builds on top of it.

Branch protection rules, required checks, and CI are all evaluated against whatever trunk the stack targets, not just against your default branch.

## Branch protections and required checks

The following are all evaluated as if each pull request targets the stack base, not the branch directly below it:

| Rule | How it is evaluated |
| --- | --- |
| Required reviews | Evaluated against the stack base. |
| Required status checks | Evaluated against the stack base. |
| CODEOWNERS | Evaluated from the stack base. Changes to `CODEOWNERS` in a lower pull request, but does not affect pull requests above it. |
| Code scanning workflows | Evaluated against the stack base. |

## {% data variables.product.prodname_actions %}

{% data variables.product.github %} Actions workflows trigger as if each pull request in the stack targets the base of the stack. A workflow configured to run on `pull_request` events targeting `main` runs for **every** pull request in the stack, not just the bottom one, so no workflow changes are required.

Stack metadata, such as the stack's base branch, is available in workflow expressions via `github.event.pull_request.stack`. This property is present only when the pull request belongs to a stack.

For the full set of metadata fields and patterns to reduce redundant CI usage, see [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/optimizing-ci-for-stacked-pull-requests).

## Merge requirements

Before a pull request in a stack can merge, all of the following must be true:

* The pull request meets every branch protection requirement for the stack base, including required reviews, required status checks, and CODEOWNER approvals.
* **All pull requests below it** in the stack also meet those requirements.
* The stack has a **fully linear history** between its branches.

For example, in the stack `main ← PR1 ← PR2 ← PR3`, merging PR #3 requires PR #1 and PR #2 to also pass checks, have required reviews, and satisfy all branch protection rules.

## Merge methods

Stacks support all three merge methods. In each case, the pull requests land as a single atomic operation:

* **Merge commit** creates one merge commit for the entire group of pull requests being merged, preserving each pull request's full commit history.
* **Squash** creates one clean, squashed commit per pull request. Merging `n` pull requests creates `n` squashed commits on the base branch.
* **Rebase** replays the commits from each pull request onto the base branch, creating a linear history without merge commits.

## Merging through a merge queue

Stacks fully support merge queues. All pull requests in the stack are added to the queue in the correct order. If a pull request is removed or ejected from the queue, all pull requests above it in the stack are also removed. 

> [!NOTE]
> To keep a stack together, the merge queue allows the merge group to exceed its configured maximum size by up to 50 percent. If the stack is too large to fit within that buffer, it will automatically be split across consecutive merge groups.

## Linear history

A fully linear history between every branch in the stack is a strict requirement for merging. A stack can lose its linear history when changes are pushed to a lower branch or when the trunk moves ahead.

To restore a linear history, run a cascading rebase:

* **From the CLI** — run `gh stack rebase`, then push with `gh stack push`.
* **From the {% data variables.product.github %} website** — click **Rebase stack** in the merge box to trigger a server-side cascading rebase.

For instructions, see [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/managing-stacked-pull-requests#rebasing-your-stack).

## Further reading

* [AUTOTITLE](/pull-requests/tutorials/roll-out-stacked-prs)
