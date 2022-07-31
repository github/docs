---
title: ブランチ保護ルールを管理する
intro: 保護されたブランチにマージされる前に、すべてのプルリクエストでレビューへの承認またはステータスチェックへのパスを必須とするなど、1 つ以上のブランチに対して特定のワークフローを強制するため、ブランチ保護ルールを作成できます。
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
  - /github/administering-a-repository/managing-a-branch-protection-rule
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
topics:
  - Repositories
shortTitle: Branch protection rule
---

## ブランチ保護ルールについて

{% data reusables.repositories.branch-rules-example %}

ワイルドカード構文 `*` で、リポジトリ内の現在および将来のブランチすべてに対するルールを作成できます。 {% data variables.product.company_short %}は、`File.fnmatch` 構文に `File::FNM_PATHNAME` フラグを使用するので、ワイルドカードはディレクトリの区切り文字 (`/`) には一致しません。 たとえば、`qa/*` は、`qa/` で始まり、1 つのスラッシュが含まれるすべてのブランチにマッチします。 `qa/**/*` とすると、複数のスラッシュにマッチします。また、より多くのブランチにマッチさせるため、`qa` の文字列を `qa**/**/*` とすることもできます。 ブランチのルールに関する構文オプションの詳しい情報については、 [fnmatch ドキュメンテーション](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)を参照してください。

リポジトリが同じブランチに影響する複数の保護されたブランチのルールを持っているなら、特定のブランチ名を含むルールがもっとも高い優先順位を持ちます。 同じ特定のブランチ名を参照する保護されたブランチのルールが複数あるなら、最初に作成されたブランチルールが高い優先順位を持ちます。

`*`、`?`、`]`などの特殊文字を含む保護されたブランチのルールは、作成された順序で適用されるので、これらの文字を持つ古いルールが高い優先順位を持ちます。

既存のブランチのルールに例外を作成するため、特定のブランチ名に対するルールなど、優先度の高いブランチ保護ルールを新しく作成できます。

For more information about each of the available branch protection settings, see "[About protected branches](/github/administering-a-repository/about-protected-branches)."

## ブランチ保護ルールを作成する

ブランチのルールを作成する際に、指定したブランチがリポジトリにしている必要はありません。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5506 %}
1. Optionally, enable required pull requests.
   - Under "Protect matching branches", select **Require a pull request before merging**. ![プルリクエストレビューの制限チェックボックス](/assets/images/help/repository/PR-reviews-required-updated.png)
   - Optionally, to require approvals before a pull request can be merged, select **Require approvals**, click the **Required number of approvals before merging** drop-down menu, then select the number of approving reviews you would like to require on the branch. ![必須とするレビュー承認の数を選択するドロップダウンメニュー](/assets/images/help/repository/number-of-required-review-approvals-updated.png)
{% else %}
1. 必要に応じて、Pull Requestレビュー必須を有効化します。
   - [Protect matching branches] で、[**Require pull request reviews before merging**] を選択します。 ![プルリクエストレビューの制限チェックボックス](/assets/images/help/repository/PR-reviews-required.png)
   - Click the **Required approving reviews** drop-down menu, then select the number of approving reviews you would like to require on the branch. ![必須とするレビュー承認の数を選択するドロップダウンメニュー](/assets/images/help/repository/number-of-required-review-approvals.png)
{% endif %}
   - コードを変更するコミットがブランチにプッシュされたときにプルリクエストの承認レビューを却下する場合は、[**Dismiss stale pull request approvals when new commits are pushed**] を選択します。 ![新たなコミットがチェックボックスにプッシュされた際に古いプルリクエストの承認を却下するチェックボックス](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - 指定されたオーナーのコードにプルリクエストが影響する場合に、コードオーナーからのレビューを必須にする場合は、[**Require review from Code Owners**] を選択します。 詳細は「[コードオーナーについて](/github/creating-cloning-and-archiving-repositories/about-code-owners)」を参照してください。 ![コードオーナーのレビューを必要とする](/assets/images/help/repository/PR-review-required-code-owner.png)
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5611 %}
   - Optionally, to allow specific actors to push code to the branch without creating pull requests when they're required, select **Allow specified actors to bypass required pull requests**. Then, search for and select the actors who should be allowed to skip creating a pull request. ![Allow specific actors to bypass pull request requirements checkbox]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-bypass-requirements-with-apps.png){% else %}(/assets/images/help/repository/PR-bypass-requirements.png){% endif %}
{% endif %}
   - リポジトリが Organization の一部である場合、[**Restrict who can dismiss pull request reviews**] を選択します。 Then, search for and select the actors who are allowed to dismiss pull request reviews. 詳しい情報については[プルリクエストレビューの却下](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)を参照してください。 ![Restrict who can dismiss pull request reviews checkbox]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-review-required-dismissals-with-apps.png){% else %}(/assets/images/help/repository/PR-review-required-dismissals.png){% endif %}
