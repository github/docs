---
title: GitHub.comからの移行データのエクスポート
intro: 'You can export migration data from an organization on {% data variables.product.prodname_dotcom_the_website %} by using the API to select repositories to migrate, then generating a migration archive that you can import into a {% data variables.product.prodname_ghe_server %} instance.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-com
  - /enterprise/admin/migrations/exporting-migration-data-from-githubcom
  - /enterprise/admin/migrations/preparing-the-githubcom-source-organization
  - /enterprise/admin/migrations/exporting-the-githubcom-organizations-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-com-source-organization
  - /enterprise/admin/guides/migrations/exporting-the-github-com-organization-s-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-githubcom
versions:
  enterprise-server: '*'
---

### Preparing the source organization on {% data variables.product.prodname_dotcom %}

1. ソースOrganizationのリポジトリに[オーナー権限](/articles/permission-levels-for-an-organization/)を持っていることを確認してください。

2. {% data variables.product.prodname_dotcom_the_website %}上の {% data reusables.enterprise_migrations.token-generation %}。

{% data reusables.enterprise_migrations.make-a-list %}

### Exporting the organization's repositories

{% data reusables.enterprise_migrations.fork-persistence %}

{% data variables.product.prodname_dotcom_the_website %} からリポジトリデータをエクスポートするには、<a href="/rest/reference/migrations" class="dotcom-only">移行 API</a> を使います。

移行APIは現在プレビュー期間です。すなわち、エンドポイントとパラメータは将来変更されることがあります。 移行APIにアクセスするには、カスタムの[メディアタイプ](/v3/media)として`application/vnd.github.wyandotte-preview+json`を`Accept`ヘッダで渡さなければなりません。 以下の例にはカスタムのメディアタイプが含まれています。

### 移行アーカイブの生成

{% data reusables.enterprise_migrations.locking-repositories %}

1. 移行を行うOrganizationのメンバーに通知します。 エクスポートには、対象のリポジトリ数に応じて数分がかかることがあります。 インポートを含む完全な移行には何時間もかかる可能性があるため、完全な処理にかかる時間を判断するためにまず試行することをおすすめします。 詳細は「[移行について](/enterprise/admin/migrations/about-migrations#types-of-migrations)」を参照してください。

2. <a href="/rest/reference/migrations#start-an-organization-migration" class="dotcom-only">移行エンドポイント</a>に `POST` することで移行を開始します。 以下が必要です:
    * 認証のためのアクセストークン。
    * 移行する[リポジトリのリスト](/v3/repos/#list-organization-repositories)。
      ```shell
      curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X POST \
      -H "Accept: application/vnd.github.wyandotte-preview+json" \
      -d'{"lock_repositories":true,"repositories":["<em>orgname</em>/<em>reponame</em>", "<em>orgname</em>/<em>reponame</em>"]}' \
      https://api.github.com/orgs/<em>orgname</em>/migrations
      ```
    *  移行する前にリポジトリをロックするには、`lock_repositories` が `true` になっていることを確認してください。 これについては強くおすすめします。
    * `exclude_attachments: true` をエンドポイントに渡すと、添付ファイルを除外できます。 {% data reusables.enterprise_migrations.exclude-file-attachments %} 最終的なアーカイブのサイズは 20 GB 未満でなければなりません。

  このリクエストは移行を表す一意の `id` を返します。 これは次の移行 API の呼び出しに必要となります。

3. `GET` リクエストを<a href="/rest/reference/migrations#get-an-organization-migration-status" class="dotcom-only">移行ステータスエンドポイント</a>に送って移行のステータスをフェッチします。 以下が必要です:
    * 認証のためのアクセストークン。
    * 移行の一意の `id`。
      ```shell
      curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github.wyandotte-preview+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>
      ```

  移行のステータスは以下のいずれかになります:
    * `pending`。移行がまだ始まっていないことを示します。
    * `exporting`。移行が進行中であることを示します。
    * `exported`。移行が正常に終了したことを示します。
    * `failed`。移行に失敗したことを示します。

4. 移行がエクスポートされたら、`GET` リクエストを<a href="/rest/reference/migrations#download-an-organization-migration-archive" class="dotcom-only">移行ダウンロードエンドポイント</a>に送って移行アーカイブをダウンロードします。 以下が必要です:
    * 認証のためのアクセストークン。
    * 移行の一意の `id`。
      ```shell
      curl -H "Accept: application/vnd.github.wyandotte-preview+json" \
      -u <em>GITHUB_USERNAME</em>:<em>GITHUB_ACCESS_TOKEN</em> \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```

5. 移行アーカイブは 7 日間経過すると自動的に削除されます。 もっと早く削除したい場合は、`DELETE` リクエストを<a href="/rest/reference/migrations#delete-an-organization-migration-archive" class="dotcom-only">移行アーカイブ削除エンドポイント</a>に送ることもできます。 以下が必要です:
    * 認証のためのアクセストークン。
    * 移行の一意の `id`。
      ```shell
      curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
      -H "Accept: application/vnd.github.wyandotte-preview+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
