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
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
topics:
  - Repositories
---

### ブランチ保護ルールについて

{% data reusables.repositories.branch-rules-example %}

ワイルドカード構文 `*` で、リポジトリ内の現在および将来のブランチすべてに対するルールを作成できます。 {% data variables.product.company_short %}は、`File.fnmatch` 構文に `File::FNM_PATHNAME` フラグを使用するので、ワイルドカードはディレクトリの区切り文字 (`/`) には一致しません。 たとえば、`qa/*` は、`qa/` で始まり、1 つのスラッシュが含まれるすべてのブランチにマッチします。 `qa/**/*` とすると、複数のスラッシュにマッチします。また、より多くのブランチにマッチさせるため、`qa` の文字列を `qa**/**/*` とすることもできます。 ブランチのルールに関する構文オプションの詳しい情報については、 [fnmatch ドキュメンテーション](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)を参照してください。

リポジトリが同じブランチに影響する複数の保護されたブランチのルールを持っているなら、特定のブランチ名を含むルールがもっとも高い優先順位を持ちます。 同じ特定のブランチ名を参照する保護されたブランチのルールが複数あるなら、最初に作成されたブランチルールが高い優先順位を持ちます。

`*`、`?`、`]`などの特殊文字を含む保護されたブランチのルールは、作成された順序で適用されるので、これらの文字を持つ古いルールが高い優先順位を持ちます。

既存のブランチのルールに例外を作成するため、特定のブランチ名に対するルールなど、優先度の高いブランチ保護ルールを新しく作成できます。

使用できるブランチ保護設定の各ルールに関する詳しい情報については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches)」を参照してください。

### ブランチ保護ルールを作成する

ブランチのルールを作成する際に、指定したブランチがリポジトリにしている必要はありません。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
1. 必要に応じて、Pull Requestレビュー必須を有効化します。
   - [Protect matching branches] で、[**Require pull request reviews before merging**] を選択します。 ![プルリクエストレビューの制限チェックボックス](/assets/images/help/repository/PR-reviews-required.png)
   - [**Required approving reviews**] ドロップダウンメニューをクリックし、ブランチで必須にする承認レビューの数を選択します。 ![必須とするレビュー承認の数を選択するドロップダウンメニュー](/assets/images/help/repository/number-of-required-review-approvals.png)
   - コードを変更するコミットがブランチにプッシュされたときにプルリクエストの承認レビューを却下する場合は、[**Dismiss stale pull request approvals when new commits are pushed**] を選択します。 ![新たなコミットがチェックボックスにプッシュされた際に古いプルリクエストの承認を却下するチェックボックス](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - 指定されたオーナーのコードにプルリクエストが影響する場合に、コードオーナーからのレビューを必須にする場合は、[**Require review from Code Owners**] を選択します。 詳細は「[コードオーナーについて](/github/creating-cloning-and-archiving-repositories/about-code-owners)」を参照してください。 ![コードオーナーのレビューを必要とする](/assets/images/help/repository/PR-review-required-code-owner.png)
   - リポジトリが Organization の一部である場合、[**Restrict who can dismiss pull request reviews**] を選択します。 そして、Pull Requestレビューを却下できるユーザまたは Team を検索して選択します。 詳しい情報については[プルリクエストレビューの却下](/github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review)を参照してください。 ![[Restrict who can dismiss pull request reviews] チェックボックス](/assets/images/help/repository/PR-review-required-dismissals.png)
1. 必要に応じて、ステータスチェック必須を有効化します。
   - [**Require status checks to pass before merging**] を選択します。 ![必須ステータスチェックのオプション](/assets/images/help/repository/required-status-checks.png)
   - プルリクエストを保護されたブランチの最新コードで確実にテストしたい場合は、[**Require branches to be up to date before merging**] を選択します。 ![必須ステータスのチェックボックス、ゆるい、または厳格な](/assets/images/help/repository/protecting-branch-loose-status.png)
   - 使用可能なステータスチェックのリストから、必須とするものを選択します。 ![利用可能なステータスチェックの一覧](/assets/images/help/repository/required-statuses-list.png)
1. 必要に応じて、[**Require signed commits**] を選択します。 ![[Require signed commits] オプション](/assets/images/help/repository/require-signed-commits.png)
1. 必要に応じて、[**Require linear history**] を選択します。 ![必須の直線状の履歴オプション](/assets/images/help/repository/required-linear-history.png)
1. オプションとして、[**Include administrators**] を選択します。 ![[Include administrators] チェックボックス](/assets/images/help/repository/include-admins-protected-branches.png)
1. 必要に応じて、{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_team %} または {% data variables.product.prodname_ghe_cloud %} を使用する Organization がリポジトリを所有している場合には、{% endif %}ブランチ制限を有効化します。
   - [**Restrict who can push to matching branches**] を選択します。 ![ブランチ制限のチェックボックス](/assets/images/help/repository/restrict-branch.png)
   - 保護されたブランチにプッシュできる権限を持つユーザ、Team、またはアプリを検索し、選択します。 ![ブランチ制限の検索](/assets/images/help/repository/restrict-branch-search.png)
1. 必要に応じて、[Rules applied to everyone including administrators] で [**Allow force pushes**] を選択します。 ![フォースプッシュオプションを許可する](/assets/images/help/repository/allow-force-pushes.png)
1. 必要に応じて、[**Allow deletions**] を選択します。 ![ブランチ削除オプションを許可する](/assets/images/help/repository/allow-branch-deletions.png)
1. ** Create（作成）**をクリックしてください。

### ブランチ保護ルールを編集する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. 編集する保護ルールの右にある [**Edit**] をクリックします。 ![編集ボタン](/assets/images/help/repository/edit-branch-protection-rule.png)
1. ブランチ保護ルールを自由に変更してください。
1. [**Save changes**] をクリックします。 ![[Edit message] ボタン](/assets/images/help/repository/save-branch-protection-rule.png)

### ブランチ保護ルールを削除する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. 削除する保護ルールの右にある [**Delete**] をクリックします。 ![削除ボタン](/assets/images/help/repository/delete-branch-protection-rule.png)
