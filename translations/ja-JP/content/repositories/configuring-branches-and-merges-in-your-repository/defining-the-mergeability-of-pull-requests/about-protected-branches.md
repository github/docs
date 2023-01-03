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
ms.openlocfilehash: 8ec8ac1b43eacc64f44cf785f66a370466bbae8b
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111570'
---
## ブランチ保護ルールについて

ブランチ保護ルールを作成することにより、コラボレータがリポジトリ内のブランチに変更をプッシュする前に、特定のワークフローまたは要件を適用できます。これには、プルリクエストのブランチへのマージが含まれます。

デフォルト設定では、各ブランチ保護ルールは、一致するブランチへのフォースプッシュを無効にし、一致するブランチが削除されないようにします。 必要に応じて、これらの制限を無効にし、追加のブランチ保護設定を有効にすることができます。

{% ifversion bypass-branch-protections %}既定では、ブランチ保護ルールの制限は、リポジトリの管理者アクセス許可持つユーザーまたは "ブランチ保護をバイパスする" アクセス許可を持つカスタム ロールには適用されません。 必要に応じて、管理者および "ブランチ保護をバイパスする" アクセス許可を持つロールにも、制限を適用できます。 詳しくは、「[Organization のカスタム リポジトリ ロールの管理](/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)」をご覧ください。
{% else %}既定では、ブランチ保護ルールの制限は、リポジトリの管理者アクセス許可を持つユーザーには適用されません。 必要に応じて、管理者を含めることもできます。{% endif %}

{% data reusables.repositories.branch-rules-example %} ブランチ名のパターンの詳細については、「[ブランチ保護規則を管理する](/github/administering-a-repository/managing-a-branch-protection-rule)」を参照してください。

{% data reusables.pull_requests.you-can-auto-merge %}

## ブランチ保護設定について

