---
title: Enterprise にデータを移行する
intro: '移行アーカイブを作成すると、ターゲットの {% data variables.product.prodname_ghe_server %} インスタンスにデータをインポートできます。 変更を恒久的にターゲットのインスタンスに適用する前に、潜在的なコンフリクトがないか変更をレビューできます。'
redirect_from:
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise/
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
  - /enterprise/admin/migrations/reviewing-migration-data
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise/
  - /enterprise/admin/guides/migrations/reviewing-the-imported-data/
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise/
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise-server/
  - /enterprise/admin/user-management/migrating-data-to-your-enterprise
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### インポートしたデータを {% data variables.product.prodname_ghe_server %} に適用する

[移行の準備](/admin/user-management/preparing-to-migrate-data-to-your-enterprise)ができたら、次のステップで移行を完了できます。

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. `ghe-migrator import`コマンドを使ってインポートのプロセスを開始してください。 以下が必要です:
    * 移行 GUID. 詳しい情報については、「[Enterprise へのデータ移行を準備する](/admin/user-management/preparing-to-migrate-data-to-your-enterprise)」を参照してください。
    * 認証のための個人アクセストークン。 個人アクセストークンは、サイト管理者としての認証にのみ使用され、特定のスコープは必要ありません。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}

### 移行データのレビュー

デフォルトでは、`ghe-migrator audit` はすべてのレコードを返します。 また、以下の条件でレコードをフィルタリングすることもできます。

  * レコードのタイプ。
  * レコードの状態。

レコードタイプは[移行データ](/enterprise/admin/guides/migrations/about-migrations/#migrated-data)にあるものとマッチします。

### レコードタイプのフィルタ

| レコードタイプ                       | フィルタ名                         |
| ----------------------------- | ----------------------------- |
| ユーザ                           | `ユーザ`                         |
| Organization                  | `Organization`                |
| リポジトリ                         | `リポジトリ`                       |
| Team                          | `Team`                        |
| マイルストーン                       | `マイルストーン`                     |
| プロジェクトボード                     | `project`                     |
| 問題                            | `Issue`                       |
| Issueのコメント                    | `issue_comment`               |
| プルリクエスト                       | `pull_request`                |
| プルリクエストのレビュー                  | `pull_request_review`         |
| コミットのコメント                     | `commit_comment`              |
| プルリクエストのレビューのコメント             | `pull_request_review_comment` |
| リリース                          | `リリース`                        |
| プルリクエストあるいはIssueに対して行われたアクション | `issue_event`                 |
| 保護されたブランチ                     | `protected_branch`            |

### レコードの状態フィルタ

| レコードの状態         | 説明                  |
| --------------- | ------------------- |
| `export`        | レコードはエクスポートされます。    |
| `import`        | レコードはインポートされます。     |
| `map`           | レコードはマップされます。       |
| `rename`        | レコードの名前が変更されます。     |
| `マージ`           | レコードはマージされます。       |
| `exported`      | レコードはエクスポートに成功しました。 |
| `imported`      | レコードはインポートに成功しました。  |
| `mapped`        | レコードはマップに成功しました。    |
| `renamed`       | レコードの名前の変更に成功しました。  |
| `merged`        | レコードはマージに成功しました。    |
| `failed_export` | レコードはエクスポートに失敗しました。 |
| `failed_import` | レコードはインポートに失敗しました。  |
| `failed_map`    | レコードはマップに失敗しました。    |
| `failed_rename` | レコードの名前の変更に失敗しました。  |
| `failed_merge`  | レコードはマージに失敗しました。    |

### 監査されたレコードのフィルタリング

`ghe-migrator audit`では、`-m`フラグを使ってレコードタイプに基づくフィルタリングができます。 同様に、`-s`フラグでインポートの状態に対してフィルタリングができます。 コマンドは以下のようになります。

```shell
$ ghe-migrator audit -m <em>RECORD_TYPE</em> -s <em>STATE</em> -g <em>MIGRATION_GUID</em>
```

たとえば、インポートに成功したすべてのOrganizationとチームを見るには以下のようにします。
```shell
$ ghe-migrator audit -m organization,team -s mapped,renamed -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> organization,https://gh.source/octo-org/,https://ghe.target/octo-org/,renamed
```

**失敗したすべてのインポートを監査することを強くおすすめします。**そのためには以下のようにします。
```shell
$ ghe-migrator audit -s failed_import,failed_map,failed_rename,failed_merge -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> user,https://gh.source/octocat,https://gh.target/octocat,failed
> repository,https://gh.source/octo-org/octo-project,https://ghe.target/octo-org/octo-project,failed
```

失敗したインポートに関する懸念があるなら、{% data variables.contact.contact_ent_support %}に連絡してください。

### {% data variables.product.prodname_ghe_server %} でインポートを完了する

ターゲットインスタンスへの移行が適用され、その内容を確認したら、リポジトリのロックを解除して、ソースから削除します。 ソースデータを削除する前に、すべてが期待どおりに機能していることを確認するため2週間ほど待つことをおすすめします。

### ターゲットインスタンス上でのリポジトリのアンロック

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}

### ソース上でのリポジトリのアンロック

#### {% data variables.product.prodname_dotcom_the_website %} で Organization からリポジトリのロックを解除する

{% data variables.product.prodname_dotcom_the_website %} Organization のリポジトリをアンロックするには、`DELETE` リクエストを<a href="/rest/reference/migrations#unlock-an-organization-repository" class="dotcom-only">移行アンロックエンドポイント</a>に送信します。 以下が必要です:
  * 認証のためのアクセストークン
  * 移行のユニーク`id`
  * アンロックするリポジトリの名前
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

#### {% data variables.product.prodname_dotcom_the_website %} で Organization からリポジトリを削除する

{% data variables.product.prodname_dotcom_the_website %} Organization のリポジトリをロック解除した後、[リポジトリ削除エンドポイント](/rest/reference/repos/#delete-a-repository)を使用して以前に移行したすべてのリポジトリを削除する必要があります。 認証のためのアクセストークンが必要になります。
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

#### {% data variables.product.prodname_ghe_server %} インスタンスからリポジトリをアンロックする

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}
