---
title: ブランチ保護ルールを管理する
intro: ブランチ保護ルールを作成して、1 つ以上のブランチに特定のワークフローを強制することができます。たとえば、承認レビューを要求したり、保護されたブランチにマージされるすべての pull request について状態チェックを渡したりすることができます。
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
ms.openlocfilehash: aed3ab7599d8c74c16d95e4667e94aa3264c9491
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614176'
---
## ブランチ保護ルールについて

{% data reusables.repositories.branch-rules-example %}

ワイルドカード構文 `*` を使用して、リポジトリ内の現在および将来のブランチすべてに対する規則を作成できます。 {% data variables.product.company_short %} は `File::FNM_PATHNAME` フラグを `File.fnmatch` 構文で使用するため、ワイルドカードがディレクトリ区切り記号 (`/`) と一致しません。 たとえば、`qa/*` は、`qa/` で始まり、1 つのスラッシュを含むすべてのブランチと一致します。 複数のスラッシュを含めるには `qa/**/*` を使用します。また、`qa**/**/*` を使用して `qa` 文字列を拡張すると、規則をさらに包括的にすることができます。 ブランチ規則の構文オプションの詳細については、[fnmatch のドキュメント](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)を参照してください。

リポジトリが同じブランチに影響する複数の保護されたブランチのルールを持っているなら、特定のブランチ名を含むルールがもっとも高い優先順位を持ちます。 同じ特定のブランチ名を参照する保護されたブランチのルールが複数あるなら、最初に作成されたブランチルールが高い優先順位を持ちます。

`*`、`?`、`]` などの特殊文字を含む、保護されたブランチのルールは、作成された順序で適用されるので、これらの文字が含まれる規則は古い方が高い優先順位を持ちます。

既存のブランチのルールに例外を作成するため、特定のブランチ名に対するルールなど、優先度の高いブランチ保護ルールを新しく作成できます。

使用可能なブランチ保護設定それぞれの詳細については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches)」を参照してください。

## ブランチ保護ルールを作成する

ブランチのルールを作成する際に、指定したブランチがリポジトリにしている必要はありません。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %} {% data reusables.repositories.add-branch-protection-rules %} {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5506 %}
1. 必要に応じて、必須の pull request を有効化します。
   - [Protect matching branches]\(一致するブランチを保護する\) で、 **[Require a pull request before merging]\(マージ前に pull request 必須\)** を選択します。
     ![pull request レビュー制限のチェックボックス](/assets/images/help/repository/PR-reviews-required-updated.png)
   - 必要に応じて、pull request のマージ前の承認を必須にするには、 **[Require approvals]\(承認必須\)** を選択し、 **[Required number of approvals before merging]\(マージ前に必要な承認の数\)** ドロップダウン メニューをクリックし、ブランチで必須にする承認レビューの数を選択します。
     ![必要なレビュー承認数を選択するドロップダウン メニュー](/assets/images/help/repository/number-of-required-review-approvals-updated.png) {% else %}
