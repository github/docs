---
title: リポジトリのデプロイメントアクティビティを表示する
intro: リポジトリ全体のデプロイメントまたは特定のプルリクエストに関する情報を表示できます。
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% note %}

**メモ:** デプロイメントダッシュボードは現在ベータ版であり、変更される可能性があります。

{% endnote %}

リポジトリへの読み取りアクセス権を持つ人は、リポジトリのデプロイメントワークフローが、Deployments API または[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment) のアプリケーションを通して、{% data variables.product.product_name %} に統合されている場合、現在のすべてのデプロイメントの概要と過去のデプロイメントアクティビティのログを見ることができます。 詳しい情報については、「[デプロイメント](/rest/reference/repos#deployments)」を参照してください。

プルリクエストの [Conversation] タブにもデプロイメント情報が表示されます。

### デプロイメントダッシュボードを表示する

{% data reusables.repositories.navigate-to-repo %}
2. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}To the right of the list of files, click **Environments**. ![Environments on the right of the repository page](/assets/images/help/repository/environments.png){% else %}Above the list of files, click **Environments**. ![Environments on top of repository page](/assets/images/help/repository/environments-top.png){% endif %}


### 参考リンク
 - [プルリクエストについて](/articles/about-pull-requests)
