---
title: GitHub Marketplaceからのアクションの利用
intro: 'ワークフローで使うために、{% data variables.product.prodname_marketplace %}内のアクションをブラウズし、検索できます。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### {% data variables.product.prodname_marketplace %}内のアクションについて

{% data variables.product.prodname_marketplace %}は、{% data variables.product.prodname_dotcom %}コミュニティによって構築されたアクションを見つけるための中央となる場所です。  バッジが付いているアクションは、{% data variables.product.prodname_dotcom %}がアクションの作者をパートナー組織として検証したことを示します。

{% data reusables.actions.enterprise-marketplace-actions %}

新しいアクションは、{% data variables.product.prodname_dotcom %}上のワークフローエディタから、そして[{% data variables.product.prodname_marketplace %}ページ](https://github.com/marketplace/actions/)から発見できます。

ワークフローエディタから直接アクションを見れば、{% data variables.product.prodname_marketplace %}内のすべてのアクションに素早くアクセスできます。 {% data variables.product.prodname_marketplace %}アクションページは、カテゴリによるアクションのフィルタリングをもっと柔軟に行えます。

### ワークフローエディタでのアクションのブラウズ

リポジトリのワークフローエディタで、直接アクションを検索し、ブラウズできます。 サイドバーから特定のアクションを検索し、注目のアクションを見て、注目のカテゴリをブラウズできます。 また、アクションが{% data variables.product.prodname_dotcom %}コミュニティから受けたStarの数も見ることができます。

1. リポジトリで、編集したいワークフローファイルにアクセスします。
1. ファイルビューの右上隅の {% octicon "pencil" aria-label="The edit icon" %}をクリックしてワークフローエディタを開きます。 ![ワークフローファイルの編集ボタン](/assets/images/help/repository/actions-edit-workflow-file.png)
1. エディタの右側で{% data variables.product.prodname_marketplace %}サイドバーを使ってアクションをブラウズしてください。 ![マーケットプレイスのワークフローサイドバー](/assets/images/help/repository/actions-marketplace-sidebar.png)

### {% data variables.product.prodname_marketplace %}内のアクションのブラウズ

同じアクションは[{% data variables.product.prodname_marketplace %}アクションページ](https://github.com/marketplace/actions/)でも見つけられます。 {% data variables.product.prodname_marketplace %}ページでは、カテゴリや検証状況によって柔軟にアクションをフィルタリングできます。

### ワークフローエディタからのワークフローへのアクションの追加

アクションのリストのページには、アクションのバージョンと、そのアクションを利用するために必要なワークフローの構文が含まれています。

1. ワークフローで使いたいアクションにアクセスしてください。
1. "Installation（インストール）"の下で、{% octicon "clippy" aria-label="The edit icon" %}をクリックしてワークフローの構文をコピーしてください。 ![アクションのリストの表示](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. この構文をワークフロー中に新しいステップとして貼り付けてください。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)」を参照してください。
1. そのアクションに変数を提供する必要があるなら、変数をワークフロー中で設定してください。 アクションが要求する変数に関する詳しい情報については、{% data variables.product.prodname_marketplace %}のアクションの完全なリストを参照してください。

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}
