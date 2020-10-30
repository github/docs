---
title: GitHub Enterprise Server へのインポートの完了
intro: ターゲットインスタンスへの移行が適用され、その内容をレビューしたなら、リポジトリをアンロックし、ソースからそれらを削除します。 ソースデータを削除する前に、すべてが期待どおりに機能していることを確認するため2週間ほど待つことをおすすめします。
redirect_from:
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise/
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
versions:
  enterprise-server: '*'
---

### ターゲットインスタンス上でのリポジトリのアンロック

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}

### ソース上でのリポジトリのアンロック

#### {% data variables.product.prodname_dotcom_the_website %} Organization からリポジトリをアンロックする

{% data variables.product.prodname_dotcom_the_website %} Organization のリポジトリをアンロックするには、`DELETE` リクエストを<a href="/rest/reference/migrations#unlock-an-organization-repository" class="dotcom-only">移行アンロックエンドポイント</a>に送信します。 以下が必要です:
  * 認証のためのアクセストークン
  * 移行のユニーク`id`
  * アンロックするリポジトリの名前
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

#### {% data variables.product.prodname_dotcom_the_website %} Organization からリポジトリを削除する

After unlocking the {% data variables.product.prodname_dotcom_the_website %} organization's repositories, you should delete every repository you previously migrated using [the repository delete endpoint](/enterprise/{{ currentVersion }}/v3/repos/#delete-a-repository). 認証のためのアクセストークンが必要になります。
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

#### {% data variables.product.prodname_ghe_server %} インスタンスからリポジトリをアンロックする

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}
