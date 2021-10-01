---
title: Using workflow templates
shortTitle: Using templates
intro: You can set up CI using a workflow template that matches the language and tooling you want to use.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Workflows
  - CI
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

リポジトリへの書き込み権限があるユーザなら誰でも {% data variables.product.prodname_actions %} を使用して継続的インテグレーション (CI) を設定することができます。

CIを設定すると、必要に応じてワークフローをカスタマイズすることができます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 使用したい言語とツールにマッチするテンプレートを探し、[**Set up this workflow**] をクリックします。 ![[Setup workflow] ボタン](/assets/images/help/repository/setup-workflow-button.png)
5. [**Start commit**] をクリックします。 ![[Start commit]ボタン](/assets/images/help/repository/start-commit.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

リポジトリへのプッシュを実行すると、{% data variables.product.prodname_dotcom %}で実行された継続的インテグレーションワークフローのステータスと詳細ログを追跡し、カスタマイズした通知を受け取ることができます。 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)」及び「[ワークフローの実行の管理](/articles/managing-a-workflow-run)」を参照してください。

{% data reusables.repositories.actions-workflow-status-badge-intro %}

For more information, see "[Adding a workflow status badge](/actions/managing-workflow-runs/adding-a-workflow-status-badge)."

## 参考リンク

- [継続的インテグレーションについて](/articles/about-continuous-integration)
- "[ワークフロー実行の管理](/articles/managing-a-workflow-run)"
- 「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」
{% ifversion fpt %}
- 「[{% data variables.product.prodname_actions %} の支払いを管理する](/billing/managing-billing-for-github-actions)」
{% endif %}
