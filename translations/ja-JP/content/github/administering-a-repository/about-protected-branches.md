---
title: 保護されたブランチについて
intro: 'You can protect important branches by setting branch protection rules, which define whether collaborators can delete or force push to the branch and set requirements for any pushes to the branch, such as passing status checks or a linear commit history.'
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
---

### About branch protection rules

You can enforce certain workflows or requirements before a collaborator can push changes to a branch in your repository, including merging a pull request into the branch, by creating a branch protection rule.

By default, each branch protection rule disables force pushes to the matching branches and prevents the matching branches from being deleted. You can optionally disable these restrictions and enable additional branch protection settings.

By default, the restrictions of a branch protection rule don't apply to people with admin permissions to the repository. You can optionally choose to include administrators, too.

{% data reusables.repositories.branch-rules-example %} For more information about branch name patterns, see "[Managing a branch protection rule](/github/administering-a-repository/managing-a-branch-protection-rule)."

{% data reusables.pull_requests.you-can-auto-merge %}

### About branch protection settings

For each branch protection rule, you can choose to enable or disable the following settings.
- [Require pull request reviews before merging](#require-pull-request-reviews-before-merging)
- [Require status checks before merging](#require-status-checks-before-merging)
- [署名済みコミットの必須化](#require-signed-commits)
- [Require linear history](#require-linear-history)
- [Include administrators](#include-administrators)
- [Restrict who can push to matching branches](#restrict-who-can-push-to-matching-branches)
- [Allow force pushes](#allow-force-pushes)
- [Allow deletions](#allow-deletions)

#### Require pull request reviews before merging

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

If you enable required reviews, collaborators can only push changes to a protected branch via a pull request that is approved by the required number of reviewers with write permissions.

If a person with admin permissions chooses the **Request changes** option in a review, then that person must approve the pull request before the pull request can be merged. If a reviewer who requests changes on a pull request isn't available, anyone with write permissions for the repository can dismiss the blocking review.

{% data reusables.repositories.review-policy-overlapping-commits %}

If a collaborator attempts to merge a pull request with pending or rejected reviews into the protected branch, the collaborator will receive an error message.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

Optionally, you can choose to dismiss stale pull request approvals when commits are pushed. If anyone pushes a commit that modifies code to an approved pull request, the approval will be dismissed, and the pull request cannot be merged. This doesn't apply if the collaborator pushes commits that don't modify code, like merging the base branch into the pull request's branch. ベースブランチに関する詳しい情報については「[プルリクエストについて](/articles/about-pull-requests)」を参照してください。

Optionally, you can restrict the ability to dismiss pull request reviews to specific people or teams. 詳しい情報については[プルリクエストレビューの却下](/articles/dismissing-a-pull-request-review)を参照してください。

Optionally, you can choose to require reviews from code owners. If you do, any pull request that affects code with a code owner must be approved by that code owner before the pull request can be merged into the protected branch.

#### Require status checks before merging

必須ステータスチェックにより、コラボレータが保護されたブランチに変更を加える前に、すべての必須 CI テストにパスしていることが保証されます。 詳細は「[保護されたブランチを設定する](/articles/configuring-protected-branches/)」および「[必須ステータスチェックを有効にする](/articles/enabling-required-status-checks)」を参照してください。 詳しい情報については、「[ステータスチェックについて](/github/collaborating-with-issues-and-pull-requests/about-status-checks)」を参照してください。

ステータスチェック必須を有効にする前に、ステータス API を使用するようにリポジトリを設定する必要があります。 For more information, see "[Repositories](/rest/reference/repos#statuses)" in the REST documentation.

After enabling required status checks, all required status checks must pass before collaborators can merge changes into the protected branch. 必須ステータスチェックをパスしたら、コミットを別のブランチにプッシュしてから、マージするか、保護されたブランチに直接プッシュする必要があります。

{% note %}

**注釈:** リポジトリへの書き込み権限があるユーザまたはインテグレーションなら誰でも、リポジトリのステータスチェックを任意のステータスに設定できます。 {% data variables.product.company_short %} は、チェックの作者が、特定の名前でチェックを作成したり、既存のステータスを変更したりする権限を持っているかを確認しません。 プルリクエストをマージする前に、マージボックスにリストされている各ステータスの作者が想定された人物であることを確認する必要があります。

{% endnote %}

必須ステータスチェックのタイプは、\[loose\] (寛容)、\[strict\] (厳格) のいずれかに設定できます。 The type of required status check you choose determines whether your branch is required to be up-to-date with the base branch before merging.

| 必須ステータスチェックのタイプ | 設定                                                                          | マージの要件                                    | 留意点                                                                                                                               |
| --------------- | --------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Strict**      | [**Require branches to be up-to-date before merging**] チェックボックスにチェックする      | マージ前、ブランチは、base ブランチとの関係で**最新でなければならない**。 | これは、必須ステータスチェックのデフォルト動作です。 他のコラボレーターが、保護された base ブランチにプルリクエストをマージした後に、あなたは head ブランチをアップデートする必要が出てくる可能性があるため、追加のビルドが必要になるかもしれません。 |
| **Loose**       | [**Require branches to be up-to-date before merging**] チェックボックスにチェック**しない** | マージ前、ブランチは base ブランチとの関係で**最新でなくてもよい**。   | 他のコラボレーターがプルリクエストをマージした後に head ブランチをアップデートする必要はないことから、必要となるビルドは少なくなります。 base ブランチと競合する変更がある場合、ブランチをマージした後のステータスチェックは失敗する可能性があります。 |
| **無効**          | [**Require status checks to pass before merging**] チェックボックスにチェック**しない**     | ブランチのマージについての制限はない                        | 必須ステータスチェックが有効化されていない場合、base ブランチにあわせてアップデートされているかどうかに関わらず、コラボレーターはいつでもブランチをマージできます。 このことで、変更の競合が発生する可能性が高まります。                   |

For troubleshooting information, see "[Troubleshooting required status checks](/github/administering-a-repository/troubleshooting-required-status-checks)."

#### 署名済みコミットの必須化

When you enable required commit signing on a branch, contributors {% if currentVersion == "free-pro-team@latest" %}and bots{% endif %} can only push commits that have been signed and verified to the branch. 詳細については、「[コミット署名の検証について](/articles/about-commit-signature-verification)」を参照してください。

{% note %}

**Note:** If a collaborator pushes an unsigned commit to a branch that requires commit signatures, the collaborator will need to rebase the commit to include a verified signature, then force push the rewritten commit to the branch.

{% endnote %}

コミットが署名および検証されている場合は、いつでもローカルコミットをブランチにプッシュできます。 {% if currentVersion == "free-pro-team@latest" %}You can also merge signed and verified commits into the branch using a pull request on {% data variables.product.product_name %}. However, you cannot squash and merge a pull request into the branch on {% data variables.product.product_name %} unless you are the author of the pull request.{% else %} However, you cannot merge pull requests into the branch on {% data variables.product.product_name %}.{% endif %} You can {% if currentVersion == "free-pro-team@latest" %}squash and {% endif %}merge pull requests locally. 詳しい情報については、「[プルリクエストをローカルでチェック アウトする](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %} For more information about merge methods, see "[About merge methods on {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)."{% endif %}

#### Require linear history

Enforcing a linear commit history prevents collaborators from pushing merge commits to the branch. つまり、保護されたブランチにマージされたプルリクエストは、squash マージまたはリベースマージを使用する必要があります。 A strictly linear commit history can help teams reverse changes more easily. マージ方法に関する詳しい情報については「[プルリクエストマージについて](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)」を参照してください。

直線状のコミット履歴をリクエストする前に、リポジトリで squash マージまたはリベースマージを許可する必要があります。 詳しい情報については、「[プルリクエストマージを設定する](/github/administering-a-repository/configuring-pull-request-merges)」を参照してください。

#### Include administrators

By default, protected branch rules do not apply to people with admin permissions to a repository. You can enable this setting to include administrators in your protected branch rules.

#### Restrict who can push to matching branches

{% if currentVersion == "free-pro-team@latest" %}
You can enable branch restrictions if your repository is owned by an organization using
{% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

When you enable branch restrictions, only users, teams, or apps that have been given permission can push to the protected branch. You can view and edit the users, teams, or apps with push access to a protected branch in the protected branch's settings.

You can only give push access to a protected branch to users, teams, or installed {% data variables.product.prodname_github_apps %} with write access to a repository. People and apps with admin permissions to a repository are always able to push to a protected branch.

#### Allow force pushes

By default, {% data variables.product.product_name %} blocks force pushes on all protected branches. 保護されたブランチのフォースプッシュを有効にすると、少なくともリポジトリへの書き込み権限を持つユーザは、管理者権限を持つブランチを含め、ブランチをフォースプッシュできます。

フォースプッシュを有効化しても、他のブランチ保護ルールは上書きされません。 たとえば、ブランチに直線状のコミット履歴が必要な場合、そのブランチにマージコミットをフォースプッシュすることはできません。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}You cannot enable force pushes for a protected branch if a site administrator has blocked force pushes to all branches in your repository. 詳しい情報については、「[ユーザアカウントもしくはOrganizationが所有するリポジトリへのフォースプッシュのブロック](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)」を参照してください。

サイト管理者がデフォルトブランチへのフォースプッシュのみをブロックしている場合、他の保護されたブランチに対してフォースプッシュを有効にできます。{% endif %}

#### Allow deletions

デフォルトでは、保護されたブランチは削除できません。 When you enable deletion of a protected branch, anyone with at least write permissions to the repository can delete the branch.
