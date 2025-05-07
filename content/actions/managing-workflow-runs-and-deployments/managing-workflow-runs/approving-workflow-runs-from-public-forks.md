---
title: Approving workflow runs from public forks
intro: 'When an outside contributor submits a pull request to a public repository, a maintainer with write access may need to approve some workflow runs.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Approve public fork runs
redirect_from:
  - /actions/managing-workflow-runs/approving-workflow-runs-from-public-forks
---

## About workflow runs from public forks

{% data reusables.actions.workflow-run-approve-public-fork %}

You can configure workflow approval requirements for a [repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks), [organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks), or [enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise).

Workflow runs that have been awaiting approval for more than 30 days are automatically deleted.

## Approving workflow runs on a pull request from a public fork

{% data reusables.actions.workflows.approve-workflow-runs %}
