---
title: Approving workflow runs from forks
intro: You can manually approve workflow runs that have been triggered by a contributor's pull request.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Approve runs from forks
redirect_from:
  - /actions/managing-workflow-runs/approving-workflow-runs-from-public-forks
  - /actions/managing-workflow-runs-and-deployments/managing-workflow-runs/approving-workflow-runs-from-public-forks
  - /actions/how-tos/managing-workflow-runs-and-deployments/managing-workflow-runs/approving-workflow-runs-from-private-forks
  - /actions/how-tos/managing-workflow-runs-and-deployments/managing-workflow-runs/approving-workflow-runs-from-public-forks
  - /actions/how-tos/managing-workflow-runs-and-deployments/managing-workflow-runs/approving-workflow-runs-from-forks
  - /actions/managing-workflow-runs/approving-workflow-runs-from-private-forks
  - /actions/managing-workflow-runs-and-deployments/managing-workflow-runs/approving-workflow-runs-from-private-forks
---

Workflow runs triggered by a contributor's pull request from a fork may require manual approval from a maintainer with write access. You can configure workflow approval requirements for a [repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks), [organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks), or [enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise).

Workflow runs that have been awaiting approval for more than 30 days are automatically deleted.

## Approving workflow runs on a pull request from a public fork

{% data reusables.actions.workflows.approve-workflow-runs %}
