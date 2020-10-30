---
title: 保護されたブランチと必須のステータスチェックの設定
intro: ブランチの操作を制限するために保護されたブランチを有効化できます。また、ブランチがプルリクエストでマージされる前、あるいはローカルブランチへのコミットが保護されたリモートブランチへプッシュされる前に、必須のステータスチェックを強制することができます。
redirect_from:
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
versions:
  enterprise-server: '*'
---

リポジトリに対する管理者権限があるユーザなら誰でも、ブランチ制限を有効化できます。

### リポジトリで保護されたブランチを有効化する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. **Create（作成）**をクリックしてください。

### 必須ステータスチェックのタイプ

| 必須ステータスチェックのタイプ | 設定                                                                          | マージの要件                                    | 留意点                                                                                                                               |
| --------------- | --------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Strict**      | [**Require branches to be up-to-date before merging**] チェックボックスにチェックする      | マージ前、ブランチは、base ブランチとの関係で**最新でなければならない**。 | これは、必須ステータスチェックのデフォルト動作です。 他のコラボレーターが、保護された base ブランチにプルリクエストをマージした後に、あなたは head ブランチをアップデートする必要が出てくる可能性があるため、追加のビルドが必要になるかもしれません。 |
| **Loose**       | [**Require branches to be up-to-date before merging**] チェックボックスにチェック**しない** | マージ前、ブランチは base ブランチとの関係で**最新でなくてもよい**。   | 他のコラボレーターがプルリクエストをマージした後に head ブランチをアップデートする必要はないことから、必要となるビルドは少なくなります。 base ブランチと競合する変更がある場合、ブランチをマージした後のステータスチェックは失敗する可能性があります。 |
| **無効**          | [**Require status checks to pass before merging**] チェックボックスにチェック**しない**     | ブランチのマージについての制限はない                        | 必須ステータスチェックが有効化されていない場合、base ブランチにあわせてアップデートされているかどうかに関わらず、コラボレーターはいつでもブランチをマージできます。 このことで、変更の競合が発生する可能性が高まります。                   |

### 必須ステータスチェックを有効にする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. [**Require status checks to pass before merging**] を選択します。 ![必須ステータスチェックのオプション](/assets/images/help/repository/required-status-checks.png)
6. 使用可能なステータスチェックのリストから、必須としたいものを選択します。 ![利用可能なステータスチェックの一覧](/assets/images/help/repository/required-statuses-list.png)
{% data reusables.repositories.include-administrators %}
8. オプションとして、[**Require branches to be up to date before merging**] の選択を解除します。 選択すると、ベースブランチ上でブランチが最新のコードでテストされるようにできます。 ![必須ステータスのチェックボックス、ゆるい、または厳格な](/assets/images/help/repository/protecting-branch-loose-status-new.png)
9. 必要に応じて、 {% if currentVersion ver_gt "enterprise-server@2.18" %}**Restrict who can push to matching branches（マッチするブランチにプッシュできるユーザーを制限する）**{% else %}**Restrict who can push to this branch（このブランチにプッシュできるユーザーを制限する）**{% endif %}を選択してください。 ![Branch restriction checkbox]{% if currentVersion ver_gt "enterprise-server@2.18" %}(/assets/images/help/repository/restrict-branch.png){% else %}(/assets/images/help/repository/restrict-branch-push.png){% endif %}
10. 保護されたブランチにプッシュできる権限を持つ人{% if currentVersion ver_gt "enterprise-server@2.18" %}、{% else %}または{% endif %}チーム{% if currentVersion ver_gt "enterprise-server@2.18" %}、またはアプリ{% endif %}を検索し、選択します。 ![ブランチ制限の検索](/assets/images/help/repository/restrict-branch-search.png)
11. **Create（作成）**をクリックしてください。

{% data reusables.repositories.required-status-merge-tip %}
