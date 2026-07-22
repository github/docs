---
title: Deploying code
shortTitle: Deploy code
intro: 'Validate pre-deployment checks, choose merge strategies, and manage branches effectively when deploying code.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: concepts
---

The final step for a pull request is to get finished work into the deployment branch. This usually means merging your changes into the release or main branch. Before that happens, you will need to confirm that the change meets the project's requirements.

## Validating pre-deployment checks

Before you merge, you will confirm that the change is safe to deploy. **Status checks** show whether commits meet the conditions set for the repository, such as continuous integration builds, tests, code scanning, or deployment checks. They help you and reviewers understand whether a pull request is ready to merge. 

Repositories often require certain conditions before a pull request can merge, including:

* Required status checks that must pass, such as application health and readiness checks run by your deployment pipeline.
* Required reviews or code owner approvals.
* Merge conflicts must be resolved.

Protected branches enforce these requirements so deployment branches stay stable. 

Not all checks are the same. Rich checks created by products like {% data variables.product.prodname_actions %} can report detailed logs and annotations, while simpler commit statuses can be posted by a variety of connected systems. Understanding these helps you interpret why a pull request is or isn't ready. 

## Merging code into the release or main branch

When the requirements are met, you merge the pull request to bring its commits into the base branch. You can also automate merging so a pull request merges as soon as its requirements are met. Pull requests offer different merge strategies depending on how you want the repository history to look:

* **Merge commit** preserves every commit from the pull request branch and adds an explicit merge point.
* **Squash and merge** combines all commits into a single commit for a concise history.
* **Rebase and merge** adds each commit onto the base branch for a linear history without a merge commit.

The best strategy depends on how much detail your team wants to preserve.

## Enforcing requirements at scale

As merging gets busier, teams add controls to keep merges safe and predictable:

* **Rulesets and branch protections** can require an up-to-date branch, signed commits, linear history, or specific status checks before merging. 
* A **merge queue** lets a high-traffic protected branch accept many pull requests without breaking. It tests each one against the latest version of the base branch and merges them in order once checks pass. When a branch uses a merge queue, the available merge options differ from a standard merge. 

> [!NOTE]
> {% data reusables.gated-features.merge-queue %}

## Connecting merges to deployment

Merging is often the trigger that ships code. {% data variables.product.prodname_actions %} can run deployment workflows when a pull request merges into a release or main branch. **Deployment environments** add another layer of pre-deployment safety: you can require specific reviewers, wait timers, or branch restrictions before a deployment proceeds, and these are surfaced alongside your other checks. 

## Recovering after a merge

Even with checks in place, some merges need to be undone. You can revert a merged pull request to create a new pull request that reverses the changes. Be aware, a pull request can be marked as merged *indirectly* on rare occasions, if its commits reach the base branch through another path. This can bypass the protections on that specific pull request. See [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/reverting-a-pull-request) and [AUTOTITLE](/pull-requests/reference/pull-request-merges#indirect-merges).

## Closing pull requests that won't be merged

Not every pull request should merge. If a change is no longer needed or is superseded by other work, you can close the pull request without merging it. Closing keeps the discussion and history for reference while signaling that the change will not move forward.

After a pull request is merged or closed, its head branch is often no longer needed. Deleting unused branches keeps the repository easier to navigate.

## Further reading

* [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request)
* [AUTOTITLE](/pull-requests/reference/status-checks)
* [AUTOTITLE](/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments)
