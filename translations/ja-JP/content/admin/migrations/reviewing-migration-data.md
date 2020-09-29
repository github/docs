---
title: 移行データのレビュー
intro: 移行のすべてのステップの後で、移行データの状態をレビューできます。 レコードが適切にマップあるいは名称変更されること、インポートのステップの後にレコードに新しいURLが得られること、移行に失敗したレコードがリストアップされることを確認できます。
redirect_from:
  - '/enterprise/{{ currentVersion }}/admin/guides/migrations/reviewing-the-imported-data/'
  - /enterprise/admin/migrations/reviewing-migration-data
versions:
  enterprise-server: '*'
---

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
