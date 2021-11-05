---
title: Approving workflow runs from public forks
intro: 'When an outside contributor submits a pull request to a public repository, a maintainer with write access may need to approve any workflow runs.'
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Approve public fork runs
---

## About workflow runs from public forks

{% data reusables.actions.workflow-run-approve-public-fork %}

You can configure workflow approval requirements for a [repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks), [organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks), or [enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise).

Workflow runs that have been awaiting approval for more than 30 days are automatically deleted.

## Approving workflow runs on a pull request from a public fork

Maintainers with write access to a repository can use the following procedure to review and run workflows on pull requests from contributors that require approval.

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
1. Inspect the proposed changes in the pull request and ensure that you are comfortable running your workflows on the pull request branch. You should be especially alert to any proposed changes in the `.github/workflows/` directory that affect workflow files.
1. If you are comfortable with running workflows on the pull request branch, return to the {% octicon "comment-discussion" aria-label="The discussion icon" %} **Conversation** tab, and under "Workflow(s) awaiting approval", click **Approve and run**.

   ![Approve and run workflows](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
