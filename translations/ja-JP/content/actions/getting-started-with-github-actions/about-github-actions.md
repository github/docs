---
title: GitHub Actionsについて
intro: '{% data variables.product.prodname_actions %} では、カスタムソフトウェア開発のライフサイクル (SDLC) にわたるワークフローを {% data variables.product.prodname_dotcom %} リポジトリに直接作成することができます。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/migrating-github-actions-from-hcl-syntax-to-yaml-syntax/
  - /articles/about-github-actions
  - /github/automating-your-workflow-with-github-actions/about-github-actions
  - /actions/automating-your-workflow-with-github-actions/about-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### {% data variables.product.prodname_actions %}について

{% data reusables.repositories.about-github-actions %}ワークフローとは、{% data variables.product.prodname_dotcom %}で任意のコードプロジェクトをビルド、テスト、パッケージ、リリース、またはデプロイするためにリポジトリで設定できる、カスタムの自動プロセスです。

{% data reusables.repositories.actions-ci-cd %} {% data variables.product.prodname_actions %}は、{% data variables.product.prodname_dotcom %}に組み込まれている継続的インテグレーションサービスを駆動します。 詳細については、「[継続的インテグレーションについて](/articles/about-continuous-integration)」を参照してください。

ワークフローは、Linux、macOS、Windows、コンテナで、'ランナー'と呼ばれる{% data variables.product.prodname_dotcom %}がホストするマシン上で実行できます。 あるいは、自分が所有もしくは管理するマシン上でワークフローを実行するために、独自にランナーをホストすることもできます。 詳しい情報については「[セルフホストランナーについて](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)」を参照してください。

ワークフローの作成には、リポジトリで定義されているアクション、{% data variables.product.prodname_dotcom %}のパブリックリポジトリにあるオープンソースのアクション、または公開されているDockerコンテナイメージを使用できます。 フォークされたリポジトリのワークフローは、デフォルトでは動作しません。

ワークフローで使用するアクションを{% data variables.product.prodname_dotcom %}で見つけ、{% data variables.product.prodname_dotcom %}コミュニティと共有するアクションをビルドできます。 カスタムアクションの作成については、「[アクションを作成する](/actions/creating-actions)」を参照してください。

特定のイベントで実行するように設定したワークフローファイルを作成できます。 詳細については、「[ワークフローの設定](/articles/configuring-a-workflow)」と「{% data variables.product.prodname_actions %}[のワークフロー構文](/articles/workflow-syntax-for-github-actions)」を参照してください。

一般的な用語の定義については「[{% data variables.product.prodname_actions %}の中核的な概念](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)」を参照してください。

### {% data variables.product.prodname_dotcom %}コミュニティでアクションを見つける

{% data variables.product.prodname_marketplace %}は、{% data variables.product.prodname_dotcom %}コミュニティによって構築されたアクションを見つけ、共有し、利用するための中央となる場所です。 詳しい情報については「[ワークフロー中での{% data variables.product.prodname_marketplace %}からのアクションの利用](/actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow)」を参照してください。

{% data variables.product.prodname_dotcom %}上のパブリックリポジトリで共有されているオープンソースのアクションでプロジェクトをカスタマイズし、[actions](https://github.com/actions) Organization内で{% data variables.product.prodname_dotcom %}によって構築されたアクションを使うこともできます。

### リポジトリあるいはOrganizationでの{% data variables.product.prodname_actions %}の無効化もしくは制限

{% data reusables.github-actions.disabling-github-actions %}

詳しい情報については「[リポジトリでの{% data variables.product.prodname_actions %}の無効化もしくは制限](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)」あるいは「[Organizationでの{% data variables.product.prodname_actions %}の無効化もしくは制限](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)」を参照してください。

### ワークフロー実行の通知

{% data reusables.repositories.workflow-notifications %}

### 使用制限

{% data reusables.github-actions.github-actions-usage-limits %}

{% if currentVersion == "free-pro-team@latest" %}

### 利用のポリシー

使用制限に加えて、{% data variables.product.prodname_actions %}を[GitHubの利用規約](/articles/github-terms-of-service/)内で使っていることを確認しなければなりません。 {% data variables.product.prodname_actions %}の固有の規約に関する詳しい情報については、[GitHubの追加製品規約](/github/site-policy/github-additional-product-terms#a-actions-usage)を参照してください。

### {% data variables.product.prodname_actions %}の支払いについて

{% data reusables.github-actions.actions-billing %} 詳細は「[{% data variables.product.prodname_actions %} の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)」を参照してください。

### サポートへの連絡

{% data reusables.github-actions.contacting-support %}

{% endif %}

### 参考リンク

- "[ワークフロー実行の管理](/articles/managing-a-workflow-run)"
- [ワークフローをトリガーするイベント](/articles/events-that-trigger-workflows)
- "[{% data variables.product.prodname_dotcom %}ホストランナーの仮想環境](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)"
{% data reusables.github-actions.actions-billing %} 詳細は「[{% data variables.product.prodname_actions %} の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)」を参照してください。
