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
  - /github/administering-a-repository/about-protected-branches
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## ブランチ保護ルールについて

ブランチ保護ルールを作成することにより、コラボレータがリポジトリ内のブランチに変更をプッシュする前に、特定のワークフローまたは要件を適用できます。これには、プルリクエストのブランチへのマージが含まれます。

デフォルト設定では、各ブランチ保護ルールは、一致するブランチへのフォースプッシュを無効にし、一致するブランチが削除されないようにします。 必要に応じて、これらの制限を無効にし、追加のブランチ保護設定を有効にすることができます。

デフォルト設定では、ブランチ保護ルールの制限は、リポジトリへの管理者権限を持つユーザには適用されません。 必要に応じて、管理者を含めることもできます。

{% data reusables.repositories.branch-rules-example %} ブランチ名のパターンの詳細については、「[ブランチ保護ルールを管理する](/github/administering-a-repository/managing-a-branch-protection-rule)」を参照してください。

{% data reusables.pull_requests.you-can-auto-merge %}

## ブランチ保護設定について

ブランチ保護ルールごとに、次の設定を有効にするか無効にするかを選択できます。
- [マージ前に Pull Request レビュー必須](#require-pull-request-reviews-before-merging)
- [マージ前にステータスチェック必須](#require-status-checks-before-merging)
- [Require conversation resolution before merging](#require-conversation-resolution-before-merging)
- [署名済みコミットの必須化](#require-signed-commits)
- [直線状の履歴必須](#require-linear-history)
{% ifversion fpt or ghec %}
- [Require merge queue](#require-merge-queue)
{% endif %}
{%- ifversion required-deployments %}
- [Require deployments to succeed before merging](#require-deployments-to-succeed-before-merging)
{%- endif %}
- [管理者を含める](#include-administrators)
- [一致するブランチにプッシュできるユーザを制限](#restrict-who-can-push-to-matching-branches)
- [フォースプッシュを許可](#allow-force-pushes)
- [削除を許可](#allow-deletions)

For more information on how to set up branch protection, see "[Managing a branch protection rule](/github/administering-a-repository/managing-a-branch-protection-rule)."

### マージ前に Pull Request レビュー必須

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

必須レビューを有効にした場合、コラボレータは、書き込み権限を持つ必要な人数のレビュー担当者により承認されたプルリクエストからしか、保護されたブランチに変更をプッシュできなくなります。

管理者権限を持つ人がレビューで [**Request changes**] を選択した場合、プルリクエストをマージするためには管理者権限を持つ人がそのプルリクエストを承認する必要があります。 プルリクエストへの変更をリクエストしたレビュー担当者の手が空いていない場合、そのリポジトリに書き込み権限を持つ人が、ブロックしているレビューを却下できます。

{% data reusables.repositories.review-policy-overlapping-commits %}

コラボレータが保留中または拒否されたレビューのプルリクエストを保護されたブランチにマージしようとすると、コラボレータにエラーメッセージが届きます。

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

必要に応じて、コミットがプッシュされた際に古いプルリクエストを却下できます。 コードを承認されたプルリクエストに変更するコミットがプッシュされた場合、その承認は却下され、プルリクエストはマージできません。 これは、ベースブランチをプルリクエストのブランチにマージするなど、コードを変更しないコミットをコラボレータがプッシュする場合には適用されません。 ベースブランチに関する詳しい情報については「[プルリクエストについて](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)」を参照してください。

必要に応じて、プルリクエストレビューを却下する権限を、特定の人物またはチームに限定できます。 詳しい情報については[プルリクエストレビューの却下](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)を参照してください。

必要に応じて、コードオーナー'からのレビューを必須にすることもできます。 この場合、コードオーナーのコードに影響するプルリクエストは、保護されたブランチにプルリクエストをマージする前に、そのコードオーナーから承認される必要があります。

### マージ前にステータスチェック必須

必須ステータスチェックにより、コラボレータが保護されたブランチに変更を加える前に、すべての必須 CI テストにパスしていることが保証されます。 詳細は「[保護されたブランチを設定する](/articles/configuring-protected-branches/)」および「[必須ステータスチェックを有効にする](/articles/enabling-required-status-checks)」を参照してください。 詳しい情報については、「[ステータスチェックについて](/github/collaborating-with-issues-and-pull-requests/about-status-checks)」を参照してください。

ステータスチェック必須を有効にする前に、ステータス API を使用するようにリポジトリを設定する必要があります。 詳しい情報については、REST ドキュメントの「[リポジトリ](/rest/reference/commits#commit-statuses)」を参照してください。

ステータスチェック必須を有効にすると、すべてのステータスチェック必須がパスしないと、コラボレータは保護されたブランチにマージできません。 必須ステータスチェックをパスしたら、コミットを別のブランチにプッシュしてから、マージするか、保護されたブランチに直接プッシュする必要があります。

Any person or integration with write permissions to a repository can set the state of any status check in the repository{% ifversion fpt or ghes > 3.3 or ghae-issue-5379 or ghec %}, but in some cases you may only want to accept a status check from a specific {% data variables.product.prodname_github_app %}. When you add a required status check, you can select an app that has recently set this check as the expected source of status updates.{% endif %} If the status is set by any other person or integration, merging won't be allowed. If you select "any source", you can still manually verify the author of each status, listed in the merge box.

必須ステータスチェックのタイプは、\[loose\] (寛容)、\[strict\] (厳格) のいずれかに設定できます。 選択した必須ステータスチェックのタイプにより、マージする前にブランチをベースブランチとともに最新にする必要があるかどうかが決まります。

| 必須ステータスチェックのタイプ | 設定                                                                          | マージの要件                                    | 留意点                                                                                                                               |
| --------------- | --------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Strict**      | [**Require branches to be up to date before merging**] チェックボックスにチェックする      | マージ前、ブランチは、base ブランチとの関係で**最新でなければならない**。 | これは、必須ステータスチェックのデフォルト動作です。 他のコラボレーターが、保護された base ブランチにプルリクエストをマージした後に、あなたは head ブランチをアップデートする必要が出てくる可能性があるため、追加のビルドが必要になるかもしれません。 |
| **Loose**       | [**Require branches to be up to date before merging**] チェックボックスにチェック**しない** | マージ前、ブランチは base ブランチとの関係で**最新でなくてもよい**。   | 他のコラボレーターがプルリクエストをマージした後に head ブランチをアップデートする必要はないことから、必要となるビルドは少なくなります。 base ブランチと競合する変更がある場合、ブランチをマージした後のステータスチェックは失敗する可能性があります。 |
| **無効**          | [**Require status checks to pass before merging**] チェックボックスにチェック**しない**     | ブランチのマージについての制限はない                        | 必須ステータスチェックが有効化されていない場合、base ブランチにあわせてアップデートされているかどうかに関わらず、コラボレーターはいつでもブランチをマージできます。 このことで、変更の競合が発生する可能性が高まります。                   |

トラブルシューティング情報については、「[必須ステータスチェックのトラブルシューティング](/github/administering-a-repository/troubleshooting-required-status-checks)」を参照してください。

### Require conversation resolution before merging

Requires all comments on the pull request to be resolved before it can be merged to a protected branch. This ensures that all comments are addressed or acknowledged before merge.

### 署名済みコミットの必須化

ブランチで必須のコミット署名を有効にすると、コントリビュータ{% ifversion fpt or ghec %}とボット{% endif %}は、ブランチに署名および検証されたコミットのみをプッシュできます。 詳細については、「[コミット署名の検証について](/articles/about-commit-signature-verification)」を参照してください。

{% note %}

{% ifversion fpt or ghec %}
**ノート:**

* If you have enabled vigilant mode, which indicates that your commits will always be signed, any commits that {% data variables.product.prodname_dotcom %} identifies as "Partially verified" are permitted on branches that require signed commits. For more information about vigilant mode, see "[Displaying verification statuses for all of your commits](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)."
* If a collaborator pushes an unsigned commit to a branch that requires commit signatures, the collaborator will need to rebase the commit to include a verified signature, then force push the rewritten commit to the branch.

{% else %}
**注釈:** コラボレータが未署名のコミットをコミット署名必須のブランチにプッシュすると、コラボレータは検証済み署名を含めるためにコミットをリベースしてから、書き直したコミットをブランチにフォースプッシュする必要があります。
{% endif %}

{% endnote %}

コミットが署名および検証されている場合は、いつでもローカルコミットをブランチにプッシュできます。 {% ifversion fpt or ghec %}{% data variables.product.product_name %}のプルリクエストを使用して、署名および検証されているコミットをブランチにマージすることもできます。 ただし、プルリクエストの作者でない限り、プルリクエストを squash して{% data variables.product.product_name %}のブランチにマージすることはできません。{% else %}ただし、プルリクエストを{% data variables.product.product_name %}のブランチにマージすることはできません。{% endif %}プルリクエストをローカルで{% ifversion fpt or ghec %} squash および{% endif %}マージできます。 詳しい情報については、「[プルリクエストをローカルでチェック アウトする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)」を参照してください。

{% ifversion fpt or ghec %}マージ方法の詳しい情報については、「[{% data variables.product.prodname_dotcom %}上のマージ方法について](/github/administering-a-repository/about-merge-methods-on-github)」を参照してください。{% endif %}

### 直線状の履歴必須

直線状のコミット履歴を強制すると、コラボレータがブランチにマージコミットをプッシュすることを防げます。 つまり、保護されたブランチにマージされたプルリクエストは、squash マージまたはリベースマージを使用する必要があります。 厳格な直線状のコミット履歴は、Teamが変更をより簡単にたどるために役立ちます。 マージ方法に関する詳しい情報については「[プルリクエストマージについて](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)」を参照してください。

直線状のコミット履歴をリクエストする前に、リポジトリで squash マージまたはリベースマージを許可する必要があります。 詳しい情報については、「[プルリクエストマージを設定する](/github/administering-a-repository/configuring-pull-request-merges)」を参照してください。

{% ifversion fpt or ghec %}
### Require merge queue

{% data reusables.pull_requests.merge-queue-beta %}
{% data reusables.pull_requests.merge-queue-overview %}

{% data reusables.pull_requests.merge-queue-merging-method %}
{% data reusables.pull_requests.merge-queue-references %}

{% endif %}

### Require deployments to succeed before merging

You can require that changes are successfully deployed to specific environments before a branch can be merged. For example, you can use this rule to ensure that changes are successfully deployed to a staging environment before the changes merge to your default branch.

### 管理者を含める

デフォルトでは、保護されたブランチのルールは、リポジトリの管理者権限を持つユーザには適用されません。 この設定を有効化すると、保護されたブランチのルールを管理者にも適用できます。

### 一致するブランチにプッシュできるユーザを制限

{% ifversion fpt or ghec %}
You can enable branch restrictions if your repository is owned by an organization using {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

ブランチ制限を有効にすると、権限を与えられたユーザ、チーム、またはアプリのみが保護されたブランチにプッシュできます。 保護されたブランチの設定で、保護されたブランチへのプッシュアクセスを使用して、ユーザ、チーム、またはアプリを表示および編集できます。 When status checks are required, the people, teams, and apps that have permission to push to a protected branch will still be prevented from merging into the branch when the required checks fail. People, teams, and apps that have permission to push to a protected branch will still need to create a pull request when pull requests are required.

{% ifversion restrict-pushes-create-branch %}
Optionally, you can apply the same restrictions to the creation of branches that match the rule. For example, if you create a rule that only allows a certain team to push to any branches that contain the word `release`, only members of that team would be able to create a new branch that contains the word `release`.
{% endif %}

You can only give push access to a protected branch, or give permission to create a matching branch, to users, teams, or installed {% data variables.product.prodname_github_apps %} with write access to a repository. People and apps with admin permissions to a repository are always able to push to a protected branch or create a matching branch.

### フォースプッシュを許可

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5624 %}
デフォルトでは、{% data variables.product.product_name %}はすべての保護されたブランチでフォースプッシュをブロックします。 When you enable force pushes to a protected branch, you can choose one of two groups who can force push:

1. Allow everyone with at least write permissions to the repository to force push to the branch, including those with admin permissions.
1. Allow only specific people or teams to force push to the branch.

If someone force pushes to a branch, the force push may overwrite commits that other collaborators based their work on. People may have merge conflicts or corrupted pull requests.

{% else %}
デフォルトでは、{% data variables.product.product_name %}はすべての保護されたブランチでフォースプッシュをブロックします。 保護されたブランチのフォースプッシュを有効にすると、少なくともリポジトリへの書き込み権限を持つユーザは、管理者権限を持つブランチを含め、ブランチをフォースプッシュできます。 If someone force pushes to a branch, the force push may overwrite commits that other collaborators based their work on. People may have merge conflicts or corrupted pull requests.
{% endif %}

フォースプッシュを有効化しても、他のブランチ保護ルールは上書きされません。 たとえば、ブランチに直線状のコミット履歴が必要な場合、そのブランチにマージコミットをフォースプッシュすることはできません。

{% ifversion ghes or ghae %}サイト管理者がリポジトリ内のすべてのブランチへのフォースプッシュをブロックしている場合、保護されたブランチのフォースプッシュを有効にすることはできません。 For more information, see "[Blocking force pushes to repositories owned by a personal account or organization](/enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)."

サイト管理者がデフォルトブランチへのフォースプッシュのみをブロックしている場合、他の保護されたブランチに対してフォースプッシュを有効にできます。{% endif %}

### 削除を許可

デフォルトでは、保護されたブランチは削除できません。 保護されたブランチの削除を有効にすると、少なくともリポジトリへの書き込み権限を持つユーザは、ブランチを削除できます。