1. 必要に応じて、Pull Requestレビュー必須を有効化します。
   - [Protect matching branches]\(一致するブランチを保護する\) で、 **[Require pull request reviews before merging]\(マージ前に pull request レビュー必須\)** を選択します。
     ![pull request レビュー制限のチェックボックス](/assets/images/help/repository/PR-reviews-required.png)
   - **[Required approving reviews]\(承認レビュー必須\)** ドロップダウン メニューをクリックし、ブランチで必要とする承認レビューの数を選択します。 
     ![必要なレビュー承認数を選択するドロップダウン メニュー](/assets/images/help/repository/number-of-required-review-approvals.png) {% endif %}
   - 必要に応じて、コードを変更するコミットがブランチにプッシュされたときに pull request 承認レビューを却下するには、 **[Dismiss stale pull request approvals when new commits are pushed]\(新しいコミットがプッシュされたときに古い pull request 承認を却下する\)** を選択します。
     ![新たなコミットがプッシュされたときに古い pull request の承認を却下するチェックボックス](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - 必要に応じて、pull request が影響するコードに所有者が指定されているとき、コード所有者のレビューを必須にするには、 **[Require review from Code Owners]\(コード所有者のレビュー必須\)** を選択します。 詳細については、「[コードオーナーについて](/github/creating-cloning-and-archiving-repositories/about-code-owners)」を参照してください。
     ![[Require review from code owners]\(コード所有者のレビュー必須\)](/assets/images/help/repository/PR-review-required-code-owner.png) {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5611 %}
   - 必要に応じて、pull request が必須であるときに、特定のアクターがそれを作成せずにコードをブランチにプッシュできるようにするには、 **[Allow specified actors to bypass required pull requests]\(指定したアクターが必須 pull request をバイパスすることを許可\)** を選択します。 次に、pull request の作成をスキップすることを許可するアクターを探して選択します。
     ![特定のアクターが pull request 要件をバイパスすることを許可するチェックボックス]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-bypass-requirements-with-apps.png){% else %}(/assets/images/help/repository/PR-bypass-requirements.png){% endif %} {% endif %}
   - 必要に応じて、リポジトリが組織に含まれる場合に、 **[Restrict who can dismiss pull request reviews]\(pull request レビューを却下できるユーザーを制限\)** を選択します。 次に、pull request レビューの却下を許可するアクターを探して選択します。 詳細については、「[プル リクエスト レビューの却下](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)」を参照してください。
     ![pull request レビューを却下できるユーザーを制限するチェックボックス]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-review-required-dismissals-with-apps.png){% else %}(/assets/images/help/repository/PR-review-required-dismissals.png){% endif %}
1. 必要に応じて、ステータスチェック必須を有効化します。 詳細については、「[ステータスチェックについて](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)」を参照してください。
   - **[Require status checks to pass before merging]\(マージ前に状態チェック合格必須\)** を選択します。
     ![必須状態チェックのオプション](/assets/images/help/repository/required-status-checks.png)
   - 必要に応じて、保護されたブランチの最新コードに対して pull request を確実にテストするには、 **[Require branches to be up to date before merging]\(マージ前にブランチの最新状態必須\)** を選択します。
     ![寛容または厳格な必須状態のチェックボックス](/assets/images/help/repository/protecting-branch-loose-status.png)
   - 状態チェックを探して、必須にするチェックを選択します。
     ![使用可能な状態チェックと必須チェックの一覧を検索するインターフェイス](/assets/images/help/repository/required-statuses-list.png)
1. 必要に応じて、 **[Require conversation resolution before merging]\(マージ前に会話の解決必須\)** を選択します。
  ![[マージ前に会話の解決必須] オプション](/assets/images/help/repository/require-conversation-resolution.png)
1. 必要に応じて、 **[Require signed commits]\(署名済みコミット必須\)** を選択します。
  ![[Require signed commits]\(署名済みコミット必須\) オプション](/assets/images/help/repository/require-signed-commits.png)
1. 必要に応じて、 **[Require linear history]\(直線状の履歴必須\)** を選択します。
  ![[Require linear history]\(直線状の履歴必須\) オプション](/assets/images/help/repository/required-linear-history.png) {%- ifversion fpt or ghec %}
