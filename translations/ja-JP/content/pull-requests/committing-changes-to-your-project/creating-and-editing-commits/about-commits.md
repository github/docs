---
title: コミットについて
intro: 意味のある変更の小グループをコミットとして保存できます。
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
  - /github/committing-changes-to-your-project/creating-and-editing-commits/about-commits
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/commit-branch-and-tag-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6847b0a2e69fb17e648b7841a9ae250eaa9b38fa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410524'
---
## コミットについて

{% data reusables.commits.about-commits %}

{% ifversion commit-signoffs %}コミットするリポジトリで強制コミットのサインオフが有効になっており、Web インターフェイス経由でコミットする場合は、コミット プロセスの一環としてコミットで自動的にサインオフします。 詳しくは、「[リポジトリのコミット サインオフ ポリシーの管理](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)」をご覧ください。 {% endif %}

共同作業しているコミットに共作者を追加できます。 詳細については、「[複数の作者を持つコミットを作成する](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)」を参照してください。

{% ifversion fpt or ghec %} Organization に代わってコミットを作成することもできます。 詳細については、「[Organization の代理でコミットを作成する](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)」を参照してください。{% endif %}

リベースを使用すると、一連のコミットを変更したり、タイムラインでのコミットの順序を変更したりできます。 詳細については、「[Git リベースについて](/github/getting-started-with-github/about-git-rebase)」を参照してください。

## コミット ブランチとタグ ラベルについて

コミット ページのコミットの下にあるラベルを見れば、コミットがどのブランチにあるかが分かります。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. コミットメッセージリンクをクリックしてコミットに移動します。
   ![コミット メッセージ リンクが強調されたコミットのスクリーンショット](/assets/images/help/commits/commit-message-link.png)
2. コミットがどのブランチにあるかを確認するには、コミット メッセージの下にあるラベルをチェックします。
   ![コミット ブランチ インジケーターが強調されたコミットのスクリーンショット](/assets/images/help/commits/commit-branch-indicator.png)

コミットがデフォルト ブランチ (`main`) にない場合は、コミットを含むブランチを示すラベルが表示されます。 コミットがマージされていないプルリクエストの一部である場合は、リンクをクリックしてそのプルリクエストに移動できます。

コミットがデフォルトブランチにある場合は、そのコミットを含むタグがすべて表示され、ブランチのリストにはデフォルトブランチのみが表示されます。 タグの詳細については、Git ドキュメントの「[Git Basics - Tagging (Git の基本 - タグ付け)](https://git-scm.com/book/en/v2/Git-Basics-Tagging)」を参照してください。

![コミット タグが強調されたコミットのスクリーンショット](/assets/images/help/commits/commit-tag-label.png)

{% ifversion commit-tree-view %}

## ファイル ツリーの使用

ファイル ツリーを使って、コミット内のファイル間を移動できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. コミットメッセージリンクをクリックしてコミットに移動します。
   ![コミット メッセージ リンクが強調されたコミットのスクリーンショット](/assets/images/help/commits/commit-message-link.png)
1. ファイル ツリー内のファイルをクリックして、対応するファイルの diff を表示します。 ファイル ツリーが表示されない場合は、{% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} をクリックしてファイル ツリーを表示します。

  {% note %}

  **注**: 画面の幅が狭すぎる場合、またはコミットに含まれるファイルが 1 つのみの場合、ファイル ツリーは表示されません。

  {% endnote %}
  
  ![[変更したファイルのフィルタリング] 検索ボックスとファイル ツリーが強調されたスクリーンショット](/assets/images/help/repository/file-tree.png)
1. ファイル パスでフィルタリングするには、 **[Filter changed files]\(変更したファイルのフィルタリング)** 検索ボックスに、ファイル パスの一部または全部を入力します。

{% endif %}

## 参考資料
- {% data variables.product.prodname_desktop %} での「[Committing and reviewing changes to your project (プロジェクトへの変更のコミットと確認)](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits)」