1. 必要に応じて、ステータスチェック必須を有効化します。 詳しい情報については[ステータスチェックについて](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)を参照してください。
   - [**Require status checks to pass before merging**] を選択します。 ![必須ステータスチェックのオプション](/assets/images/help/repository/required-status-checks.png)
   - プルリクエストを保護されたブランチの最新コードで確実にテストしたい場合は、[**Require branches to be up to date before merging**] を選択します。 ![必須ステータスのチェックボックス、ゆるい、または厳格な](/assets/images/help/repository/protecting-branch-loose-status.png)
   - Search for status checks, selecting the checks you want to require. ![Search interface for available status checks, with list of required checks](/assets/images/help/repository/required-statuses-list.png)
1. Optionally, select **Require conversation resolution before merging**. ![Require conversation resolution before merging option](/assets/images/help/repository/require-conversation-resolution.png)
1. 必要に応じて、[**Require signed commits**] を選択します。 ![[Require signed commits] オプション](/assets/images/help/repository/require-signed-commits.png)
1. 必要に応じて、[**Require linear history**] を選択します。 ![必須の直線状の履歴オプション](/assets/images/help/repository/required-linear-history.png)
{%- ifversion fpt or ghec %}
1. Optionally, to merge pull requests using a merge queue, select **Require merge queue**. {% data reusables.pull_requests.merge-queue-references %} ![Require merge queue option](/assets/images/help/repository/require-merge-queue.png)
  {% tip %}

  **Tip:** The pull request merge queue feature is currently in limited public beta and subject to change. Organizations owners can request early access to the beta by joining the [waitlist](https://github.com/features/merge-queue/signup).

  {% endtip %}
{%- endif %}
{%- ifversion required-deployments %}
1. Optionally, to choose which environments the changes must be successfully deployed to before merging, select **Require deployments to succeed before merging**, then select the environments. ![Require successful deployment option](/assets/images/help/repository/require-successful-deployment.png)
{%- endif %}
1. Optionally, select **Apply the rules above to administrators**. ![Apply the rules above to administrators checkbox](/assets/images/help/repository/include-admins-protected-branches.png)
1. 必要に応じて、{% ifversion fpt or ghec %}{% data variables.product.prodname_team %} または {% data variables.product.prodname_ghe_cloud %} を使用する Organization がリポジトリを所有している場合には、{% endif %}ブランチ制限を有効化します。
   - [**Restrict who can push to matching branches**] を選択します。 ![Branch restriction checkbox](/assets/images/help/repository/restrict-branch.png){% ifversion restrict-pushes-create-branch %}
   - Optionally, to also restrict the creation of matching branches, select **Restrict pushes that create matching branches**. ![Branch creation restriction checkbox](/assets/images/help/repository/restrict-branch-create.png){% endif %}
   - Search for and select the people, teams, or apps who will have permission to push to the protected branch or create a matching branch. ![Branch restriction search]{% ifversion restrict-pushes-create-branch %}(/assets/images/help/repository/restrict-branch-search-with-create.png){% else %}(/assets/images/help/repository/restrict-branch-search.png){% endif %}
1. 必要に応じて、[Rules applied to everyone including administrators] で [**Allow force pushes**] を選択します。 ![フォースプッシュオプションを許可する](/assets/images/help/repository/allow-force-pushes.png)
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5624 %}
  Then, choose who can force push to the branch.
    - Select **Everyone** to allow everyone with at least write permissions to the repository to force push to the branch, including those with admin permissions.
    - Select **Specify who can force push** to allow only specific actors to force push to the branch. Then, search for and select those actors. ![Screenshot of the options to specify who can force push]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/allow-force-pushes-specify-who-with-apps.png){% else %}(/assets/images/help/repository/allow-force-pushes-specify-who.png){% endif %}
{% endif %}

    For more information about force pushes, see "[Allow force pushes](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches/#allow-force-pushes)."
1. 必要に応じて、[**Allow deletions**] を選択します。 ![ブランチ削除オプションを許可する](/assets/images/help/repository/allow-branch-deletions.png)
1. ** Create（作成）**をクリックしてください。

## ブランチ保護ルールを編集する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. 編集する保護ルールの右にある [**Edit**] をクリックします。 ![編集ボタン](/assets/images/help/repository/edit-branch-protection-rule.png)
1. ブランチ保護ルールを自由に変更してください。
1. [**Save changes**] をクリックします。 ![[Edit message] ボタン](/assets/images/help/repository/save-branch-protection-rule.png)

## ブランチ保護ルールを削除する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. 削除する保護ルールの右にある [**Delete**] をクリックします。 ![削除ボタン](/assets/images/help/repository/delete-branch-protection-rule.png)
