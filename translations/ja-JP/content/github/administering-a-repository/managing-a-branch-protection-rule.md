---
title: Managing a branch protection rule
intro: 'You can create a branch protection rule to enforce certain workflows for one or more branches, such as requiring an approving review or passing status checks for all pull requests merged into the protected branch.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
  - /articles/enabling-required-status-checks
  - /github/administering-a-repository/enabling-required-status-checks
  - /articles/enabling-branch-restrictions
  - /github/administering-a-repository/enabling-branch-restrictions
  - /articles/enabling-required-reviews-for-pull-requests
  - /github/administering-a-repository/enabling-required-reviews-for-pull-requests
  - /articles/enabling-required-commit-signing
  - /github/administering-a-repository/enabling-required-commit-signing
  - /github/administering-a-repository/requiring-a-linear-commit-history
  - /github/administering-a-repository/enabling-force-pushes-to-a-protected-branch
  - /github/administering-a-repository/enabling-deletion-of-a-protected-branch
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
---

### About branch protection rules

{% data reusables.repositories.branch-rules-example %}

You can create a rule for all current and future branches in your repository with the wildcard syntax `*`. {% data variables.product.company_short %}は、`File.fnmatch` 構文に `File::FNM_PATHNAME` フラグを使用するので、ワイルドカードはディレクトリの区切り文字 (`/`) には一致しません。 たとえば、`qa/*` は、`qa/` で始まり、1 つのスラッシュが含まれるすべてのブランチにマッチします。 You can include multiple slashes with `qa/**/*`, and you can extend the `qa` string with `qa**/**/*` to make the rule more inclusive. ブランチのルールに関する構文オプションの詳しい情報については、 [fnmatch ドキュメンテーション](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)を参照してください。

リポジトリが同じブランチに影響する複数の保護されたブランチのルールを持っているなら、特定のブランチ名を含むルールがもっとも高い優先順位を持ちます。 同じ特定のブランチ名を参照する保護されたブランチのルールが複数あるなら、最初に作成されたブランチルールが高い優先順位を持ちます。

`*`、`?`、`]`などの特殊文字を含む保護されたブランチのルールは、作成された順序で適用されるので、これらの文字を持つ古いルールが高い優先順位を持ちます。

既存のブランチのルールに例外を作成するため、特定のブランチ名に対するルールなど、優先度の高いブランチ保護ルールを新しく作成できます。

For more information about each of each of the available branch protection settings, see "[About protected branches](/github/administering-a-repository/about-protected-branches)."

### Creating a branch protection rule

When you create a branch rule, the branch you specify doesn't have to exist yet in the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
1. Optionally, enable required pull request reviews.
   - Under "Protect matching branches", select **Require pull request reviews before merging**. ![プルリクエストレビューの制限チェックボックス](/assets/images/help/repository/PR-reviews-required.png)
   - Click the **Required approving reviews** drop-down menu, then select the number of approving reviews you'd like to require on the branch. ![必須とするレビュー承認の数を選択するドロップダウンメニュー](/assets/images/help/repository/number-of-required-review-approvals.png)
   - Optionally, to dismiss a pull request approval review when a code-modifying commit is pushed to the branch, select **Dismiss stale pull request approvals when new commits are pushed**. ![新たなコミットがチェックボックスにプッシュされた際に古いプルリクエストの承認を却下するチェックボックス](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - Optionally, to require review from a code owner when the pull request affects code that has a designated owner, select **Require review from Code Owners**. 詳細は「[コードオーナーについて](/github/creating-cloning-and-archiving-repositories/about-code-owners)」を参照してください。 ![コードオーナーのレビューを必要とする](/assets/images/help/repository/PR-review-required-code-owner.png)
   - Optionally, if the repository is part of an organization, select **Restrict who can dismiss pull request reviews**. Then, search for and select the people or teams who are allowed to dismiss pull request reviews. 詳しい情報については[プルリクエストレビューの却下](/github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review)を参照してください。 ![[Restrict who can dismiss pull request reviews] チェックボックス](/assets/images/help/repository/PR-review-required-dismissals.png)
1. Optionally, enable required status checks.
   - [**Require status checks to pass before merging**] を選択します。 ![必須ステータスチェックのオプション](/assets/images/help/repository/required-status-checks.png)
   - Optionally, to ensure that pull requests are tested with the latest code on the protected branch, select **Require branches to be up to date before merging**. ![必須ステータスのチェックボックス、ゆるい、または厳格な](/assets/images/help/repository/protecting-branch-loose-status.png)
   - 使用可能なステータスチェックのリストから、必須とするものを選択します。 ![利用可能なステータスチェックの一覧](/assets/images/help/repository/required-statuses-list.png)
1. Optionally, select **Require signed commits**. ![[Require signed commits] オプション](/assets/images/help/repository/require-signed-commits.png)
1. Optionally, select **Require linear history**. ![必須の直線状の履歴オプション](/assets/images/help/repository/required-linear-history.png)
1. オプションとして、[**Include administrators**] を選択します。 ![[Include administrators] チェックボックス](/assets/images/help/repository/include-admins-protected-branches.png)
1. Optionally,{% if currentVersion == "free-pro-team@latest" %} if your repository is owned by an organization using {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %},{% endif %} enable branch restrictions.
   - Select **Restrict who can push to matching branches**. ![ブランチ制限のチェックボックス](/assets/images/help/repository/restrict-branch.png)
   - Search for and select the people, teams, or apps who will have permission to push to the protected branch. ![ブランチ制限の検索](/assets/images/help/repository/restrict-branch-search.png)
1. Optionally, under "Rules applied to everyone including administrators", select **Allow force pushes**. ![フォースプッシュオプションを許可する](/assets/images/help/repository/allow-force-pushes.png)
1. Optionally, select **Allow deletions**. ![ブランチ削除オプションを許可する](/assets/images/help/repository/allow-branch-deletions.png)
1. ** Create（作成）**をクリックしてください。

### Editing a branch protection rule

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. To the right of the branch protection rule you want to edit, click **Edit**. ![編集ボタン](/assets/images/help/repository/edit-branch-protection-rule.png)
1. Make your desired changes to the branch protection rule.
1. [**Save changes**] をクリックします。 ![[Edit message] ボタン](/assets/images/help/repository/save-branch-protection-rule.png)

### Deleting a branch protection rule

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. To the right of the branch protection rule you want to delete, click **Delete**. ![削除ボタン](/assets/images/help/repository/delete-branch-protection-rule.png)
