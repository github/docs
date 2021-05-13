---
title: 保護されたブランチについて
intro: 重要なブランチを保護するには、ブランチ保護ルールを設定します。このルールは、コラボレータがブランチへのプッシュを削除または強制できるかどうかを定義し、ステータスチェックのパスや直線状のコミット履歴など、ブランチへのプッシュの要件を設定します。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
  - /articles/about-branch-restrictions
  - /github/administering-a-repository/about-branch-restrictions
  - /articles/about-required-status-checks
  - /github/administering-a-repository/about-required-status-checks
  - /articles/types-of-required-status-checks
  - /github/administering-a-repository/types-of-required-status-checks
  - /articles/about-required-commit-signing
  - /github/administering-a-repository/about-required-commit-signing
  - /articles/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### ブランチ保護ルールについて

ブランチ保護ルールを作成することにより、コラボレータがリポジトリ内のブランチに変更をプッシュする前に、特定のワークフローまたは要件を適用できます。これには、プルリクエストのブランチへのマージが含まれます。

デフォルト設定では、各ブランチ保護ルールは、一致するブランチへのフォースプッシュを無効にし、一致するブランチが削除されないようにします。 必要に応じて、これらの制限を無効にし、追加のブランチ保護設定を有効にすることができます。

デフォルト設定では、ブランチ保護ルールの制限は、リポジトリへの管理者権限を持つユーザには適用されません。 必要に応じて、管理者を含めることもできます。

{% data reusables.repositories.branch-rules-example %} ブランチ名のパターンの詳細については、「[ブランチ保護ルールを管理する](/github/administering-a-repository/managing-a-branch-protection-rule)」を参照してください。

{% data reusables.pull_requests.you-can-auto-merge %}

### ブランチ保護設定について

