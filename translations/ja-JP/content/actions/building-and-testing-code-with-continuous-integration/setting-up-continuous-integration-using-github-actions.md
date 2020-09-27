---
title: GitHub Actionsを使用して継続的インテグレーションを設定する
intro: 使用したい言語とツールに一致するワークフローテンプレートを使用して、プロジェクトに継続的インテグレーションを設定することができます。
product: '{{ site.data.reusables.gated-features.actions }}'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.variables.product.prodname_actions }} の支払いを管理する
{{ site.data.variables.product.prodname_dotcom }}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

リポジトリへの書き込み権限があるユーザなら誰でも {{ site.data.variables.product.prodname_actions }} を使用して継続的インテグレーション (CI) を設定することができます。

CIを設定すると、必要に応じてワークフローをカスタマイズすることができます。

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.actions-tab }}
3. 使用したい言語とツールに一致するテンプレートを探し、[**Set up this workflow**] をクリックします。 ![[Setup workflow] ボタン](/assets/images/help/repository/setup-workflow-button.png)
5. [**Start commit**] をクリックします。 ![[Start commit]ボタン](/assets/images/help/repository/start-commit.png)
{{ site.data.reusables.files.write_commit_message }}
{{ site.data.reusables.files.choose_commit_branch }}
{{ site.data.reusables.files.propose_new_file }}

リポジトリへのプッシュを実行すると、{{ site.data.variables.product.prodname_dotcom }}で実行された継続的インテグレーションワークフローのステータスと詳細ログを追跡し、カスタマイズした通知を受け取ることができます。 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)」及び「[ワークフローの実行の管理](/articles/managing-a-workflow-run)」を参照してください。

{{ site.data.reusables.repositories.actions-workflow-status-badge-into }}

詳細は「[ワークフローの設定](/articles/configuring-a-workflow)」を参照してください。

### 参考リンク

- [継続的インテグレーションについて](/articles/about-continuous-integration)
- "[ワークフロー実行の管理](/articles/managing-a-workflow-run)"
{% if currentVersion == "free-pro-team@latest" %}
- 「[{% data variables.product.prodname_actions %} の支払いを管理する](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)」
{% endif %}