ブランチ保護ルールごとに、次の設定を有効にするか無効にするかを選択できます。
- [[Require pull request reviews before merging]\(マージ前に pull request レビュー必須\)](#require-pull-request-reviews-before-merging)
- [マージ前にステータスチェック必須](#require-status-checks-before-merging)
- [[Require conversation resolution before merging]\(マージ前に会話の解決必須\)](#require-conversation-resolution-before-merging)
- [[Require signed commits]\(署名済みコミット必須\)](#require-signed-commits)
- [[Require linear history]\(直線状の履歴必須\)](#require-linear-history) {% ifversion fpt or ghec %}
- [マージ キュー必須](#require-merge-queue) {% endif %} {%- ifversion required-deployments %}
- [マージの前にデプロイが成功する必要がある](#require-deployments-to-succeed-before-merging) {%- endif %} {%- ifversion lock-branch %}
- [ブランチをロックする](#lock-branch) {%- endif %} {% ifversion bypass-branch-protections %}- [上の設定のバイパスを許可しない](#do-not-allow-bypassing-the-above-settings){% else %}- [管理者を含める](#include-administrators){% endif %}
- [[Restrict who can push to matching branches]\(一致するブランチにプッシュできるユーザーを制限\)](#restrict-who-can-push-to-matching-branches)
- [[Allow force pushes]\(フォース プッシュを許可\)](#allow-force-pushes)
- [[Allow deletions]\(削除を許可\)](#allow-deletions)

ブランチ保護を設定する方法の詳細については、「[ブランチ保護規則を管理する](/github/administering-a-repository/managing-a-branch-protection-rule)」を参照してください。

### マージ前に Pull Request レビュー必須

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

必須レビューを有効にした場合、コラボレータは、書き込み権限を持つ必要な人数のレビュー担当者により承認されたプルリクエストからしか、保護されたブランチに変更をプッシュできなくなります。

管理者権限を持つユーザーがレビューで **[Request changes]\(変更の要求\)** オプションを選択した場合、pull request をマージするためには、そのユーザーがその pull request を承認する必要があります。 プルリクエストへの変更をリクエストしたレビュー担当者の手が空いていない場合、そのリポジトリに書き込み権限を持つ人が、ブロックしているレビューを却下できます。

{% data reusables.repositories.review-policy-overlapping-commits %}

コラボレータが保留中または拒否されたレビューのプルリクエストを保護されたブランチにマージしようとすると、コラボレータにエラーメッセージが届きます。

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

必要に応じて、コミットがプッシュされた際に古いプルリクエストを却下できます。 コードを承認されたプルリクエストに変更するコミットがプッシュされた場合、その承認は却下され、プルリクエストはマージできません。 これは、ベースブランチをプルリクエストのブランチにマージするなど、コードを変更しないコミットをコラボレータがプッシュする場合には適用されません。 ベース ブランチの詳細については、「[pull request について](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)」を参照してください。

必要に応じて、プルリクエストレビューを却下する権限を、特定の人物またはチームに限定できます。 詳細については、「[プル リクエスト レビューの却下](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)」を参照してください。

必要に応じて、コードオーナー'からのレビューを必須にすることもできます。 この場合、コードオーナーのコードに影響するプルリクエストは、保護されたブランチにプルリクエストをマージする前に、そのコードオーナーから承認される必要があります。

{% ifversion last-pusher-require-approval %}必要に応じて、pull request をマージする前に、最後のユーザー以外のユーザーがブランチへのプッシュを承認することを要求できます。 これにより、保護されたブランチにマージされる前に、pull request の最終的な状態を複数のユーザーが確認できます。 この機能を有効にした場合、必要な承認ブランチ保護に関係なく、変更をプッシュする最後のユーザーが承認を必要とします。 pull request を既にレビューしているユーザーは、最後のプッシュの後でもう一度承認して、この要件を満たすことができます。
{% endif %}

### マージ前にステータスチェック必須

必須ステータスチェックにより、コラボレータが保護されたブランチに変更を加える前に、すべての必須 CI テストにパスしていることが保証されます。 詳細は「<a href="/articles/configuring-protected-branches/">保護されたブランチを設定する</a>」および「<a href="/articles/enabling-required-status-checks">必須ステータスチェックを有効にする</a>」を参照してください。 詳細については、「[ステータスチェックについて](/github/collaborating-with-issues-and-pull-requests/about-status-checks)」を参照してください。

ステータス チェック必須を有効にする前に、コミット ステータス API を使うようにリポジトリを構成する必要があります。 詳しくは、REST API のドキュメントの「[コミットのステータス](/rest/commits/statuses)」をご覧ください。

ステータスチェック必須を有効にすると、すべてのステータスチェック必須がパスしないと、コラボレータは保護されたブランチにマージできません。 必須ステータスチェックをパスしたら、コミットを別のブランチにプッシュしてから、マージするか、保護されたブランチに直接プッシュする必要があります。

リポジトリへの書き込み権限があるユーザーまたは統合は、リポジトリのステータス チェックを任意の状態に設定できます{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}が、場合によっては特定の {% data variables.product.prodname_github_app %} のステータス チェックのみを受け入れる必要があります。 必須状態チェックを追加するとき、このチェックを最近設定したアプリを、状態更新が想定されるソースとして選択できます{% endif %}。状態が他のユーザーまたは統合によって設定されている場合、マージは許可されません。 [any source]\(任意のソース\) を選択した場合は、マージ ボックスに一覧表示されている各状態の作成者を引き続き手動で確認することができます。

必須ステータスチェックのタイプは、[loose] (寛容)、[strict] (厳格) のいずれかに設定できます。 選択した必須ステータスチェックのタイプにより、マージする前にブランチをベースブランチとともに最新にする必要があるかどうかが決まります。

| 必須ステータスチェックのタイプ | 設定 | マージの要件 | 考慮事項 |
| --- | --- | --- | --- |
| **Strict** | **[Require branches to be up to date before merging]\(マージ前にブランチの最新状態必須\)** チェックボックスをオンにします。 | ブランチは、マージ前にベース ブランチと同じ最新状態である **必要があります**。 | これは、必須ステータスチェックのデフォルト動作です。 他のコラボレーターが、保護された base ブランチにプルリクエストをマージした後に、あなたは head ブランチをアップデートする必要が出てくる可能性があるため、追加のビルドが必要になるかもしれません。|
| **[Loose]\(寛容\)** | **[Require branches to be up to date before merging]\(マージ前にブランチの最新状態必須\)** チェックボックスをオンに **しません**。 | ブランチは、マージ前にベース ブランチと同じ最新状態である必要は **ありません**。 | 他のコラボレーターがプルリクエストをマージした後に head ブランチをアップデートする必要はないことから、必要となるビルドは少なくなります。 base ブランチと競合する変更がある場合、ブランチをマージした後のステータスチェックは失敗する可能性があります。 |
| **Disabled** | **[Require status checks to pass before merging]\(マージ前に状態チェック合格必須\)** チェックボックスをオンに **しません**。 | ブランチのマージについての制限はない | 必須ステータスチェックが有効化されていない場合、base ブランチにあわせてアップデートされているかどうかに関わらず、コラボレーターはいつでもブランチをマージできます。 このことで、変更の競合が発生する可能性が高まります。

トラブルシューティングの情報については、「[必須状態チェックのトラブルシューティング](/github/administering-a-repository/troubleshooting-required-status-checks)」を参照してください。

### [Require conversation resolution before merging]\(マージ前に会話の解決必須\)

pull request を保護されたブランチにマージする前に、関連するすべてのコメントを解決する必要があります。 これにより、マージ前にすべてのコメントが対処または確認されます。

### 署名済みコミットの必須化

コミット署名の必須化をブランチで有効にすると、共同作成者{% ifversion fpt or ghec %}とボット{% endif %}は、署名されて検証されたコミットのみをブランチにプッシュできます。 詳細については、「[コミット署名の検証について](/articles/about-commit-signature-verification)」を参照してください。

{% note %}

{% ifversion fpt or ghec %} **注:** 

* 警戒モード (コミットが常に署名される) を有効にした場合、{% data variables.product.prodname_dotcom %} によって [Partially verified]\(部分的に検証済み\) と識別されたすべてのコミットは、署名済みコミットが必須であるブランチで許可されます。 警戒モードの詳細については、「[すべてのコミットの検証状態を表示する](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)」を参照してください。
* コラボレーターが未署名のコミットを、コミット署名必須のブランチにプッシュする場合、コラボレーターは検証済み署名を含めるためにコミットをリベースしてから、書き直したコミットをブランチにフォース プッシュする必要があります。

{% else %} **注:** コラボレーターが未署名のコミットを、コミット署名必須のブランチにプッシュする場合、コラボレーターは検証済み署名を含めるためにコミットをリベースしてから、書き直したコミットをブランチにフォース プッシュする必要があります。
{% endif %}

{% endnote %}

コミットが署名および検証されている場合は、いつでもローカルコミットをブランチにプッシュできます。 {% ifversion fpt or ghec %}{% data variables.product.product_name %} の pull request を使用して、署名および検証されているコミットをブランチにマージすることもできます。 ただし、pull request の作者でない限り、pull request をスカッシュして {% data variables.product.product_name %} のブランチにマージすることはできません。{% else %}ただし、pull request を {% data variables.product.product_name %} のブランチにマージすることはできません。{% endif %}pull request をローカルで{% ifversion fpt or ghec %}スカッシュおよび{% endif %}マージできます。 詳しくは、「[pull request をローカルでチェックアウトする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)」を参照してください。

{% ifversion fpt or ghec %} マージ方法の詳細については、「[{% data variables.product.prodname_dotcom %} 上のマージ方法について](/github/administering-a-repository/about-merge-methods-on-github)」を参照してください。{% endif %}

### 直線状の履歴必須

直線状のコミット履歴を強制すると、コラボレータがブランチにマージコミットをプッシュすることを防げます。 つまり、保護されたブランチにマージされたプルリクエストは、squash マージまたはリベースマージを使用する必要があります。 厳格な直線状のコミット履歴は、Teamが変更をより簡単にたどるために役立ちます。 マージ方法の詳細については、「[pull request のマージについて](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)」を参照してください。

直線状のコミット履歴をリクエストする前に、リポジトリで squash マージまたはリベースマージを許可する必要があります。 詳細については、「[pull request マージの構成](/github/administering-a-repository/configuring-pull-request-merges)」を参照してください。

{% ifversion fpt or ghec %}
### [Require merge queue]\(マージ キュー必須\)

{% data reusables.pull_requests.merge-queue-beta %} {% data reusables.pull_requests.merge-queue-overview %}
 
{% data reusables.pull_requests.merge-queue-merging-method %} {% data reusables.pull_requests.merge-queue-references %}

{% endif %}

### [Require deployments to succeed before merging]\(マージ前にデプロイ成功必須\)

ブランチをマージする前に、変更が特定の環境に正常にデプロイされる必要があるように設定できます。 たとえば、この規則を使用し、変更がステージング環境に正常にデプロイされた後で、変更を既定のブランチにマージされるようにすることができます。

{% ifversion lock-branch %}
### ブランチをロックする

ブランチをロックすると、ブランチに対してコミットを行えなくなります。 既定では、フォークされたリポジトリでは、アップストリーム リポジトリからの同期はサポートされていません。 **[フォークの同期を許可する]** を有効にして、フォークのブランチへの他のコントリビューションを防ぎながら、アップストリーム リポジトリから変更をプルできます。
{%  endif %}

{% ifversion bypass-branch-protections %}### 上の設定のバイパスを許可しない{% else %}
### 管理者を含める{% endif %}

{% ifversion bypass-branch-protections %}既定では、ブランチ保護ルールの制限は、リポジトリの管理者アクセス許可持つユーザーまたはリポジトリでの "ブランチ保護をバイパスする" アクセス許可を持つカスタム ロールには適用されません。 

この設定を有効にして、管理者および "ブランチ保護をバイパスする" アクセス許可を持つロールにも、制限を適用できます。  詳しくは、「[Organization のカスタム リポジトリ ロールの管理](/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)」をご覧ください。
{% else %}既定では、保護されたブランチのルールは、リポジトリの管理者アクセス許可を持つユーザーには適用されません。 この設定を有効化すると、保護されたブランチのルールに管理者を含めることができます。{% endif %}

### 一致するブランチにプッシュできるユーザを制限

{% ifversion fpt or ghec %} リポジトリが組織によって所有される場合は、{% data variables.product.prodname_team %} または {% data variables.product.prodname_ghe_cloud %} を使用してブランチの制限を有効にできます。
{% endif %}

ブランチ制限を有効にすると、権限を与えられたユーザ、チーム、またはアプリのみが保護されたブランチにプッシュできます。 保護されたブランチの設定で、保護されたブランチへのプッシュアクセスを使用して、ユーザ、チーム、またはアプリを表示および編集できます。 状態チェックが必須である場合は、必須チェックに失敗すると、保護されたブランチにプッシュするアクセス許可を持つユーザー、チーム、アプリでも、ブランチにマージすることはできません。 pull request が必須な場合は、保護されたブランチにプッシュするアクセス許可を持つユーザー、チーム、アプリでも pull request を作成する必要があります。

{% ifversion restrict-pushes-create-branch %} 必要に応じて、規則と一致するブランチの作成に同じ制限を適用できます。 たとえば、`release` という語を含むブランチに特定のチームのみがプッシュすることを許可する規則を作成した場合は、そのチームのメンバーしか `release` という語を含む新しいブランチを作成できません。
{% endif %}

保護されたブランチに対するプッシュ アクセスを付与したり、一致するブランチを作成するアクセス許可を付与したりできるのは、リポジトリへの書き込みアクセスを持つ、ユーザー、チーム、またはインストール済みの {% data variables.product.prodname_github_apps %} のみです。 リポジトリへの管理者権限を持つユーザーとアプリは、保護されたブランチへのプッシュ{% ifversion restrict-pushes-create-branch %}や一致するブランチの作成{% endif %}をいつでも行うことができます。

### フォースプッシュを許可

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}既定では、{% data variables.product.product_name %} は、すべての保護されたブランチでのフォース プッシュをブロックします。 保護されたブランチへのフォース プッシュを有効にするとき、フォース プッシュを行うことができる 2 つのグループのいずれかを選択できます。

1. リポジトリに対して少なくとも書き込みアクセス許可を持つすべてのユーザー (管理者権限を持つユーザーを含む) が、ブランチにフォース プッシュできるようにします。
1. 特定のユーザーまたはチームのみがブランチにフォース プッシュできるようにします。

誰かがブランチにフォース プッシュした場合、フォース プッシュによって、他のコラボレーターがそれに基づいて作業しているコミットを上書きする可能性があります。 ユーザーが競合をマージしたり pull request を破損させたりした可能性があります。

{% else %} 既定では、{% data variables.product.product_name %} はすべての保護されたブランチでフォース プッシュをブロックします。 保護されたブランチのフォースプッシュを有効にすると、少なくともリポジトリへの書き込み権限を持つユーザは、管理者権限を持つブランチを含め、ブランチをフォースプッシュできます。 誰かがブランチにフォース プッシュした場合、フォース プッシュによって、他のコラボレーターがそれに基づいて作業しているコミットを上書きする可能性があります。 ユーザーが競合をマージしたり pull request を破損させたりした可能性があります。
{% endif %}

フォースプッシュを有効化しても、他のブランチ保護ルールは上書きされません。 たとえば、ブランチに直線状のコミット履歴が必要な場合、そのブランチにマージコミットをフォースプッシュすることはできません。

{% ifversion ghes or ghae %}サイト管理者がリポジトリ内のすべてのブランチへのフォース プッシュをブロックしている場合、保護されたブランチのフォース プッシュを有効にすることはできません。 詳細については、「[個人アカウントまたは組織が所有するリポジトリへのフォース プッシュをブロックする](/enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)」を参照してください。

サイト管理者がデフォルトブランチへのフォースプッシュのみをブロックしている場合、他の保護されたブランチに対してフォースプッシュを有効にできます。{% endif %}

### 削除を許可

デフォルトでは、保護されたブランチは削除できません。 保護されたブランチの削除を有効にすると、少なくともリポジトリへの書き込み権限を持つユーザは、ブランチを削除できます。
