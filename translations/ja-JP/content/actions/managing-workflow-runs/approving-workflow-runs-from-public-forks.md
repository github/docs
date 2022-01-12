---
title: パブリックフォークで実行されるワークフローの実行を承認する
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
1. プルリクエストで提案された変更を調べて、プルリクエストブランチでワークフローを快適に実行できることを確認します。 ワークフローファイルに影響を与える `.github/workflows/` ディレクトリで提案された変更には特に注意する必要があります。
1. プルリクエストブランチでワークフローを実行することに慣れている場合は、{% octicon "comment-discussion" aria-label="The discussion icon" %} [**Conversation**] タブに戻り、[Workflow(s) awaiting approval] で [**Approve and run**] をクリックします。

   ![ワークフローを承認して実行する](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
