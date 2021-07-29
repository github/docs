---
title: Approving workflow runs from public forks
intro: 'When an outside contributor submits a pull request to a public repository, a maintainer with write access may need to approve any workflow runs.'
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
shortTitle: Approve public fork runs
---

## About workflow runs from public forks

{% data reusables.actions.workflow-run-approve-public-fork %} However, you can configure this behavior for a [repository](/github/administering-a-repository/managing-repository-settings/disabling-or-limiting-github-actions-for-a-repository#configuring-required-approval-for-workflows-from-public-forks), [organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks), or [enterprise](/github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account#configuring-required-approval-for-workflows-from-public-forks).

Workflow runs that have been awaiting approval for more than 30 days are automatically deleted.

## Approving workflow runs on a pull request from a public fork

Maintainers with write access to a repository can use the following procedure to review and run workflows on pull requests from contributors that require approval.

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
1. Inspect the proposed changes in the pull request and ensure that you are comfortable running your workflows on the pull request branch. You should be especially alert to any proposed changes in the `.github/workflows/` directory that affect workflow files.
1. If you are comfortable with running workflows on the pull request branch, return to the {% octicon "comment-discussion" aria-label="The discussion icon" %} **Conversation** tab, and under "Workflow(s) awaiting approval", click **Approve and run**.

   ![Approve and run workflows](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