1. 必要に応じて、マージ キューを使用して pull request をマージするには、 **[Require merge queue]\(マージ キュー必須\)** を選択します。 {% data reusables.pull_requests.merge-queue-references %} ![[Require merge queue]\(マージ キュー必須\) オプション](/assets/images/help/repository/require-merge-queue.png) {% tip %}

  **ヒント:** 現在、pull request マージ キュー機能はパブリック ベータ版限定であり、変更される可能性があります。 Organization の所有者は、[待機リスト](https://github.com/features/merge-queue/signup)に参加することでベータへの早期アクセスを要求できます。

  {% endtip %} {%- endif %} {%- ifversion required-deployments %}
1. 必要に応じて、マージ前に変更を正常にデプロイする必要がある環境を選択するには、 **[Require deployments to succeed before merging]\(マージ前にデプロイ成功必須\)** を選択してから環境を選択します。
   ![デプロイ成功必須のオプション](/assets/images/help/repository/require-successful-deployment.png) {%- endif %}
1. 必要に応じて、{% ifversion bypass-branch-protections %} **[上の設定のバイパスを許可しない]** を選択します。
![[上の設定のバイパスを許可しない] チェックボックス](/assets/images/help/repository/do-not-allow-bypassing-the-above-settings.png){% else %} **[上のルールを管理者に適用する]** を選択します。
![[上のルールを管理者に適用する] チェックボックス](/assets/images/help/repository/include-admins-protected-branches.png){% endif %}
1. 必要に応じて、{% ifversion fpt or ghec %}リポジトリを所有する組織が {% data variables.product.prodname_team %} または {% data variables.product.prodname_ghe_cloud %} を使用する場合は、{% endif %}ブランチの制限を有効にします。
   - **[Restrict who can push to matching branches]\(一致するブランチにプッシュできるユーザーを制限\)** を選択します。
     ![ブランチ制限のチェックボックス](/assets/images/help/repository/restrict-branch.png){% ifversion restrict-pushes-create-branch %}
   - 必要に応じて、一致するブランチの作成も制限するには、 **[Restrict pushes that create matching branches]\(一致するブランチを作成するプッシュを制限する\)** を選択します。
     ![ブランチ作成制限のチェックボックス](/assets/images/help/repository/restrict-branch-create.png){% endif %}
   - 保護されたブランチにプッシュできるアクセス許可または一致するブランチを作成するアクセス許可を設定する、ユーザ、チーム、またはアプリを探して、選択します。
     ![ブランチ制限の検索]{% ifversion restrict-pushes-create-branch %}(/assets/images/help/repository/restrict-branch-search-with-create.png){% else %}(/assets/images/help/repository/restrict-branch-search.png){% endif %}
1. 必要に応じて、[Rules applied to everyone including administrators]\(管理者を含む全員に適用されるルール\) の下で **[Allow force pushes]\(フォース プッシュを許可\)** を選択します。
  ![[Allow force pushes]\(フォース プッシュを許可\) オプション](/assets/images/help/repository/allow-force-pushes.png) {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5624 %} その後、ブランチにフォース プッシュできるユーザーを選択します。
    - **[Everyone]\(すべてのユーザー\)** を選択し、リポジトリに対して少なくとも書き込みアクセス許可を持つすべてのユーザー (管理者権限を持つユーザーを含む) が、ブランチにフォース プッシュできるようにします。
    - **[Specify who can force push]\(フォース プッシュできるユーザーを指定する\)** を選択し、ブランチへのフォース プッシュを特定のアクターに許可します。 次に、そのようなアクターを探して選択します。
      ![プッシュを強制できるユーザーを指定するオプションのスクリーンショット]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/allow-force-pushes-specify-who-with-apps.png){% else %}(/assets/images/help/repository/allow-force-pushes-specify-who.png){% endif %} {% endif %}

    詳細については、「[フォース プッシュを許可](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches/#allow-force-pushes)」を参照してください。
1. 必要に応じて、 **[Allow deletions]\(削除を許可\)** を選択します。
  ![ブランチの削除を許可するオプション](/assets/images/help/repository/allow-branch-deletions.png)
1. **Create** をクリックしてください。

## ブランチ保護ルールを編集する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. 編集しようとするブランチ保護規則の右側の **[編集]** をクリックします。
  ![[編集] ボタン](/assets/images/help/repository/edit-branch-protection-rule.png)
1. ブランチ保護ルールを自由に変更してください。
1. **[変更を保存]** をクリックします。
  ![[変更を保存] ボタン](/assets/images/help/repository/save-branch-protection-rule.png)

## ブランチ保護ルールを削除する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. 削除しようとするブランチ保護規則の右側の **[削除]** をクリックします。
    ![[削除] ボタン](/assets/images/help/repository/delete-branch-protection-rule.png)