ブランチ保護ルールごとに、次の設定を有効にするか無効にするかを選択できます。
- [マージ前に Pull Request レビュー必須](#require-pull-request-reviews-before-merging)
- [マージ前にステータスチェック必須](#require-status-checks-before-merging)
- [署名済みコミットの必須化](#require-signed-commits)
- [直線状の履歴必須](#require-linear-history)
- [管理者を含める](#include-administrators)
- [一致するブランチにプッシュできるユーザを制限](#restrict-who-can-push-to-matching-branches)
- [フォースプッシュを許可](#allow-force-pushes)
- [削除を許可](#allow-deletions)

#### マージ前に Pull Request レビュー必須

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

必須レビューを有効にした場合、コラボレータは、書き込み権限を持つ必要な人数のレビュー担当者により承認されたプルリクエストからしか、保護されたブランチに変更をプッシュできなくなります。

管理者権限を持つ人がレビューで [**Request changes**] を選択した場合、プルリクエストをマージするためには管理者権限を持つ人がそのプルリクエストを承認する必要があります。 プルリクエストへの変更をリクエストしたレビュー担当者の手が空いていない場合、そのリポジトリに書き込み権限を持つ人が、ブロックしているレビューを却下できます。

{% data reusables.repositories.review-policy-overlapping-commits %}

コラボレータが保留中または拒否されたレビューのプルリクエストを保護されたブランチにマージしようとすると、コラボレータにエラーメッセージが届きます。

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

必要に応じて、コミットがプッシュされた際に古いプルリクエストを却下できます。 コードを承認されたプルリクエストに変更するコミットがプッシュされた場合、その承認は却下され、プルリクエストはマージできません。 これは、ベースブランチをプルリクエストのブランチにマージするなど、コードを変更しないコミットをコラボレータがプッシュする場合には適用されません。 ベースブランチに関する詳しい情報については「[プルリクエストについて](/articles/about-pull-requests)」を参照してください。

必要に応じて、プルリクエストレビューを却下する権限を、特定の人物またはチームに限定できます。 詳しい情報については[プルリクエストレビューの却下](/articles/dismissing-a-pull-request-review)を参照してください。

必要に応じて、コードオーナー'からのレビューを必須にすることもできます。 この場合、コードオーナーのコードに影響するプルリクエストは、保護されたブランチにプルリクエストをマージする前に、そのコードオーナーから承認される必要があります。

#### マージ前にステータスチェック必須

必須ステータスチェックにより、コラボレータが保護されたブランチに変更を加える前に、すべての必須 CI テストにパスしていることが保証されます。 詳細は「[保護されたブランチを設定する](/articles/configuring-protected-branches/)」および「[必須ステータスチェックを有効にする](/articles/enabling-required-status-checks)」を参照してください。 詳しい情報については、「[ステータスチェックについて](/github/collaborating-with-issues-and-pull-requests/about-status-checks)」を参照してください。

ステータスチェック必須を有効にする前に、ステータス API を使用するようにリポジトリを設定する必要があります。 詳しい情報については、REST ドキュメントの「[リポジトリ](/rest/reference/repos#statuses)」を参照してください。

ステータスチェック必須を有効にすると、すべてのステータスチェック必須がパスしないと、コラボレータは保護されたブランチにマージできません。 必須ステータスチェックをパスしたら、コミットを別のブランチにプッシュしてから、マージするか、保護されたブランチに直接プッシュする必要があります。

{% note %}

**注釈:** リポジトリへの書き込み権限があるユーザまたはインテグレーションなら誰でも、リポジトリのステータスチェックを任意のステータスに設定できます。 {% data variables.product.company_short %} は、チェックの作者が、特定の名前でチェックを作成したり、既存のステータスを変更したりする権限を持っているかを確認しません。 プルリクエストをマージする前に、マージボックスにリストされている各ステータスの作者が想定された人物であることを確認する必要があります。

{% endnote %}

必須ステータスチェックのタイプは、\[loose\] (寛容)、\[strict\] (厳格) のいずれかに設定できます。 選択した必須ステータスチェックのタイプにより、マージする前にブランチをベースブランチとともに最新にする必要があるかどうかが決まります。

| 必須ステータスチェックのタイプ | 設定                                                                          | マージの要件                                    | 留意点                                                                                                                               |
| --------------- | --------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Strict**      | [**Require branches to be up to date before merging**] チェックボックスにチェックする      | マージ前、ブランチは、base ブランチとの関係で**最新でなければならない**。 | これは、必須ステータスチェックのデフォルト動作です。 他のコラボレーターが、保護された base ブランチにプルリクエストをマージした後に、あなたは head ブランチをアップデートする必要が出てくる可能性があるため、追加のビルドが必要になるかもしれません。 |
| **Loose**       | [**Require branches to be up to date before merging**] チェックボックスにチェック**しない** | マージ前、ブランチは base ブランチとの関係で**最新でなくてもよい**。   | 他のコラボレーターがプルリクエストをマージした後に head ブランチをアップデートする必要はないことから、必要となるビルドは少なくなります。 base ブランチと競合する変更がある場合、ブランチをマージした後のステータスチェックは失敗する可能性があります。 |
| **無効**          | [**Require status checks to pass before merging**] チェックボックスにチェック**しない**     | ブランチのマージについての制限はない                        | 必須ステータスチェックが有効化されていない場合、base ブランチにあわせてアップデートされているかどうかに関わらず、コラボレーターはいつでもブランチをマージできます。 このことで、変更の競合が発生する可能性が高まります。                   |

トラブルシューティング情報については、「[必須ステータスチェックのトラブルシューティング](/github/administering-a-repository/troubleshooting-required-status-checks)」を参照してください。

#### 署名済みコミットの必須化

ブランチで必須のコミット署名を有効にすると、コントリビュータ{% if currentVersion == "free-pro-team@latest" %}とボット{% endif %}は、ブランチに署名および検証されたコミットのみをプッシュできます。 詳細については、「[コミット署名の検証について](/articles/about-commit-signature-verification)」を参照してください。

{% note %}

**注釈:** コラボレータが未署名のコミットをコミット署名必須のブランチにプッシュすると、コラボレータは検証済み署名を含めるためにコミットをリベースしてから、書き直したコミットをブランチにフォースプッシュする必要があります。

{% endnote %}

コミットが署名および検証されている場合は、いつでもローカルコミットをブランチにプッシュできます。 {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.product_name %}のプルリクエストを使用して、署名および検証されているコミットをブランチにマージすることもできます。 ただし、プルリクエストの作者でない限り、プルリクエストを squash して{% data variables.product.product_name %}のブランチにマージすることはできません。{% else %}ただし、プルリクエストを{% data variables.product.product_name %}のブランチにマージすることはできません。{% endif %}プルリクエストをローカルで{% if currentVersion == "free-pro-team@latest" %} squash および{% endif %}マージできます。 詳しい情報については、「[プルリクエストをローカルでチェック アウトする](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}マージ方法の詳しい情報については、「[{% data variables.product.prodname_dotcom %}上のマージ方法について](/github/administering-a-repository/about-merge-methods-on-github)」を参照してください。{% endif %}

#### 直線状の履歴必須

直線状のコミット履歴を強制すると、コラボレータがブランチにマージコミットをプッシュすることを防げます。 つまり、保護されたブランチにマージされたプルリクエストは、squash マージまたはリベースマージを使用する必要があります。 厳格な直線状のコミット履歴は、Teamが変更をより簡単にたどるために役立ちます。 マージ方法に関する詳しい情報については「[プルリクエストマージについて](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)」を参照してください。

直線状のコミット履歴をリクエストする前に、リポジトリで squash マージまたはリベースマージを許可する必要があります。 詳しい情報については、「[プルリクエストマージを設定する](/github/administering-a-repository/configuring-pull-request-merges)」を参照してください。

#### 管理者を含める

デフォルトでは、保護されたブランチのルールは、リポジトリの管理者権限を持つユーザには適用されません。 この設定を有効化すると、保護されたブランチのルールを管理者にも適用できます。

#### 一致するブランチにプッシュできるユーザを制限

{% if currentVersion == "free-pro-team@latest" %}
リポジトリが
{% data variables.product.prodname_team %}または{% data variables.product.prodname_ghe_cloud %}を使用するOrganizationにより所有されている場合、ブランチ制限を有効化できます。
{% endif %}

ブランチ制限を有効にすると、権限を与えられたユーザ、チーム、またはアプリのみが保護されたブランチにプッシュできます。 保護されたブランチの設定で、保護されたブランチへのプッシュアクセスを使用して、ユーザ、チーム、またはアプリを表示および編集できます。

ユーザ、チーム、またはリポジトリへの write 権限を持つインストール済みの {% data variables.product.prodname_github_apps %} にのみ、保護されたブランチへのプッシュアクセス付与できます。 リポジトリへの管理者権限を持つユーザとアプリケーションは、いつでも保護されたブランチにプッシュできます。

#### フォースプッシュを許可

デフォルトでは、{% data variables.product.product_name %}はすべての保護されたブランチでフォースプッシュをブロックします。 保護されたブランチのフォースプッシュを有効にすると、少なくともリポジトリへの書き込み権限を持つユーザは、管理者権限を持つブランチを含め、ブランチをフォースプッシュできます。

フォースプッシュを有効化しても、他のブランチ保護ルールは上書きされません。 たとえば、ブランチに直線状のコミット履歴が必要な場合、そのブランチにマージコミットをフォースプッシュすることはできません。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}You cannot enable force pushes for a protected branch if a site administrator has blocked force pushes to all branches in your repository. 詳しい情報については、「[ユーザアカウントもしくはOrganizationが所有するリポジトリへのフォースプッシュのブロック](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)」を参照してください。

サイト管理者がデフォルトブランチへのフォースプッシュのみをブロックしている場合、他の保護されたブランチに対してフォースプッシュを有効にできます。{% endif %}

#### 削除を許可

デフォルトでは、保護されたブランチは削除できません。 保護されたブランチの削除を有効にすると、少なくともリポジトリへの書き込み権限を持つユーザは、ブランチを削除できます。
