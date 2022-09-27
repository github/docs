---
title: プルリクエストを自動的にマージする
intro: プルリクエストの自動マージを有効にすると、すべてのマージ要件が満たされたときにプルリクエストが自動的にマージされるようになり、開発速度を上げることができます。
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
shortTitle: Merge PR automatically
ms.openlocfilehash: 07069657c870751849d3b7e80c7817f908c2bda5
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147770914'
---
## 自動マージについて

pull request の自動マージが有効になっている場合は、必要なすべてのレビューが満たされ、必要なすべてのステータス チェックが合格すると、その pull request によって自動的にマージが行われます。 自動マージにより、要件が満たされるのを待つ必要がなくなるため、他のタスクに進むことができます。

プルリクエストで自動マージを使用する前に、リポジトリで自動マージを有効にする必要があります。 詳細については、「[リポジトリ内の pull request の自動マージを管理する](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)」を参照してください。

プルリクエストの自動マージを有効にした後、リポジトリへの書き込み権限を持たないユーザがプルリクエストの head ブランチに新しい変更をプッシュするか、プルリクエストのベースブランチを切り替えると、自動マージは無効になります。 たとえば、メンテナーがフォークからの pull request の自動マージを有効にした場合、コントリビューターが pull request に新しい変更をプッシュすると、自動マージは無効になります。

自動マージに関するフィードバックは [{% data variables.product.prodname_github_community %} ディスカッション](https://github.com/orgs/community/discussions/categories/pull-requests)を通じて提供できます。

## 自動マージの有効化

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

リポジトリへの書き込み権限を持つユーザは、プルリクエストの自動マージを有効化できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. [Pull Requests] リストで、自動マージするプルリクエストをクリックします。
1. 必要に応じて、マージ方法を選択するには、 **[Enable auto-merge]** ドロップダウンメニューを選択してから、マージ方法をクリックします。 詳細については、「[pull request のマージについて](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)」を参照してください。
  !["Enable auto-merge" ドロップダウン メニュー](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)
1. **[Enable auto-merge]** をクリックします。
  ![自動マージを有効にするボタン](/assets/images/help/pull_requests/enable-auto-merge-button.png) {% ifversion fpt %}
1. マージまたは squash とマージの方法を選択した場合は、コミットメッセージと説明を入力し、マージコミットを作成するメールアドレスを選択します。
  ![コミットメッセージと説明を入力し、作者のメールをコミットするフィールド](/assets/images/help/pull_requests/pull-request-information-fields.png) {% note %}

  **注釈:** 電子メールのプライバシーが有効になっている場合、あるいは {% data variables.product.company_short %} アカウントに関連付けられている電子メールが 1 つだけ検証され、表示されている場合、電子メール ドロップダウン メニューは利用できません。

  {% endnote %} {% endif %} {% ifversion ghes or ghae or ghec %}
1. マージまたはスカッシュしてマージのメソッドを選択した場合は、コミット メッセージと説明を入力します。
   ![コミット メッセージと説明を入力するフィールド](/assets/images/help/pull_requests/pull-request-information-fields-enterprise.png) {% endif %}
1. **[Confirm auto-merge]** をクリックします。

## 自動マージの無効化

リポジトリへの書き込み権限を持つユーザと、プルリクエストの作者であるユーザは、プルリクエストの自動マージを無効化できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. [Pull Requests] リストで、自動マージを無効化するプルリクエストをクリックします。
1. マージ ボックスで、 **[Confirm auto-merge]** をクリックします。
  ![自動マージを無効化するボタン](/assets/images/help/pull_requests/disable-auto-merge-button.png)
