---
title: ブランチの同期
intro: 'コミットは {% data variables.product.prodname_dotcom %} のプロジェクトにプッシュされるため、リモートリポジトリからプルすることにより、プロジェクトのローカルコピーを同期した状態に保つことができます。'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
  - /desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch
versions:
  fpt: '*'
ms.openlocfilehash: eb803c8f5ef34c4ab25255c1635d31468b1b32af
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090147'
---
## ブランチの同期について

最後に同期してから {% data variables.product.product_name %} のブランチに追加されたコミットをプルすることにより、ローカルブランチをリモートリポジトリと同期できます。 別のデバイスからコミットする場合、または複数のユーザがプロジェクトに貢献する場合は、ローカルブランチを同期してブランチを更新し続ける必要があります。

ローカルブランチにプルすると、リポジトリのローカルコピーのみを更新します。 {% data variables.product.prodname_dotcom %} のブランチを更新するには、変更をプッシュする必要があります。 詳細については、「[{% data variables.product.prodname_dotcom %} に変更をプッシュする](/desktop/contributing-to-projects/pushing-changes-to-github)」を参照してください。

あるブランチから別のブランチへの変更を追加するには、ブランチをマージします。 同じリポジトリ内の別のブランチからブランチに変更を適用するには、他のブランチを {% data variables.product.prodname_desktop %} のブランチにマージします。 ブランチからの変更を、同じリポジトリまたはネットワーク内の別のリポジトリにある別のブランチにマージするようにリクエストするには、{% data variables.product.prodname_desktop %} でプルリクエストを作成します。 詳細については、「[プロジェクト ブランチに他のブランチをマージする](#merging-another-branch-into-your-project-branch)」と「[プル リクエストについて](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)」を参照してください。

一部のワークフローでは、マージではなくリベースが必要または役立つ場合があります。 リベースすることで、コミットの順序を変更したり、編集したり、まとめて squash したりできます。 詳細については、「[Git リベースについて](/github/getting-started-with-github/about-git-rebase)」と「[プロジェクト ブランチを他のブランチにリベースする](#rebasing-your-project-branch-onto-another-branch)」を参照してください。

## リモートからローカルブランチにプルする

1. {% data variables.product.prodname_desktop %} で、{% octicon "git-branch" aria-label="The branch icon" %} **[Current Branch]\(現在のブランチ\)** ドロップダウンを使用して、更新するローカル ブランチを選択します。
2.  リモート ブランチでのコミットを確認するには、 **[Fetch origin]\(元のものをフェッチ\)** をクリックします
![[Fetch origin]\(元をフェッチ\) ボタン](/assets/images/help/desktop/fetch-button.png)
3. リモート ブランチからコミットをプルするには、 **[Pull origin]\(元をプル\)** または **[Pull origin with rebase]\(リベースして元をプル\)** をクリックします。
![[Pull origin]\(元をプル\) ボタン](/assets/images/help/desktop/pull-button.png) {% data reusables.desktop.resolve-merge-conflicts %}

## プロジェクトブランチに他のブランチをマージする

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.choose-a-branch-to-merge %} {% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **注:** マージの競合がある場合、{% data variables.product.prodname_desktop %} の **[Merge <em>BRANCH</em> into <em>BRANCH</em>]\(<ブランチ名> を <ブランチ名> にマージ\)** ボタンの上に警告が表示されます。 全てのコンフリクトを解決するまではブランチをマージすることはできません。

   {% endnote %}

   ![[Merge]\(マージ\) ボタン](/assets/images/help/desktop/merge-branch-button.png) {% data reusables.desktop.push-origin %}

## プロジェクトブランチを他のブランチにリベースする

{% mac %}

1. メニュー バーで、 **[Branch]\(ブランチ\)** ドロップダウンを使用して、 **[Rebase Current Branch]\(現在のブランチのリベース\)** をクリックします。
![[Branch]\(ブランチ\) ドロップダウンの [Rebase Current Branch]\(現在のブランチのリベース\)](/assets/images/help/desktop/mac-rebase-current-branch.png)
2. 現在のブランチにリベースするブランチをクリックして、 **[Start rebase]\(リベースの開始\)** をクリックします。
![[Start rebase]\(リベースの開始\) ボタン](/assets/images/help/desktop/start-rebase-button.png)
3. 確かにリベースする場合は、 **[Begin rebase]\(リベースを始める\)** をクリックします。
![[Begin rebase]\(リベースを始める\) ボタン](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. ローカルの変更をプッシュするには、 **[Force push origin]\(元を強制的にプッシュ\)** をクリックします。
![[Force push origin]\(元を強制的にプッシュ\)](/assets/images/help/desktop/force-push-origin.png)

{% endmac %}

{% windows %}

1. **[Branch]\(ブランチ\)** ドロップダウンを使用して、 **[Rebase Current Branch]\(現在のブランチのリベース\)** をクリックします。
![[Branch]\(ブランチ\) ドロップダウンの [Rebase Current Branch]\(現在のブランチのリベース\)](/assets/images/help/desktop/windows-rebase-current-branch.png)
2. 現在のブランチにリベースするブランチをクリックして、 **[Start rebase]\(リベースの開始\)** をクリックします。
![[Start rebase]\(リベースの開始\) ボタン](/assets/images/help/desktop/start-rebase-button.png)
3. 確かにリベースする場合は、 **[Begin rebase]\(リベースを始める\)** をクリックします。
![[Begin rebase]\(リベースを始める\) ボタン](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. ローカルの変更をプッシュするには、 **[Force push origin]\(元を強制的にプッシュ\)** をクリックします。
![[Force push origin]\(元を強制的にプッシュ\)](/assets/images/help/desktop/force-push-origin.png)

{% endwindows %}

## 別のブランチをプロジェクト ブランチにスカッシュしてマージする

1. **[Branch]\(ブランチ\)** ドロップダウンを使用し、 **[Squash and Merge into Current Branch]\(現在のブランチにスカッシュとマージ\)** をクリックします。
![ブランチ ドロップダウンのスカッシュとマージ](/assets/images/help/desktop/squash-and-merge-menu.png)
2. 現在のブランチにマージするブランチをクリックして、 **[Squash and merge]\(スカッシュしてマージ\)** をクリックします。
![[Squash and merge]\(スカッシュしてマージ\) ボタン](/assets/images/help/desktop/squash-and-merge-selection.png) {% note %}

   **注:** マージの競合がある場合、{% data variables.product.prodname_desktop %} の **[Squash and merge]\(スカッシュしてマージ\)** ボタンの上に警告が表示されます。 全ての競合を解決するまで、ブランチをスカッシュしてマージすることはできません。

   {% endnote %} {% data reusables.desktop.push-origin %}

## もっと読む
- {% data variables.product.prodname_dotcom %} 用語集の "[プル](/github/getting-started-with-github/github-glossary#pull)"
- {% data variables.product.prodname_dotcom %} 用語集の "[マージ](/github/getting-started-with-github/github-glossary#merge)"
- {% data variables.product.prodname_dotcom %} 用語集の "[リベース](/github/getting-started-with-github/github-glossary#rebase)"
