---
title: ブランチを管理する
intro: リポジトリのデフォルトブランチからブランチを作成して、変更を安全に試すことができます。
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-branches
versions:
  fpt: '*'
ms.openlocfilehash: 30604c6b3ed0ab9ca5c0f3f8ca0fe853624ee86b
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117549'
---
## ブランチの管理について
ブランチを使用して、プロジェクトの変更を安全に試すことができます。 ブランチは、開発作業をリポジトリ内の他のブランチから分離します。 たとえば、ブランチを使用して新しい機能を開発したり、バグを修正したりすることができます。

ブランチは常に既存のものから作成します。 通常、リポジトリのデフォルトブランチからブランチを作成します。 その後、他の人がリポジトリに加えた変更とは別に、新しいブランチで作業できます。

ブランチの履歴で、以前のコミットから始まるブランチを作成することもできます。 これは、バグを調査するためにリポジトリの以前のビューに戻る必要がある場合や、最新リリースの上にホットフィックスを作成する必要がある場合に役立ちます。

作業が完了したら、プルリクエストを作成して、現在のブランチの変更を別のブランチにマージできます。 詳細については、「[Issue もしくはプル リクエストの作成](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)」および「[プル リクエストについて](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)」を参照してください。

リポジトリへの読み取りアクセスがある場合は、常に {% data variables.product.prodname_desktop %} でブランチを作成できますが、リポジトリへの書き込みアクセスがある場合のみ、ブランチを {% data variables.product.prodname_dotcom %} にプッシュできます。

{% data reusables.desktop.protected-branches %}

## ブランチの作成

{% tip %}

**ヒント:** 最初に作成する新しいブランチは、既定のブランチを基にしています。 複数のブランチがある場合、現在チェックアウトされているブランチまたはデフォルトのブランチに基づいて、新しいブランチを選択できます。

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![現在のブランチに切り替えるドロップダウン メニュー](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.create-new-branch %} ![[ブランチ] メニューの [新しいブランチ] オプション](/assets/images/help/desktop/new-branch-button-mac.png) {% data reusables.desktop.name-branch %} ![新しいブランチ名の作成に使用するフィールド](/assets/images/help/desktop/create-branch-name-mac.png) {% data reusables.desktop.select-base-branch %} ![ベース ブランチ オプション](/assets/images/help/desktop/create-branch-choose-branch-mac.png) {% data reusables.desktop.confirm-new-branch-button %} ![[ブランチの作成] ボタン](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![現在のブランチに切り替えるドロップダウン メニュー](/assets/images/help/desktop/click-branch-in-drop-down-win.png) {% data reusables.desktop.create-new-branch %} ![[ブランチ] メニューの [新しいブランチ] オプション](/assets/images/help/desktop/new-branch-button-win.png) {% data reusables.desktop.name-branch %} ![新しいブランチ名の作成に使用するフィールド](/assets/images/help/desktop/create-branch-name-win.png) {% data reusables.desktop.select-base-branch %} ![ベース ブランチ オプション](/assets/images/help/desktop/create-branch-choose-branch-win.png) {% data reusables.desktop.confirm-new-branch-button %} ![[ブランチの作成] ボタン](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

## 以前のコミットからブランチを作成する

{% data reusables.desktop.history-tab %}
2. 新しいブランチを作成するコミットを右クリックし、 **[コミットからブランチの作成]** を選択します。
  ![[コミットからブランチを作成する] コンテキスト メニュー](/assets/images/help/desktop/create-branch-from-commit-context-menu.png) {% data reusables.desktop.name-branch %} {% data reusables.desktop.confirm-new-branch-button %} ![コミットからブランチを作成する](/assets/images/help/desktop/create-branch-from-commit-overview.png)

## ブランチを公開する

{% data variables.product.product_name %} にブランチを作成する場合は、ブランチを公開して、{% data variables.product.prodname_dotcom %} でのコラボレーションに使用できるようにする必要があります。

1. アプリの丈夫で、{% octicon "git-branch" aria-label="The branch icon" %} **[現在のブランチ]** をクリックし、公開するブランチをクリックします。
  ![公開するブランチを選択するドロップダウンメニュー](/assets/images/help/desktop/select-branch-from-dropdown.png)
2. **[ブランチを公開する]** をクリックします。
  ![[ブランチを公開する] ボタン](/assets/images/help/desktop/publish-branch-button.png)

## ブランチ間の切り替え
リポジトリのどんなブランチに対しても、コミットを表示したり、コミットを行ったりすることができます。 まだコミットしていない、保存した変更がある場合は、その変更の扱いについて、ブランチを切り替える前に決める必要があります。 現在のブランチに変更をコミットする、現在のブランチへの変更を一時的に保存するために stash する、または変更を新しいブランチに移動することが可能です。 ブランチを切り替える前に変更をコミットする場合は、「[プロジェクトへの変更のコミットやレビュー](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)」を参照してください。
{% tip %}

**ヒント**: ブランチを切り替える場合の既定の動作は、 **[詳細]** で設定できます。 詳細については、「[ベーシック設定](/desktop/getting-started-with-github-desktop/configuring-basic-settings)」を参照してください。

{% endtip %}

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.switching-between-branches %} ![リポジトリ内のブランチのリスト](/assets/images/help/desktop/select-branch-from-dropdown.png)
3. 保存はしたが、確定されていない変更がある場合は、 **[変更を残す]** または **[変更を反映させる]** を選択し、 **[ブランチの切り替え]** をクリックします。
  ![変更のオプションと [ブランチの切り替え]](/assets/images/help/desktop/stash-changes-options.png)

## ブランチの削除

現時点でブランチがオープンなプルリクエストに関連付けられている場合は、ブランチを削除できません。 ブランチの削除を取り消すことはできません。

{% mac %}

{% data reusables.desktop.select-branch-to-delete %} ![削除するブランチを選ぶドロップダウン メニュー](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-mac %} ![ブランチ メニュー内の [削除] オプション](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %} ![削除するブランチを選ぶドロップダウン メニュー](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-win %} ![ブランチ メニュー内の [削除] オプション](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

## 参考資料

- [{% data variables.product.prodname_desktop %} からリポジトリをクローンする方法](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)
- {% data variables.product.prodname_dotcom %} 用語集の "[ブランチ](/articles/github-glossary/#branch)"
- [ブランチについて](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- Git ドキュメントの 「[Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)」\(ブランチの要点\)
- [Stash の変更](/desktop/contributing-and-collaborating-using-github-desktop/stashing-changes)
